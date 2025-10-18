import { memo } from 'react';
import { motion } from 'framer-motion';

const MotionButton = motion.button;

function GroupToggle({ options, activeMap = {}, onToggle }) {
  if (!Array.isArray(options) || options.length < 2) {
    throw new Error('GroupToggle requires at least two options.');
  }

  const handleToggle = (value, nextState) => {
    if (typeof onToggle === 'function') {
      onToggle(value, nextState);
    }
  };

  const getButtonRadius = (index) => {
    if (options.length === 2) return 'rounded-lg';
    if (index === 0) return 'rounded-l-lg rounded-r-lg';
    if (index === options.length - 1) return 'rounded-r-lg rounded-l-lg';
    return 'rounded-lg';
  };

  return (
    <div className='relative flex flex-row items-stretch p-1.5 h-12 bg-shade-50 rounded-lg shadow-inner gap-2'>
      {options.map((opt, index) => {
        if (!opt?.label || !opt?.value) {
          throw new Error('Each option must provide both a label and a value.');
        }

        const isActive = Boolean(activeMap?.[opt.value]);

        return (
          <MotionButton
            type='button'
            key={opt.value}
            className={`relative flex-1 h-full px-4 font-bold font-primary text-center text-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200/80 flex items-center justify-center ${getButtonRadius(
              index
            )}`}
            onClick={() => handleToggle(opt.value, !isActive)}
            animate={{
              backgroundColor: isActive
                ? 'var(--color-primary-200)'
                : 'var(--color-shade-0, #ffffff)',
              color: isActive
                ? 'var(--color-shade-900)'
                : 'var(--color-neutral-700)',
              boxShadow: isActive
                ? '0 12px 24px -12px rgba(112, 94, 255, 0.55)'
                : '0 0 0 rgba(0,0,0,0)',
            }}
            whileTap={{ scale: 0.97 }}
            whileHover={{
              boxShadow: isActive
                ? '0 16px 28px -12px rgba(112, 94, 255, 0.6)'
                : '0 4px 12px -6px rgba(0,0,0,0.08)',
            }}
          >
            {opt.label}
          </MotionButton>
        );
      })}
    </div>
  );
}

export default memo(GroupToggle);
