import SideNavButton from '@components/Navigation/SideNavButton.jsx';

export default function SideNavigation({
  minimized,
  open,
  setMinimized,
  // setOpen,
}) {
  return (
    <div
      style={{
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out',
        width: minimized ? '4rem' : '16rem',
      }}
      className='absolute px-2 pb-2 left-0 top-0 flex flex-col h-screen bg-shade-100 dark:bg-shade-800 border-r border-shade-200 dark:border-shade-700'
    >
      <div
        id='heading'
        className='h-20 w-full flex items-center justify-center'
      >
        <span className='text-shade-900 dark:text-shade-50 font-secondary text-2xl font-semibold'>
          {minimized ? 'S' : 'Sudoku'}
        </span>
      </div>
      <div className='flex flex-1 flex-col gap-4 items-center'></div>
      <div className='flex flex-col gap-2'>
        <SideNavButton
          text='Minimize'
          icon='⇔'
          minimized={minimized}
          onClick={() => setMinimized(!minimized)}
        />
      </div>
    </div>
  );
}
