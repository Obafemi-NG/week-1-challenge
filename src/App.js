// imported styles.
import styles from "./App.module.css";

// imported local component.
import Dashboard from "./components/Dashboard/Dashboard";
import Wallet from "./components/Wallet/Wallet";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.dashboard}>
        <Dashboard />
      </div>
      <div className={styles.wallet}>
        <Wallet />
      </div>
    </div>
  );
}

export default App;
