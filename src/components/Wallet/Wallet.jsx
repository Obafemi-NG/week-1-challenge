import styles from "./Wallet.module.css";
import WalletCard from "../Wallet-Card/Wallet-Card";
import userImage from "../../assets/user.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import Beneficiarycard from "../Beneficiary-Card/Beneficiary-card";
import Transactioncard from "../Transaction-card/Transaction-card";

const Wallet = () => {
  let url = userImage;
  const histories = [
    {
      id: 1,
      name: "Vodafone",
      date: "17 Monday June",
      cost: "34.21",
      icon: <SimCardRoundedIcon />,
      type: "utility",
    },
    {
      id: 2,
      name: "Amazon",
      date: "17 Monday June",
      cost: "79.90",
      icon: <ShoppingCartRoundedIcon />,
      type: "e-commerce",
    },
  ];
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
      <div className={styles["send-section"]}>
        <div className={styles["send-header"]}>
          <div className={styles["send-title"]}>
            {" "}
            <p>Send Money To </p>{" "}
          </div>
          <ArrowForwardIcon className={styles.icon} />
        </div>
        <div className={styles["beneficiaries"]}>
          <div className={styles["dashed-outline"]}>
            <div className={styles.add}></div>
          </div>
          <Beneficiarycard />
          <Beneficiarycard />
          <Beneficiarycard />
        </div>
        <div className={styles["transaction-history"]}>
          {histories.map((history) => (
            <Transactioncard
              key={history.id}
              name={history.name}
              icon={history.icon}
              cost={history.cost}
              date={history.date}
              type={history.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
