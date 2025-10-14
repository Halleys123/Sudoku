import { createPortal } from 'react-dom';
import Message from '@components/message/Message';

export default function MessageContainer() {
  return createPortal(
    <div className='absolute bottom-4 right-4 flex flex-col z-10'>
      <Message
        heading='Success!'
        message='Your action was successful This means you may win or not'
        type='success'
      />
    </div>,
    document.getElementById('root')
  );
}
