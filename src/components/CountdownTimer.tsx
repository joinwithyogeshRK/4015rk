import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="countdown-timer">
      <div className="flex flex-col items-center mr-4">
        <div className="countdown-digit">{formatNumber(timeLeft.days)}</div>
        <span className="text-xs mt-1">DAYS</span>
      </div>
      <span className="text-2xl mx-1">:</span>
      <div className="flex flex-col items-center mr-4">
        <div className="countdown-digit">{formatNumber(timeLeft.hours)}</div>
        <span className="text-xs mt-1">HOURS</span>
      </div>
      <span className="text-2xl mx-1">:</span>
      <div className="flex flex-col items-center mr-4">
        <div className="countdown-digit">{formatNumber(timeLeft.minutes)}</div>
        <span className="text-xs mt-1">MINS</span>
      </div>
      <span className="text-2xl mx-1">:</span>
      <div className="flex flex-col items-center">
        <div className="countdown-digit">{formatNumber(timeLeft.seconds)}</div>
        <span className="text-xs mt-1">SECS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
