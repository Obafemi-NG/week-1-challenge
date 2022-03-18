import styles from "./Transaction-card.module.css";

const Transactioncard = ({ name, type, cost, icon, date }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.icon} ${styles[type]}`}>{icon}</div>
      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.cost}>{`-$${cost}`}</div>
    </div>
  );
};

export default Transactioncard;
