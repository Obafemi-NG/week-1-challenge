import styles from "./Wallet.module.css";
import WalletCard from "../Wallet-Card/Wallet-Card";
import userImage from "../../assets/user.jpg";

const Wallet = () => {
  let url = userImage;
  return (
    <div className={styles.wallet}>
      <div className={styles["image-container"]}>
        <img src={url} alt="user-profile" />
      </div>
      <div className={styles["wallet-info"]}>
        <div className={styles.title}>Main Wallet</div>
        <WalletCard
          type="main-wallet"
          amount="2049.95"
          percentage="32"
          cardNumber="(808) 555-0111"
        />
      </div>
    </div>
  );
};

export default Wallet;
