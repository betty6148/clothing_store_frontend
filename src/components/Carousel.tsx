import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "../styles/components/_carousel.module.scss";

const images = [
  {
    img: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg",
    title: "T-Shirt",
  },
  {
    img: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_3000,w_2000,f_auto,q_auto/8294205/724027_531108.png",
    title: "Pants",
  },
  {
    img: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_3000,w_2000,f_auto,q_auto/8294205/475489_199739.jpeg",
    title: "Outer",
  },
  {
    img: "https://images.pexels.com/photos/2494607/pexels-photo-2494607.jpeg",
    title: "Accessories",
  },
  {
    img: "https://images.pexels.com/photos/2210899/pexels-photo-2210899.jpeg",
    title: "Hoodies",
  },
  { img: "/images/slide1.jpg", title: "T-Shirt" },
];
const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.dotted_rectangle}></div>
      <div className={styles.slides}>
        {images.map((image: { img: string; title: string }) => (
          <div
            className={styles.slide}
            style={{
              backgroundImage: `url(${image.img})`,
            }}
          >
            <p>{image.title}</p>
          </div>
        ))}
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
    </div>
  );
};

export default Carousel;
