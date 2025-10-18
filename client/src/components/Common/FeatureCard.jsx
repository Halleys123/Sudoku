export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className='flex items-start gap-2'>
      <Icon className='text-shade-900 dark:text-shade-50 text-xl mt-0.5 flex-shrink-0' />
      <div>
        <p className='font-semibold text-shade-900 dark:text-shade-50'>
          {title}
        </p>
        <p className='text-shade-700 dark:text-shade-300'>{description}</p>
      </div>
    </div>
  );
}
