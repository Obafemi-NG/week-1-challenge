import styles from "./Dashboard.module.css";

import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "../Card/Card";
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.top}>
        <div>
          <ArrowBackIosIcon className={styles["arrow-back-icon"]} />
        </div>
        <div className={styles.profile}>
          <PersonIcon className={styles["profile-icon"]} />
        </div>
      </div>
      <div className={styles.heading}>
        <div className={styles.title}>
          {" "}
          <p> Accounts</p>
        </div>
        <div className={styles.add}>
          <p> ADD NEW</p>
          <AddIcon className={styles["add-new-icon"]} />
        </div>
      </div>
      <div className={styles.upgrade}>
        <div className={styles.badge}>
          <p>PRO</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.text}>Upgrade your account</p>
          <ArrowForwardIcon className={styles["arrow-forward-icon"]} />
        </div>
      </div>
      <Card
        type="main"
        title="Main Wallet"
        amount="2049.95"
        percentage="32"
        value="positive"
        color="yellow"
        totalPercentage="62"
      />
      <Card
        type="savings"
        title="Savings Wallet"
        amount="65.14"
        percentage="0.4"
        value="negative"
        color="red"
        totalPercentage="30"
      />
      <Card
        type="summer"
        title="Summer Wallet"
        amount="547.56"
        percentage="2.6"
        value="positive"
        color="blue"
        totalPercentage="45"
      />
    </div>
  );
};

export default Dashboard;
