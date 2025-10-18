export default function SideNavButton({ text, icon, minimized, onClick }) {
  return (
    <button
      onClick={onClick}
      className='w-full flex rounded-md items-center gap-4 px-4 py-2 text-sm text-shade-900 dark:text-shade-50 bg-shade-200 dark:bg-shade-700 hover:bg-shade-300 dark:hover:bg-shade-600 transition-colors'
    >
      <span className='text-lg'>{icon}</span>
      {!minimized && <span>{text}</span>}
    </button>
  );
}
