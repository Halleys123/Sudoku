export default function StatusNotice({ label, title, description }) {
  return (
    <div className='border-4 border-double border-shade-900 dark:border-shade-50 p-8 bg-shade-50 dark:bg-shade-900 text-center'>
      <div className='inline-block border-2 border-shade-900 dark:border-shade-50 px-4 py-1 mb-3'>
        <span className='text-xs font-bold uppercase tracking-widest text-shade-900 dark:text-shade-50'>
          {label}
        </span>
      </div>
      <h3 className='text-xl font-secondary font-bold text-shade-900 dark:text-shade-50 mb-2'>
        {title}
      </h3>
      <p className='text-base text-shade-700 dark:text-shade-300 max-w-2xl mx-auto'>
        {description}
      </p>
    </div>
  );
}
