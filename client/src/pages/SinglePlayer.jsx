import PageHeader from '@components/Common/PageHeader.jsx';
import StatusNotice from '@components/Common/StatusNotice.jsx';
import FeatureCard from '@components/Common/FeatureCard.jsx';
import ContentCard from '@components/Common/ContentCard.jsx';
import SidebarCard from '@components/Common/SidebarCard.jsx';
import FeatureGrid from '@components/Common/FeatureGrid.jsx';
import ActionCard from '@components/Common/ActionCard.jsx';

import { IoGrid, IoTime, IoTrophy, IoPlay } from 'react-icons/io5';
import { FaBrain, FaFire } from 'react-icons/fa';

export default function SinglePlayer() {
  const difficulties = [
    { name: 'Easy', description: 'Perfect for beginners', icon: IoPlay },
    { name: 'Medium', description: 'Balanced challenge', icon: FaBrain },
    { name: 'Hard', description: 'Test your skills', icon: IoTrophy },
    { name: 'Expert', description: 'For masters only', icon: FaFire },
  ];

  return (
    <section className='w-full max-w-6xl py-12'>
      <PageHeader
        icon={IoGrid}
        title='SINGLE PLAYER'
        subtitle='Master the fundamentals at your own pace'
      />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10'>
        <ContentCard
          title='Solo Practice Arena'
          subtitle='Game Mode'
          className='lg:col-span-2'
        >
          <p className='mb-6 text-justify'>
            Welcome to the Single Player mode, where you can hone your Sudoku
            skills without pressure. Choose from four difficulty levels, each
            carefully calibrated to provide the perfect balance of challenge and
            satisfaction. Track your solve times, analyze your patterns, and
            watch your improvement over time with detailed statistics.
          </p>

          <div className='border-t-2 border-shade-300 dark:border-shade-700 pt-4'>
            <h3 className='text-lg font-secondary font-bold text-shade-900 dark:text-shade-50 mb-3'>
              Features:
            </h3>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <span className='mt-1'>•</span>
                <span>Unlimited puzzles with varying difficulty levels</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='mt-1'>•</span>
                <span>Built-in timer to track your solving speed</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='mt-1'>•</span>
                <span>Hint system to help you learn strategies</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='mt-1'>•</span>
                <span>Personal statistics and progress tracking</span>
              </li>
            </ul>
          </div>
        </ContentCard>

        <SidebarCard title='Coming Soon'>
          <FeatureCard
            icon={IoTime}
            title='Timed Challenges'
            description='Beat the clock mode'
          />
          <FeatureCard
            icon={FaBrain}
            title='Daily Puzzles'
            description='New challenges daily'
          />
          <FeatureCard
            icon={IoTrophy}
            title='Achievements'
            description='Unlock rewards'
          />
        </SidebarCard>
      </div>

      <FeatureGrid title='Select Difficulty'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {difficulties.map(({ name, description, icon }) => (
            <ActionCard
              key={name}
              title={name}
              description={description}
              icon={icon}
            />
          ))}
        </div>

        <StatusNotice
          label='Status Update'
          title='Under Development'
          description='Our team is currently fine-tuning the puzzle generation algorithms and testing the difficulty calibration. Check back soon for the full experience!'
        />
      </FeatureGrid>
    </section>
  );
}
