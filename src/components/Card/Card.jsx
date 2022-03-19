import Progressbar from "../Progress-bar/Progress-bar";
import styles from "./Card.module.css";

const Card = ({
  type,
  title,
  amount,
  percentage,
  value,
  color,
  totalPercentage,
}) => {
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
      <Progressbar
        progressStyle={{
          marginLeft: "12px",
          height: "3px",
          position: "relative",
          width: "193px",
          borderRadius: "8px",
          background: "white",
        }}
        fillerStyle={{ width: `${totalPercentage}%`, background: `${color}` }}
      />
    </div>
  );
};

export default Card;
