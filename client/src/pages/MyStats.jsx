import PageHeader from '@components/Common/PageHeader.jsx';
import ContentCard from '@components/Common/ContentCard.jsx';
import SidebarCard from '@components/Common/SidebarCard.jsx';
import FeatureCard from '@components/Common/FeatureCard.jsx';
import FeatureGrid from '@components/Common/FeatureGrid.jsx';
import StatusNotice from '@components/Common/StatusNotice.jsx';
import { FaChartLine, FaChartBar, FaPercentage } from 'react-icons/fa';
import { IoTimer, IoTrendingUp, IoCalendar } from 'react-icons/io5';
import { BsGraphUpArrow } from 'react-icons/bs';

export default function MyStats() {
  return (
    <section className='w-full max-w-6xl px-6 py-12'>
      <PageHeader
        icon={FaChartLine}
        title='MY STATISTICS'
        subtitle='Track your journey to mastery'
      />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10'>
        <ContentCard
          title='Your Personal Dashboard'
          subtitle='Performance Analytics'
          className='lg:col-span-2'
        >
          <p className='mb-6 text-justify'>
            Monitor your progress with comprehensive analytics designed to help
            you improve. Track solve times, accuracy rates, and difficulty
            progression over time. Identify patterns in your gameplay, discover
            your strongest strategies, and pinpoint areas for improvement with
            detailed statistical breakdowns.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='border border-shade-300 dark:border-shade-700 p-4 text-center'>
              <IoTimer className='text-3xl mx-auto mb-2' />
              <p className='text-xs font-bold uppercase tracking-wider text-shade-700 dark:text-shade-300 mb-1'>
                Avg Time
              </p>
              <p className='text-2xl font-bold'>--:--</p>
            </div>
            <div className='border border-shade-300 dark:border-shade-700 p-4 text-center'>
              <FaPercentage className='text-3xl mx-auto mb-2' />
              <p className='text-xs font-bold uppercase tracking-wider text-shade-700 dark:text-shade-300 mb-1'>
                Accuracy
              </p>
              <p className='text-2xl font-bold'>--%</p>
            </div>
            <div className='border border-shade-300 dark:border-shade-700 p-4 text-center'>
              <FaChartBar className='text-3xl mx-auto mb-2' />
              <p className='text-xs font-bold uppercase tracking-wider text-shade-700 dark:text-shade-300 mb-1'>
                Completed
              </p>
              <p className='text-2xl font-bold'>--</p>
            </div>
          </div>
        </ContentCard>

        <SidebarCard title='Metrics'>
          <FeatureCard
            icon={IoTrendingUp}
            title='Progress Charts'
            description='Visual improvement tracking'
          />
          <FeatureCard
            icon={IoCalendar}
            title='Activity History'
            description='Daily solve records'
          />
          <FeatureCard
            icon={BsGraphUpArrow}
            title='Skill Rating'
            description='Overall performance score'
          />
        </SidebarCard>
      </div>

      <FeatureGrid title='Coming Features' className='mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='border-2 border-shade-300 dark:border-shade-700 bg-white dark:bg-shade-900 p-5'>
            <h3 className='text-lg font-secondary font-bold mb-2'>
              Historical Data
            </h3>
            <p className='text-sm text-shade-700 dark:text-shade-300'>
              Access complete puzzle history with replay functionality and
              detailed move analysis.
            </p>
          </div>
          <div className='border-2 border-shade-300 dark:border-shade-700 bg-white dark:bg-shade-900 p-5'>
            <h3 className='text-lg font-secondary font-bold mb-2'>
              Export & Share
            </h3>
            <p className='text-sm text-shade-700 dark:text-shade-300'>
              Download your statistics and share achievements with the
              community.
            </p>
          </div>
          <div className='border-2 border-shade-300 dark:border-shade-700 bg-white dark:bg-shade-900 p-5'>
            <h3 className='text-lg font-secondary font-bold mb-2'>
              Insights Engine
            </h3>
            <p className='text-sm text-shade-700 dark:text-shade-300'>
              AI-powered suggestions to improve your solving strategies and
              techniques.
            </p>
          </div>
        </div>
      </FeatureGrid>

      <StatusNotice
        label='Development Status'
        title='Analytics Dashboard Building'
        description='Our statistics tracking system is being refined to provide you with the most insightful and actionable data. Full dashboard with charts and historical analysis coming soon.'
      />
    </section>
  );
}
