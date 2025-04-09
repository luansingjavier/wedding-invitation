"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.names}>Javier & Kirbelyn</h1>
        <p className={styles.date}>January 17, 2025</p>
        <div className={styles.divider}>
          <span>♥</span>
        </div>
        <p className={styles.invitation}>
          Together with their families,
          <br />
          request the honor of your presence
          <br />
          as they unite in marriage
        </p>
      </div>
    </section>
  );
}
