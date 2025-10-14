import MessageProvider from '@providers/MessageProvider.jsx';

export default function GeneralLayout({ children }) {
  return (
    <MessageProvider>
      <div className='relative font-primary text-shade-50 min-h-screen w-screen overflow-x-hidden flex flex-col items-center justify-center bg-shade-800'>
        {children}
      </div>
    </MessageProvider>
  );
}
