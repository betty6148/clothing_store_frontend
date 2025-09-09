import React from "react";
import styles from "../styles/components/_carousel.module.scss";
const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        <div className={styles.slide}>Slide 1</div>
        <div className={styles.slide}>Slide 2</div>
        <div className={styles.slide}>Slide 3</div>
        <div className={styles.slide}>Slide 4</div>
        <div className={styles.slide}>Slide 5</div>
        <div className={styles.slide}>Slide 6</div>
      </div>
      <button className="prev">◀</button>
      <button className="next">▶</button>
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Carousel;
