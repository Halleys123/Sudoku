import { useState } from 'react';
import MessageContext from '@contexts/MessageContext';

export default function MessageProvider() {
  const [messages, setMessages] = useState([]);
  function addMessage({ heading, message, type }) {
    setMessages((prev) => [
      ...prev,
      { heading, message, type, insertTime: Date.now() },
    ]);
  }

  return (
    <MessageContext.Provider
      value={{ messages, addMessage }}
    ></MessageContext.Provider>
  );
}
