export default function MiniButton({
  type = 'button',
  className = '',
  ariaLabel,
  icon: Icon,
  iconClassName = 'text-xl',
  children,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center p-2 rounded-lg border-2 border-shade-900 dark:border-shade-50 bg-white dark:bg-shade-900 text-shade-900 dark:text-shade-50 transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]';

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`${baseClasses} ${className}`.trim()}
      {...props}
    >
      {Icon ? <Icon className={iconClassName} /> : children}
    </button>
  );
}
