import styles from "./Wallet-Card.module.css";

const WalletCard = ({ type, amount, percentage, cardNumber }) => {
  return (
    <div className={styles[type]}>
      <div className={styles.top}>
        <p className={styles.amount}>{`$${amount}`}</p>
        <p className={styles["card-number"]}>{cardNumber}</p>
      </div>
    </div>
  );
};

export default WalletCard;
