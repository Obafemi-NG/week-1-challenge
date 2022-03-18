import styles from "./App.module.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Wallet from "./components/Wallet/Wallet";

function App() {
  return (
    <div className={styles.app}>
      <div>
        <Dashboard />
      </div>
      <div>
        <Wallet />
      </div>
    </div>
  );
}

export default App;
