import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Toggle({ options, selected, setSelected }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { selectedIndex, optionWidth } = useMemo(() => {
    if (!Array.isArray(options) || options.length < 2 || options.length > 4) {
      throw new Error('Toggle component requires 2 to 4 options.');
    }

    if (!options.every((opt) => opt.label && opt.value)) {
      throw new Error('Each option must have a label and a value.');
    }

    const selectedExists = options.some((opt) => opt.value === selected);
    if (!selectedExists) {
      throw new Error(`Selected value "${selected}" is not in the options.`);
    }

    const index = options.findIndex((opt) => opt.value === selected);
    const width = 100 / options.length;

    return { selectedIndex: index, optionWidth: width };
  }, [options, selected]);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;

  const getSliderBorderRadius = () => {
    if (options.length === 2) return '9999px';
    if (activeIndex === 0) return '9999px 12px 12px 9999px';
    if (activeIndex === options.length - 1) return '12px 9999px 9999px 12px';
    return '12px';
  };

  const getButtonBorderRadius = (index) => {
    if (options.length === 2) return 'rounded-full';
    if (index === 0) return 'rounded-l-full rounded-r-lg';
    if (index === options.length - 1) return 'rounded-r-full rounded-l-lg';
    return 'rounded-lg';
  };

  return (
    <div className='relative flex flex-row p-1.5 h-14 bg-shade-50 rounded-full shadow-inner'>
      <motion.div
        className='absolute top-1.5 bottom-1.5 bg-gradient-to-br from-primary-100 to-primary-200 shadow-md'
        animate={{
          left: `${activeIndex * optionWidth}%`,
          borderRadius: getSliderBorderRadius(),
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
        style={{
          width: `calc(${optionWidth}% - 0.75rem)`,
          marginLeft: '0.375rem',
        }}
      />

      {options.map((opt, index) => {
        const isActive = index === activeIndex;
        return (
          <motion.button
            key={opt.value}
            className={`relative cursor-pointer z-10 flex-1 px-4 font-bold font-primary transition-colors duration-200 ${getButtonBorderRadius(
              index
            )}`}
            onClick={() => setSelected(opt.value)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              color: isActive
                ? 'var(--color-shade-900)'
                : 'var(--color-neutral-700)',
            }}
            transition={{ duration: 0.2 }}
          >
            {opt.label}
          </motion.button>
        );
      })}
    </div>
  );
}
