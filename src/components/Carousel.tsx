import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "../styles/components/_carousel.module.scss";
import { useEffect, useRef, useState } from "react";

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
    img: "https://images.pexels.com/photos/2210899/pexels-photo-2210899.jpeg",
    title: "Hoodies",
  },
  {
    img: "https://media.etmall.com.tw/nximg/006274/6274363/6274363_xxl.jpg?t=22258414987",
    title: "Vest",
  },
  {
    img: "https://images.pexels.com/photos/2494607/pexels-photo-2494607.jpeg",
    title: "Accessories",
  },
];
// const extendedImages = [
//   images[images.length - 1], // 最後一張 clone
//   ...images,
//   images[0], // 第一張 clone
// ];
// 輪播內容物的顯示數量
const contentToShow = 1;
// 輪播切換時的速度，單位為ms
const moveSpeed = 500;
const slideWidth = 240;
const gap = 24;
const Carousel = () => {
  const slidesRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [disableMove, setDisableMove] = useState(false);
  const [distanceBetweenContent, setDistanceBetweenContent] = useState(0);

  useEffect(() => {
    if (!slidesRef.current) return;
    Array.from(slidesRef.current.children).forEach((el) => {
      (el as HTMLElement).style.width = `${slideWidth}px`;
    });
    setDistanceBetweenContent(slideWidth + gap);
  }, []);

  const move = (step: number) => {
    if (disableMove) return;
    if (
      -(position - step) > images.length - contentToShow ||
      position - step > 0
    )
      return;

    setPosition((prev) => prev - step);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.dotted_rectangle}></div>
      <div className={styles.container}>
        <div
          className={styles.slides}
          ref={slidesRef}
          style={{
            transform: `translateX(${distanceBetweenContent * position}px)`,
            transition: `transform ${moveSpeed}ms`,
          }}
          onTransitionStart={() => setDisableMove(true)}
          onTransitionEnd={() => setDisableMove(false)}
        >
          {images.map((image: { img: string; title: string }, idx) => (
            <div
              key={idx}
              className={styles.slide}
              style={{
                backgroundImage: `url(${image.img})`,
              }}
              ref={idx === 0 ? slideRef : null}
            >
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.slide_controler}>
        <div className={styles.button_set}>
          <button className="prev" onClick={() => move(-1)}>
            <LeftOutlined />
          </button>
          <button className="next" onClick={() => move(1)}>
            <RightOutlined />
          </button>
        </div>
        <div className={styles.decoration_line}></div>
        <p>{String(Math.abs(position) + 1).padStart(2, "0")}</p>
      </div>
    </div>
  );
};

export default Carousel;
