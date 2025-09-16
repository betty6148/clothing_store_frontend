import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "../styles/components/_carousel.module.scss";
import { useEffect, useRef, useState } from "react";

const images = [
  { id: 0,
    img: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg",
    title: "T-Shirt",
  },
  { id: 1,
    img: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_3000,w_2000,f_auto,q_auto/8294205/724027_531108.png",
    title: "Pants",
  },
  { id: 2,
    img: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_3000,w_2000,f_auto,q_auto/8294205/475489_199739.jpeg",
    title: "Outer",
  },
  { id: 3,
    img: "https://images.pexels.com/photos/2210899/pexels-photo-2210899.jpeg",
    title: "Hoodies",
},
  { id: 4,
    img: "https://media.etmall.com.tw/nximg/006274/6274363/6274363_xxl.jpg?t=22258414987",
    title: "Vest",
},
  { id: 5,
    img: "https://images.pexels.com/photos/2494607/pexels-photo-2494607.jpeg",
    title: "Accessories",
},
];

// 輪播內容物的顯示數量
const contentToShow = 1;
// 輪播切換時的速度，單位為ms
const moveSpeed = 500;
const slideWidth = 240;
const gap = 24;

const Carousel = () => {
  const slidesRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState(images);
  const [distanceBetweenContent, setDistanceBetweenContent] = useState(0);

  const [offset, setOffset] = useState(0); // translate 偏移
  const [animating, setAnimating] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (!slidesRef.current) return;
    Array.from(slidesRef.current.children).forEach((el) => {
      (el as HTMLElement).style.width = `${slideWidth}px`;
    });
    setDistanceBetweenContent(slideWidth + gap);
  }, []);

  const move = (step: number) => {
		setCurrentIndex((prev) => (prev + step + images.length) % images.length);
    if (animating) return;
    setAnimating(true);
    setOffset(step); // step = 1 下一張, step = -1 上一張
  };

  const handleTransitionEnd = () => {
    setSlides((prev) => {
      const newSlides = [...prev];
      if (offset === 1) {
        // 下一張 → 把第一個丟到最後
        const first = newSlides.shift();
        if (first) newSlides.push(first);
      } else if (offset === -1) {
        // 上一張 → 把最後一個丟到最前
        const last = newSlides.pop();
        if (last) newSlides.unshift(last);}
      return newSlides;
    });
    // reset
    setOffset(0);
    setAnimating(false);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.dotted_rectangle}></div>
      <div className={styles.container}>
        <div
          className={styles.slides}
          ref={slidesRef}
          style={{
            transform: `translateX(${-offset * distanceBetweenContent}px)`,
            transition: animating ? `transform ${moveSpeed}ms` : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((image, idx) => (
            <div
              key={idx}
              className={styles.slide}
              style={{
                backgroundImage: `url(${image.img})`,
              }}
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
        <p>{String((currentIndex % images.length) + 1).padStart(2, "0")}</p>
      </div>
    </div>
  );
};

export default Carousel;
