import { Outlet } from 'react-router-dom';
import ThemeToggleButton from '@components/Common/ThemeToggleButton.jsx';

export default function GeneralLayout() {
  return (
    <div className='relative font-primary text-shade-900 dark:text-shade-50 min-h-screen w-screen overflow-x-hidden flex flex-col bg-shade-50 dark:bg-shade-900'>
      <div className='absolute right-6 top-6 z-10'>
        <ThemeToggleButton />
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <Outlet />
      </div>
    </div>
  );
}
