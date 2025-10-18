import { Link } from 'react-router-dom';

const options = [
  {
    title: 'Single Player',
    description:
      'Sharpen your skills with curated puzzles built for calm focus or timed sprints.',
    accent:
      'from-primary-500/90 to-primary-700/90 shadow-primary-600/40 border-primary-300/30',
    path: '/single-player',
  },
  {
    title: 'Competitive',
    description:
      'Race the clock and climb matchmade ladders against players who love the rush.',
    accent:
      'from-secondary-400/85 to-secondary-600/85 shadow-secondary-600/30 border-secondary-200/30',
    path: '/competitive',
  },
  {
    title: 'Leaderboard',
    description:
      'Track global streaks, fastest solves, and see who is ruling today’s grid.',
    accent:
      'from-primary-400/75 to-primary-600/80 shadow-primary-500/30 border-primary-200/30',
    path: '/leaderboard',
  },
  {
    title: 'My Stats',
    description:
      'Visualize your progress, accuracy, and speed trends across every puzzle tier.',
    accent:
      'from-secondary-300/75 to-secondary-500/80 shadow-secondary-400/30 border-secondary-100/30',
    path: '/my-stats',
  },
];

export default function Homepage() {
  return (
    <section className='relative w-full px-6 py-16 md:px-10 lg:px-16 lg:py-20 xl:px-24'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-32 right-12 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl' />
        <div className='absolute bottom-0 left-[-6rem] h-80 w-80 rounded-full bg-secondary-500/20 blur-3xl' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_65%)]' />
      </div>

      <div className='mx-auto flex w-full max-w-6xl flex-col gap-14 lg:flex-row'>
        <div className='relative flex-1 space-y-8'>
          <span className='inline-flex items-center gap-2 rounded-full border border-primary-400/20 bg-primary-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-200/80'>
            Welcome to Gridforge
          </span>
          <h1 className='text-4xl font-secondary font-extrabold tracking-tight text-shade-50 sm:text-5xl lg:text-6xl'>
            Sudoku mastery for every mood
          </h1>
          <p className='max-w-xl text-base text-shade-100/80 sm:text-lg'>
            Drop into a neon-lit dojo built for tacticians. Warm up solo,
            challenge the arena, and savor your climb with slick analytics and
            seasonal rewards.
          </p>
          <div className='flex flex-wrap items-center gap-4'>
            <button className='rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-shade-50 shadow-[0_18px_40px_-18px_rgba(14,165,233,0.6)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-primary-400 hover:shadow-[0_22px_50px_-18px_rgba(14,165,233,0.75)]'>
              Start Solving
            </button>
            <button className='rounded-full border-2 border-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-300 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary-400 hover:bg-primary-950 hover:text-primary-200'>
              Watch Tutorial
            </button>
          </div>
        </div>

        <div className='flex w-full flex-1 flex-col gap-6'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {options.map(({ title, description, accent, path }) => (
              <Link
                key={title}
                to={path}
                className={`group relative overflow-hidden rounded-2xl border ${accent} px-5 py-6 text-left shadow-[0_25px_40px_-22px_rgba(12,10,30,0.8)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_30px_50px_-22px_rgba(12,10,30,0.95)]`}
              >
                {/* <div className='absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-20'>
                  <div className='absolute inset-y-0 right-0 w-1/3 bg-gradient-to-t from-shade-950 via-transparent to-transparent' />
                </div> */}
                <h2 className='text-2xl font-secondary font-bold text-shade-50'>
                  {title}
                </h2>
                <p className='mt-3 text-sm text-shade-50/80'>{description}</p>
                <span className='mt-6 flex items-center gap-2 text-sm font-semibold text-shade-50/90'>
                  Enter mode
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full border border-shade-50/30 text-xs'>
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className='rounded-3xl border border-primary-400/25 bg-shade-900/60 p-6 shadow-[0_25px_40px_-22px_rgba(7,89,133,0.65)] backdrop-blur-sm'>
            <div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
              <div>
                <h3 className='text-xl font-secondary font-semibold text-shade-50'>
                  Log in or Sign up
                </h3>
                <p className='mt-2 max-w-sm text-sm text-shade-100/70'>
                  Sync your solves across devices, unlock ranked seasons, and
                  collect exclusive themes.
                </p>
              </div>
              <button className='rounded-full bg-secondary-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-shade-50 shadow-[0_20px_35px_-20px_rgba(192,38,211,0.65)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-secondary-500 hover:shadow-[0_24px_45px_-20px_rgba(192,38,211,0.8)]'>
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
