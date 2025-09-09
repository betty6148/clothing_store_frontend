import Carousel from "../../components/Carousel";
import TextBlock from "../../components/TextBlock";
import styles from "../../styles/layout/_grid.module.scss";
const HomePage = () => {
  return (
    <div className={`${styles.grid}`}>
      <TextBlock />
      <Carousel />
    </div>
  );
};

export default HomePage;
