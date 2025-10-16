import { memo } from 'react';

export default memo(function BlocksRemaining({ count }) {
  if (!count) return null;

  return (
    <div className='absolute flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 bg-primary-600 rounded-md top-0 right-0 -translate-y-1.5 translate-x-1.5'>
      <span className='text-xs text-shade-50 font-primary font-bold'>
        {count}
      </span>
    </div>
  );
});
