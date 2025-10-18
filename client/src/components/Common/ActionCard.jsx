import { Link } from 'react-router-dom';

export default function ActionCard({
  title,
  description,
  icon: Icon,
  path,
  onClick,
}) {
  const classes =
    'group border-2 border-shade-300 dark:border-shade-600 bg-white dark:bg-shade-800 p-6 transition-all hover:border-shade-900 dark:hover:border-shade-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-left';

  const content = (
    <>
      <Icon className='text-4xl text-shade-900 dark:text-shade-50 mb-3' />
      <h3 className='text-xl font-secondary font-bold text-shade-900 dark:text-shade-50 mb-1'>
        {title}
      </h3>
      <p className='text-sm text-shade-700 dark:text-shade-300'>
        {description}
      </p>
    </>
  );

  if (path) {
    return (
      <Link to={path} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
