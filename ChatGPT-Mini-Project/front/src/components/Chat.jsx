/*  Chat.jsx  */
import { useState, useRef } from "react";
import axios from "axios";
import "./Chat.css";               // optional—style file shown below

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input,   setInput]     = useState("");
  const bottomRef = useRef(null);

  // ──────────────────────────────────────────────────────────
  //  Send a message to the backend (and then to OpenAI)
  // ──────────────────────────────────────────────────────────
  const send = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1️⃣  add the user’s message to local history
    const userMsg = { role: "user", content: input.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");

    try {
      // 2️⃣  call your Express endpoint
      //     (use full URL OR keep '/api/chat' if you set up the Vite proxy)
      const { data } = await axios.post(
        "http://localhost:5001/api/chat",
        { messages: history }
      );

      // 3️⃣  append assistant reply
      setMessages((curr) => [...curr, data.reply]);
    } catch (err) {
      console.error(err);
      setMessages((curr) => [
        ...curr,
        { role: "assistant", content: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      // scroll chat to bottom
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-log">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            {m.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={send} className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
