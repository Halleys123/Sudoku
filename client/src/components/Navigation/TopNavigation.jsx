import { BsCaretLeft } from 'react-icons/bs';

import ThemeToggleButton from '@components/Common/ThemeToggleButton.jsx';
import MiniButton from '@components/Common/MiniButton.jsx';

export default function TopNavigation({ open, setOpen }) {
  const caretClasses = `text-xl text-shade-900 dark:text-shade-50 transform ${
    !open ? 'rotate-180' : ''
  }`;

  return (
    <div className='h-20 w-full bg-shade-100 dark:bg-shade-800 border-b border-shade-200 dark:border-shade-700 flex items-center justify-end gap-3 px-6'>
      <div className='flex flex-1 gap-1'>
        <MiniButton
          ariaLabel={open ? 'Expand navigation' : 'Collapse navigation'}
          onClick={() => setOpen(!open)}
          icon={BsCaretLeft}
          iconClassName={caretClasses}
        />
      </div>
      <ThemeToggleButton />
    </div>
  );
}
