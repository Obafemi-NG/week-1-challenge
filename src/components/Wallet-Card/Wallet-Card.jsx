// imported local component
import Progressbar from "../Progress-bar/Progress-bar";

// imported style for this component
import styles from "./Wallet-Card.module.css";

const WalletCard = ({
  type,
  amount,
  percentage,
  cardNumber,
  totalPercentage,
  color,
}) => {
  return (
    <div className={styles[type]}>
      <div className={styles.top}>
        <p className={styles.amount}>{`$${amount}`}</p>
        <p className={styles["card-number"]}>{cardNumber}</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.percentage}> {`+${percentage}%`} </p>
        <Progressbar
          progressStyle={{
            marginLeft: "12px",
            height: "5px",
            position: "relative",
            width: "193px",
            borderRadius: "8px",
            background: "white",
          }}
          fillerStyle={{ width: `${totalPercentage}%`, background: `${color}` }}
        />
        <p className={styles.message}>Upgrade your account</p>
      </div>
    </div>
  );
};

export default WalletCard;
