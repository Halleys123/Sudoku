export default function FeatureGrid({ title, children, className = '' }) {
  return (
    <div
      className={`border-t-2 border-shade-900 dark:border-shade-50 pt-8 ${className}`}
    >
      {title && (
        <h2 className='text-2xl font-secondary font-bold uppercase text-shade-900 dark:text-shade-50 mb-6 text-center'>
          — {title} —
        </h2>
      )}
      {children}
    </div>
  );
}
