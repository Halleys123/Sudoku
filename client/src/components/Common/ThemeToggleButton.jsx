import { IoMoon, IoSunny } from 'react-icons/io5';
import useTheme from '@hooks/useTheme';
import MiniButton from '@components/Common/MiniButton.jsx';

export default function ThemeToggleButton({
  className = '',
  showLabel = false,
}) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <MiniButton
      onClick={toggleTheme}
      ariaLabel='Toggle theme'
      className={className}
      icon={showLabel ? undefined : isDarkMode ? IoSunny : IoMoon}
    >
      {showLabel ? (
        <span className='text-xs font-semibold uppercase tracking-widest'>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      ) : null}
    </MiniButton>
  );
}
