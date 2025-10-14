import { useContext } from 'react';
import MessageContext from '@contexts/MessageContext';

export default function useMessage() {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error('useMessage must be used within a MessageProvider');
  return ctx;
}
