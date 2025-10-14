export default function GameLayout({ children }) {
  return (
    <div className='relative font-primary text-shade-50 min-h-screen w-screen overflow-x-hidden flex flex-col items-center justify-center bg-primary-400'>
      {children}
    </div>
  );
}
