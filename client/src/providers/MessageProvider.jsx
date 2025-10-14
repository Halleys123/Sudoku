import { useState, useEffect, useCallback } from 'react';
import MessageContext from '@contexts/MessageContext.jsx';

export default function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const addMessage = useCallback(({ heading, message, type }) => {
    setMessages((prev) => [
      ...prev,
      { heading, message, type, insertTime: Date.now() },
    ]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((prev) =>
        prev.filter((msg) => Date.now() - msg.insertTime < 5000)
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [messages]);

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
