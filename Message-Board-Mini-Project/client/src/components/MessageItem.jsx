import api from "../api";

export default function MessageItem({ post, refresh }) {
  const del = async () => {
    if (window.confirm("Delete this message?")) {
      await api.delete(`/posts/${post.id}`);
      refresh();
    }
  };
  return (
    <li>
      <strong>{post.username}</strong>: {post.text}
      <button onClick={del}>Delete</button>
    </li>
  );
}