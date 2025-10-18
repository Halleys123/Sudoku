import ContentCard from '@components/Common/ContentCard.jsx';
import SidebarCard from '@components/Common/SidebarCard.jsx';
import FeatureCard from '@components/Common/FeatureCard.jsx';
import FeatureGrid from '@components/Common/FeatureGrid.jsx';
import ActionCard from '@components/Common/ActionCard.jsx';
import ThemeToggleButton from '@components/Common/ThemeToggleButton.jsx';
import { FaTrophy, FaChartLine } from 'react-icons/fa';
import { IoGrid, IoFlash, IoTrendingUp } from 'react-icons/io5';
import { RiSwordLine } from 'react-icons/ri';

const options = [
  {
    title: 'Single Player',
    description:
      'Sharpen your skills with curated puzzles built for calm focus or timed sprints.',
    Icon: IoGrid,
    path: '/single-player',
  },
  {
    title: 'Competitive',
    description:
      'Race the clock and climb matchmade ladders against players who love the rush.',
    Icon: RiSwordLine,
    path: '/competitive',
  },
  {
    title: 'Leaderboard',
    description:
      'Track global streaks, fastest solves, and see who is ruling the grid.',
    Icon: FaTrophy,
    path: '/leaderboard',
  },
  {
    title: 'My Stats',
    description:
      'Visualize your progress, accuracy, and speed trends across every puzzle tier.',
    Icon: FaChartLine,
    path: '/my-stats',
  },
];

export default function Homepage() {
  return (
    <section className='relative w-full px-6 py-12 md:px-10 lg:px-16 xl:px-24'>
      {/* Floating decorative elements - newspaper style ornaments */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 right-[15%] text-shade-200 dark:text-shade-700 opacity-40'>
          <IoGrid size={80} />
        </div>
        <div className='absolute top-[40%] left-[8%] text-shade-200 dark:text-shade-700 opacity-30'>
          <IoTrendingUp size={60} />
        </div>
        <div className='absolute bottom-[25%] right-[10%] text-shade-200 dark:text-shade-700 opacity-35'>
          <IoFlash size={70} />
        </div>
      </div>

      <div className='mx-auto w-full max-w-7xl'>
        {/* Header Section - Newspaper Masthead Style */}
        <div className='border-b-4 border-double border-shade-900 dark:border-shade-50 pb-8 mb-12'>
          <div className='flex items-center justify-between mb-4'>
            <div className='h-px flex-1 bg-shade-300 dark:bg-shade-700'></div>
            <span className='px-4 text-xs font-semibold uppercase tracking-[0.3em] text-shade-600 dark:text-shade-400'>
              Est. 2025
            </span>
            <div className='h-px flex-1 bg-shade-300 dark:bg-shade-700'></div>
          </div>

          <h1 className='text-center text-5xl md:text-6xl lg:text-7xl font-secondary font-black tracking-tight text-shade-900 dark:text-shade-50 mb-2'>
            GRIDFORGE
          </h1>

          <p className='text-center text-sm md:text-base text-shade-700 dark:text-shade-300 italic mb-4'>
            &quot;Master the Grid, Challenge the Mind&quot;
          </p>

          <div className='flex items-center justify-center gap-4 text-xs text-shade-600 dark:text-shade-400 uppercase tracking-wider'>
            <span>Daily Puzzles</span>
            <span>•</span>
            <span>Global Rankings</span>
            <span>•</span>
            <ThemeToggleButton
              showLabel
              className='!px-4 !py-1.5 border-shade-900 dark:border-shade-50 bg-white dark:bg-shade-900 text-shade-900 dark:text-shade-50'
            />
            <span>Personal Stats</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          <ContentCard
            title='Sudoku Mastery for Every Mood'
            subtitle='Featured'
            className='lg:col-span-2'
          >
            <p className='mb-6 text-justify'>
              Welcome to the premier destination for puzzle enthusiasts. Whether
              you seek the meditative calm of solo practice or the adrenaline
              rush of competitive play, our platform delivers a meticulously
              crafted experience. Each puzzle is hand-selected to challenge and
              inspire, accompanied by comprehensive analytics to track your
              journey from novice to master.
            </p>

            <div className='flex flex-wrap gap-3'>
              <button className='px-6 py-2.5 bg-shade-900 dark:bg-shade-50 text-shade-50 dark:text-shade-900 text-sm font-semibold uppercase tracking-wide border-2 border-shade-900 dark:border-shade-50 transition-all hover:bg-shade-50 dark:hover:bg-shade-900 hover:text-shade-900 dark:hover:text-shade-50'>
                Start Solving
              </button>
              <button className='px-6 py-2.5 bg-white dark:bg-shade-900 text-shade-900 dark:text-shade-50 text-sm font-semibold uppercase tracking-wide border-2 border-shade-900 dark:border-shade-50 transition-all hover:bg-shade-900 dark:hover:bg-shade-50 hover:text-shade-50 dark:hover:text-shade-900'>
                Learn More
              </button>
            </div>
          </ContentCard>

          <SidebarCard title='Quick Facts'>
            <FeatureCard
              icon={IoGrid}
              title='Daily Challenges'
              description='Fresh puzzles every day'
            />
            <FeatureCard
              icon={IoFlash}
              title='Ranked Play'
              description='Compete globally'
            />
            <FeatureCard
              icon={FaChartLine}
              title='Track Progress'
              description='Detailed analytics'
            />
          </SidebarCard>
        </div>

        {/* Game Modes Section - Newspaper Sections */}
        <FeatureGrid title='Game Modes' className='mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {options.map(({ title, description, Icon, path }) => (
              <ActionCard
                key={title}
                title={title}
                description={description}
                icon={Icon}
                path={path}
              />
            ))}
          </div>
        </FeatureGrid>

        {/* Account Section - Classified Ad Style */}
        <div className='border-4 border-double border-shade-900 dark:border-shade-50 p-8 bg-shade-50 dark:bg-shade-900'>
          <div className='max-w-3xl mx-auto text-center'>
            <div className='inline-block border-2 border-shade-900 dark:border-shade-50 px-4 py-1 mb-4'>
              <span className='text-xs font-bold uppercase tracking-widest text-shade-900 dark:text-shade-50'>
                Notice
              </span>
            </div>
            <h3 className='text-2xl font-secondary font-bold text-shade-900 dark:text-shade-50 mb-3'>
              Join the Community
            </h3>
            <p className='text-base text-shade-700 dark:text-shade-300 mb-6 max-w-2xl mx-auto'>
              Create an account to sync your progress across devices,
              participate in ranked seasons, and unlock exclusive puzzle
              collections.
            </p>
            <button className='px-8 py-3 bg-shade-900 dark:bg-shade-50 text-shade-50 dark:text-shade-900 text-sm font-semibold uppercase tracking-wide border-2 border-shade-900 dark:border-shade-50 transition-all hover:bg-shade-50 dark:hover:bg-shade-900 hover:text-shade-900 dark:hover:text-shade-50'>
              Sign Up / Log In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
