import PageHeader from '@components/Common/PageHeader.jsx';
import ContentCard from '@components/Common/ContentCard.jsx';
import SidebarCard from '@components/Common/SidebarCard.jsx';
import FeatureCard from '@components/Common/FeatureCard.jsx';
import StatusNotice from '@components/Common/StatusNotice.jsx';
import { RiSwordLine } from 'react-icons/ri';
import { IoTimer, IoPeople } from 'react-icons/io5';
import { FaMedal, FaFire } from 'react-icons/fa';

export default function Competitive() {
  return (
    <section className='w-full max-w-6xl px-6 py-12'>
      <PageHeader
        icon={RiSwordLine}
        title='COMPETITIVE MODE'
        subtitle='Battle opponents in real-time puzzle duels'
      />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10'>
        <ContentCard
          title='Head-to-Head Competition'
          subtitle='Ranked Battles'
          className='lg:col-span-2'
        >
          <p className='mb-6 text-justify'>
            Enter the competitive arena where speed and accuracy determine
            victory. Face off against players of similar skill levels in timed
            puzzle battles. Climb the ranks, earn seasonal rewards, and
            establish yourself as a Sudoku champion. Every match counts toward
            your global standing.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FeatureCard
              icon={IoTimer}
              title='Timed Matches'
              description='Race against the clock'
            />
            <FeatureCard
              icon={IoPeople}
              title='Matchmaking'
              description='Fair skill-based pairing'
            />
            <FeatureCard
              icon={FaMedal}
              title='Ranking System'
              description='Climb the leaderboards'
            />
            <FeatureCard
              icon={FaFire}
              title='Seasonal Rewards'
              description='Exclusive prizes'
            />
          </div>
        </ContentCard>

        <SidebarCard title='Features'>
          <div>
            <p className='font-semibold mb-1'>Live Spectating</p>
            <p className='text-sm text-shade-700 dark:text-shade-300'>
              Watch top players compete
            </p>
          </div>
          <div>
            <p className='font-semibold mb-1'>Tournament Mode</p>
            <p className='text-sm text-shade-700 dark:text-shade-300'>
              Join scheduled events
            </p>
          </div>
          <div>
            <p className='font-semibold mb-1'>Replay System</p>
            <p className='text-sm text-shade-700 dark:text-shade-300'>
              Review your matches
            </p>
          </div>
        </SidebarCard>
      </div>

      <StatusNotice
        label='Launch Status'
        title='Preparing for Launch'
        description='Our matchmaking system and ranking algorithms are being finalized. The competitive arena will open soon with full tournament support and live spectating features.'
      />
    </section>
  );
}
