import styles from "./Card.module.css";

const Card = ({ type, title, amount, percentage, value }) => {
  return (
    <div className={styles[type]}>
      <div className={styles.top}>
        <div className={styles.right}>
          <p className={styles.title}>{title}</p>
          <p className={styles.amount}>{`$${amount}`}</p>
        </div>
        <div className={`${styles.left} ${styles[value]}`}>
          <p className={styles.percentage}>
            {`${percentage > 1 ? "+" : "-"}${percentage}%`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
