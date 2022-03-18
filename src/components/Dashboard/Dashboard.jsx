import styles from "./Dashboard.module.css";

import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
    </div>
  );
};

export default Dashboard;
