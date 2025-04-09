"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2024-12-14T00:00:00");

    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.countdown}>
      <h2>Counting down to our special day</h2>
      <div className={styles.timer}>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>Days</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>Hours</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>Minutes</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>Seconds</span>
        </div>
      </div>
    </section>
  );
}
