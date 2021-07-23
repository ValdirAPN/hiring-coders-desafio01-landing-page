import { useEffect, useState } from 'react';
import { MailRegistration } from '../../components/MailRegistration';

import * as S from './styles'

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  
  function calculateTimeLeft() {
    let year = new Date().getFullYear();
    const diference = Number(new Date(`07/18/${year}`)) - Number(new Date());
    let timeLeft = {};

    if (diference > 0) {
      timeLeft = {
        days: ('0' + Math.floor(diference / (1000 * 60 * 60 * 24))).slice(-2),
        hours: ('0' + Math.floor((diference / (1000 * 60 * 60))% 24)).slice(-2),
        minutes: ('0' + Math.floor((diference / (1000 * 60)) % 60)).slice(-2),
        seconds: ('0' + Math.floor((diference / 1000) % 60)).slice(-2),
      }
    }

    return timeLeft;
  }
  
  return (
    <S.Container>
      <S.Timer>
        <div className="days">{timeLeft.days} <span>Dias</span></div>
        <div className="hours">{timeLeft.hours}<span>Horas</span></div>
        <div className="minutes">{timeLeft.minutes}<span>Minutos</span></div>
        <div className="seconds">{timeLeft.seconds} <span>Segundos</span></div>
      </S.Timer>
      <MailRegistration />
    </S.Container>
  );
}