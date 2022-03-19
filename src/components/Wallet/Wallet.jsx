// imported styles for this component
import styles from "./Wallet.module.css";

// imported local component.
import Beneficiarycard from "../Beneficiary-Card/Beneficiary-card";
import Transactioncard from "../Transaction-card/Transaction-card";
import WalletCard from "../Wallet-Card/Wallet-Card";

// imported image as a visual example of the user profile avatar
import userImage from "../../assets/user.jpg";

// imported Material UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Wallet = () => {
  let url = userImage;

  // objects below contains data that are just based on assumption just so that we do not hard code these data.
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
  const beneficiaries = [
    {
      id: 1,
      name: "Eden  Hazard",
      image:
        "https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2022/03/07172511/former-chelsea-star-eden-hazard-pictured-while-representing-real-madrid-vs-granada.jpg",
    },
    {
      id: 2,
      name: "Fede Valverde",
      image:
        "https://cdn.vox-cdn.com/thumbor/7x1AiVomGXSfIkgNmdxMvyWNNs0=/0x0:3000x4499/1200x800/filters:focal(1276x654:1756x1134)/cdn.vox-cdn.com/uploads/chorus_image/image/68704479/1230723159.0.jpg",
    },
    {
      id: 3,
      name: "Vincius Junior",
      image:
        "https://whatmobileno.com/wp-content/uploads/2021/11/Vinicius-Junior.jpg",
    },
  ];
  // ...

  return (
    <div className={styles.wallet}>
      <div className={styles["image-container"]}>
        <img className={styles["user-image"]} src={url} alt="user-profile" />
      </div>
      <div className={styles["wallet-info"]}>
        <div className={styles.title}>Main Wallet</div>
        <WalletCard
          type="main-wallet"
          amount="2049.95"
          percentage="32"
          cardNumber="(808) 555-0111"
          color="yellow"
          totalPercentage="62"
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
            <div className={styles.add}>
              <div className={styles.content}>
                <div className={styles["icon-container"]}>
                  <AddRoundedIcon className={styles["add-icon"]} />
                </div>
                <div>
                  <p className={styles["add-new"]}>Add New Contact</p>
                </div>
              </div>
            </div>
          </div>

          {beneficiaries.map((beneficiary) => (
            <Beneficiarycard
              key={beneficiary.id}
              name={beneficiary.name}
              image={beneficiary.image}
            />
          ))}
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
