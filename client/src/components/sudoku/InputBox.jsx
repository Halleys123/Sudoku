export default function InputBox({ number }) {
  return (
    <div className='border-shade-700 w-12 h-12 group transition-colors hover:bg-shade-100 items-center justify-center flex rounded-lg bg-shade-50 select-none cursor-pointer'>
      <span className='font-secondary text-shade-800 text-xl group-hover:text-primary-400'>
        {number}
      </span>
    </div>
  );
}
