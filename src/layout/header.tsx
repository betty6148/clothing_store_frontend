import { HaederMenu } from "../components/HaederMenu";
import styles from "../styles/layout/_header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="../../public/taurus.png" alt="LOGO" />
      <HaederMenu />
    </div>
  );
};

export default Header;
