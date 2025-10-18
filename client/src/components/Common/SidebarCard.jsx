export default function SidebarCard({ title, children, className = '' }) {
  return (
    <div
      className={`border-2 border-shade-900 dark:border-shade-50 p-6 bg-shade-100 dark:bg-shade-800 ${className}`}
    >
      {title && (
        <h3 className='text-lg font-secondary font-bold uppercase text-shade-900 dark:text-shade-50 border-b-2 border-shade-900 dark:border-shade-50 pb-2 mb-4'>
          {title}
        </h3>
      )}
      <div className='space-y-4 text-sm'>{children}</div>
    </div>
  );
}
