import { useState } from "react";
import api from "../api";

export default function MessageForm({ onPostSuccess }) {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await api.post("/posts", { username, text });
    setText("");
    onPostSuccess();
  };

  return (
    <form onSubmit={submit}>
      <input value={username} onChange={(e)=>setUsername(e.target.value)}
             placeholder="Name"/>
      <input value={text} onChange={(e)=>setText(e.target.value)}
             placeholder="Message"/>
      <button>Post</button>
    </form>
  );
}