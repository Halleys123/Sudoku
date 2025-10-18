import { IoMoon, IoSunny } from 'react-icons/io5';
import useTheme from '@hooks/useTheme';

export default function ThemeToggleButton({
  className = '',
  showLabel = false,
}) {
  const { isDarkMode, toggleTheme } = useTheme();

  const baseClasses =
    'inline-flex items-center justify-center p-2 rounded-lg border-2 border-shade-900 dark:border-shade-50 bg-white dark:bg-shade-900 text-shade-900 dark:text-shade-50 transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]';

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className={`${baseClasses} ${className}`.trim()}
      aria-label='Toggle theme'
    >
      {showLabel ? (
        <span className='text-xs font-semibold uppercase tracking-widest'>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      ) : isDarkMode ? (
        <IoSunny className='text-xl' />
      ) : (
        <IoMoon className='text-xl' />
      )}
    </button>
  );
}
