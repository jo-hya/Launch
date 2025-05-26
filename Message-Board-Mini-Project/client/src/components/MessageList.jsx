import { useEffect, useState } from "react";
import api from "../api";
import MessageItem from "./MessageItem";

export default function MessageList({ refreshKey }) {
  const [posts, setPosts] = useState([]);
  const [range, setRange] = useState("");

  const fetchPosts = async (time) => {
  try {
    const { data } = await api.get("/posts", { params: time ? { time } : {} });

    setPosts(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error(err);
    setPosts([]);
  }
};

  useEffect(() => { fetchPosts(range); }, [refreshKey, range]);

  return (
    <>
      <select value={range} onChange={(e)=>setRange(e.target.value)}>
        <option value="">All time</option>
        <option value="hour">Last hour</option>
        <option value="day">Last day</option>
        <option value="week">Last week</option>
      </select>

      <ul>
        {posts.map(p => (
          <MessageItem key={p.id} post={p} refresh={()=>fetchPosts(range)} />
        ))}
      </ul>
    </>
  );
}