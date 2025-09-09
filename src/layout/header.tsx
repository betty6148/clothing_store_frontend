import { HaederMenu } from "../components/HaederMenu";
import styles from "../styles/layout/_header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="#" alt="LOGO" />
      <HaederMenu />
    </div>
  );
};

export default Header;
