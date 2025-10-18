import PageHeader from '@components/Common/PageHeader.jsx';
import ContentCard from '@components/Common/ContentCard.jsx';
import SidebarCard from '@components/Common/SidebarCard.jsx';
import FeatureCard from '@components/Common/FeatureCard.jsx';
import StatusNotice from '@components/Common/StatusNotice.jsx';
import { FaTrophy, FaCrown, FaMedal } from 'react-icons/fa';
import { IoTimer, IoFlash, IoTrendingUp } from 'react-icons/io5';

export default function Leaderboard() {
  return (
    <section className='w-full max-w-6xl px-6 py-12'>
      <PageHeader
        icon={FaTrophy}
        title='LEADERBOARDS'
        subtitle='Compete for glory on the global stage'
      />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10'>
        <ContentCard
          title='Chase the Crown'
          subtitle='Global Rankings'
          className='lg:col-span-2'
        >
          <p className='mb-6 text-justify'>
            Track your standing among the worlds best Sudoku solvers. Our
            comprehensive leaderboard system features multiple categories
            including fastest solve times, accuracy streaks, and seasonal
            rankings. Watch your name climb as you master increasingly difficult
            puzzles and compete in special events.
          </p>

          <div className='border-t-2 border-shade-300 dark:border-shade-700 pt-4'>
            <h3 className='text-lg font-secondary font-bold mb-3'>
              Ranking Categories:
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <FeatureCard
                icon={IoTimer}
                title='Fastest Solves'
                description='Speed rankings by difficulty'
              />
              <FeatureCard
                icon={IoFlash}
                title='Win Streaks'
                description='Consecutive victories'
              />
              <FeatureCard
                icon={FaMedal}
                title='Season Rankings'
                description='Quarterly competitions'
              />
              <FeatureCard
                icon={IoTrendingUp}
                title='Overall Rating'
                description='Comprehensive skill score'
              />
            </div>
          </div>
        </ContentCard>

        <SidebarCard title='Top Positions'>
          <div className='flex items-center gap-3 p-3 bg-white dark:bg-shade-900 border border-shade-300 dark:border-shade-700'>
            <FaCrown className='text-2xl' />
            <div>
              <p className='font-bold'>Champion</p>
              <p className='text-xs text-shade-700 dark:text-shade-300'>
                Global rank #1
              </p>
            </div>
          </div>
          <div className='flex items-center gap-3 p-3 bg-white dark:bg-shade-900 border border-shade-300 dark:border-shade-700'>
            <FaMedal className='text-2xl' />
            <div>
              <p className='font-bold'>Masters</p>
              <p className='text-xs text-shade-700 dark:text-shade-300'>
                Top 100 players
              </p>
            </div>
          </div>
          <div className='flex items-center gap-3 p-3 bg-white dark:bg-shade-900 border border-shade-300 dark:border-shade-700'>
            <FaTrophy className='text-2xl' />
            <div>
              <p className='font-bold'>Experts</p>
              <p className='text-xs text-shade-700 dark:text-shade-300'>
                Top 1000 players
              </p>
            </div>
          </div>
        </SidebarCard>
      </div>

      <StatusNotice
        label='Coming Soon'
        title='Rankings System in Development'
        description='Our statistics engine is being calibrated to ensure fair and accurate rankings. Real-time leaderboards with detailed player profiles will be available at launch.'
      />
    </section>
  );
}
