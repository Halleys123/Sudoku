import ThemeToggleButton from '@components/Common/ThemeToggleButton.jsx';

export default function TopNavigation() {
  return (
    <div className='h-20 w-full bg-shade-100 dark:bg-shade-800 border-b border-shade-200 dark:border-shade-700 flex items-center justify-end px-6'>
      <ThemeToggleButton />
    </div>
  );
}
