import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import styles from "./styles/layout.module.css";

const App = () => {
  return (
    <>
      <Topbar />
      <main className={styles.entry}>
        <Outlet />
      </main>
    </>    
  );
}

export default App;
