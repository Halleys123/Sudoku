export default function ContentCard({
  title,
  subtitle,
  children,
  className = '',
}) {
  return (
    <div
      className={`border-2 border-shade-900 dark:border-shade-50 p-6 bg-white dark:bg-shade-800 ${className}`}
    >
      {(title || subtitle) && (
        <div className='border-b-2 border-shade-900 dark:border-shade-50 pb-3 mb-4'>
          {subtitle && (
            <span className='text-xs font-bold uppercase tracking-widest text-shade-600 dark:text-shade-400'>
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className='text-2xl md:text-3xl font-secondary font-bold text-shade-900 dark:text-shade-50 mt-1'>
              {title}
            </h2>
          )}
        </div>
      )}
      <div className='text-base text-shade-800 dark:text-shade-200 leading-relaxed'>
        {children}
      </div>
    </div>
  );
}
