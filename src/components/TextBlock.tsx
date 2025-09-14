import styles from "../styles/components/_textblock.module.scss";

const TextBlock = () => {
  return (
    <div className={styles.text_block}>
      <p>Lorem ipsum dolor sit</p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        maiores optio accusamus earum ratione, exercitationem voluptatum amet
        pariatur hic aperiam necessitatibus
      </p>
      <button>Show More</button>
    </div>
  );
};

export default TextBlock;
