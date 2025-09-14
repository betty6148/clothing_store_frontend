import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "../styles/components/_carousel.module.scss";
const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        <div className={styles.slide}>
          <p>Slide 1</p>
        </div>
        <div className={styles.slide}>
          <p>Slide 2</p>
        </div>
        <div className={styles.slide}>
          <p>Slide 3</p>
        </div>
        <div className={styles.slide}>
          <p>Slide 4</p>
        </div>
        <div className={styles.slide}>
          <p>Slide 5</p>
        </div>
        <div className={styles.slide}>
          <p>Slide 6</p>
        </div>
      </div>
      <div className={styles.slide_controler}>
        <div className={styles.button_set}>
          <button className="prev">
            <LeftOutlined />
          </button>
          <button className="next">
            <RightOutlined />
          </button>
        </div>
        <div className={styles.decoration_line}></div>
        <p>01</p>
      </div>

      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Carousel;
