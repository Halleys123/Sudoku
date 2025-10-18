export default function PageHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className='border-b-4 border-double border-shade-900 dark:border-shade-50 pb-6 mb-10'>
      <div className='flex items-center justify-center gap-4 mb-3'>
        <div className='h-px flex-1 bg-shade-300 dark:bg-shade-700 max-w-xs'></div>
        <Icon className='text-3xl text-shade-900 dark:text-shade-50' />
        <div className='h-px flex-1 bg-shade-300 dark:bg-shade-700 max-w-xs'></div>
      </div>

      <h1 className='text-center text-4xl md:text-5xl font-secondary font-black text-shade-900 dark:text-shade-50 mb-2'>
        {title}
      </h1>

      <p className='text-center text-sm text-shade-700 dark:text-shade-300 italic'>
        {subtitle}
      </p>
    </div>
  );
}
