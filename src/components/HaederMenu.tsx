import styles from "../styles/layout/_header.module.scss";
export const HaederMenu = () => {
  return (
    <>
      <ul className={styles.headerMenu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Tours</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </>
  );
};
