import { createPortal } from 'react-dom';
import Message from '@components/message/Message';
import useMessage from '@hooks/useMessage';

export default function MessageContainer() {
  const { messages } = useMessage();

  return createPortal(
    <div className='absolute bottom-4 right-4 flex flex-col z-10'>
      {messages.map(({ heading, message, type, insertTime }) => (
        <Message
          key={insertTime}
          heading={heading}
          message={message}
          type={type}
        />
      ))}
    </div>,
    document.getElementById('root')
  );
}
