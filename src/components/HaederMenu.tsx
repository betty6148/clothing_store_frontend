import styles from "../styles/layout/_header.module.scss";
export const HaederMenu = () => {
  return (
    <>
      <ul className={styles.headerMenu}>
        <li>Home</li>
        <li>Tours</li>
        <li>Explore</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </>
  );
};
