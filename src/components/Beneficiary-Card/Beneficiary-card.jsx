// imported styles for this component
import styles from "./Beneficiary-Card.module.css";

const Beneficiarycard = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles["image-container"]}>
        <img
          className={styles["beneficiary-image"]}
          src={image}
          alt="beneficiary"
        />
      </div>
      <div className={styles.name}>
        <p> {name} </p>
      </div>
    </div>
  );
};

export default Beneficiarycard;
