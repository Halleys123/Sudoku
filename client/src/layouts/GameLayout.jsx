import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '@components/Navigation/SideNavigation.jsx';
import TopNavigation from '@components/Navigation/TopNavigation.jsx';

export default function GameLayout() {
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [navigationMinimized, setNavigationMinimized] = useState(false);

  return (
    <div className='relative font-primary bg-shade-50 dark:bg-shade-900 text-shade-900 dark:text-shade-50 h-screen w-screen overflow-hidden flex flex-row'>
      <div className='flex flex-1 flex-row gap-0 h-full'>
        <SideNavigation
          open={navigationOpen}
          minimized={navigationMinimized}
          setOpen={setNavigationOpen}
          setMinimized={setNavigationMinimized}
        />
        <div className='flex-1 flex flex-col h-full'>
          <TopNavigation />
          <main className='flex-1 overflow-y-auto'>
            <div className='min-h-full flex items-start justify-center p-4'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
