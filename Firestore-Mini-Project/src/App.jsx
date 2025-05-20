import { useEffect, useState } from 'react';
import { db } from './firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';

export default function App() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'responses'), orderBy('votes', 'desc'));
    return onSnapshot(q, (snap) =>
      setResponses(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await addDoc(collection(db, 'responses'), { text: input.trim(), votes: 0 });
    setInput('');
  };

  const vote = (id, votes) =>
    updateDoc(doc(db, 'responses', id), { votes: votes + 1 });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>What's the Best Scent?</h2>
      <form onSubmit={submit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type one..."
        />
        <button>Add</button>
      </form>

      <ul>
        {responses.map((r) => (
          <li key={r.id}>
            {r.text} — {r.votes}
            <button onClick={() => vote(r.id, r.votes)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}