import { useDate } from 'hooks/useDate';
import React from 'react';
import { FcClock } from 'react-icons/fc';

export const DateBar: React.FC = () => {
  const { timeNow, dayNow, monthName, yearNow } = useDate();

  return (
    <div className={'fs-6'}>
      <div>Today</div>
      <div className={'mt-2'}>
        <span className={'fw-bold'}>{dayNow}</span>
        {`  ${monthName}, ${yearNow}`}
        <FcClock className={'mx-1'} />
        <span>{timeNow}</span>
      </div>
    </div>
  );
};
