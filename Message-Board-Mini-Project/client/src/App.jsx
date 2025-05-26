import { useState } from "react";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <>
      <h1>Mini Message Board</h1>
      <MessageForm onPostSuccess={()=>setRefreshKey(k=>k+1)}/>
      <MessageList refreshKey={refreshKey}/>
    </>
  );
}