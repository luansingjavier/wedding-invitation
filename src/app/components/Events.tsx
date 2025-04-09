import styles from "./Events.module.css";

export default function Events() {
  return (
    <section className={styles.events}>
      <div className="container">
        <h2 className={styles.title}>Our Special Day</h2>

        <div className={styles.timeline}>
          <div className={styles.event}>
            <div className={styles.timeBlock}>
              <span className={styles.time}>2:00 PM</span>
              <span className={styles.date}>January 17, 2025</span>
            </div>
            <h3 className={styles.eventTitle}>Wedding Ceremony</h3>
            <p className={styles.location}> Our Lady of Peñafrancia Church</p>
            <p className={styles.address}>Naga City, Camarines Sur</p>
          </div>

          <div className={styles.divider}>
            <span>♥</span>
          </div>

          <div className={styles.event}>
            <div className={styles.timeBlock}>
              <span className={styles.time}>6:00 PM</span>
              <span className={styles.date}>January 17, 2025</span>
            </div>
            <h3 className={styles.eventTitle}>Wedding Reception</h3>
            <p className={styles.location}>Avenue Plaza Hotel</p>
            <p className={styles.address}>Naga City, Camarines Sur</p>
          </div>
        </div>

        <div className={styles.dress}>
          <h3>Dress Code</h3>
          <p>Formal Attire</p>
          <p className={styles.colors}>Colors: Sage Green • Beige • White</p>
        </div>
      </div>
    </section>
  );
}
