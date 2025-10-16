import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import { MdErrorOutline, MdOutlineWarning } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
// import { useRef } from 'react';

const allowedTypes = ['success', 'info', 'error', 'warning'];

export default function Message({ heading, message, type }) {
  // const barRef = useRef(null);

  if (!allowedTypes.includes(type)) type = 'info';
  let Icon;
  let headingColor;
  // let barColor;

  if (type === 'success') {
    Icon = AiOutlineCheckCircle;
    headingColor = 'text-success-400';
    // barColor = 'bg-success-400';
  } else if (type === 'info') {
    Icon = BiInfoCircle;
    headingColor = 'text-info-400';
    // barColor = 'bg-info-400';
  } else if (type === 'error') {
    Icon = MdErrorOutline;
    headingColor = 'text-error-400';
    // barColor = 'bg-error-400';
  } else if (type === 'warning') {
    headingColor = 'text-warning-400';
    Icon = MdOutlineWarning;
    // barColor = 'bg-warning-400';
  }

  return (
    <div
      className={`message-incoming relative flex flex-col gap-2 bg-shade-50 rounded-lg shadow-lg min-w-64 max-w-72 overflow-hidden`}
    >
      {/* <div
        ref={barRef}
        className={`absolute top-0 left-0 h-1 animate-gradient-x ${barColor}`}
      ></div> */}
      <div className='flex flex-row items-center justify-between px-3 pt-2'>
        <div className='flex flex-row gap-1 items-center'>
          <Icon className={`text-2xl ${headingColor}`} />
          <span
            className={`font-primary text-sm font-semibold ${headingColor}`}
          >
            {heading}
          </span>
        </div>
        {/* <MdClose className='text-shade-400 hover:text-shade-600 cursor-pointer text-xl' /> */}
      </div>
      <div className='bg-shade-100 px-3 pb-2'>
        <span className='font-primary text-sm text-shade-700 text-shade-800'>
          {message}
        </span>
      </div>
    </div>
  );
}
