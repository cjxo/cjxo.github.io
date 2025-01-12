import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import styles from "./styles/layout.module.css";

const App = () => {
  return (
    <>
      <Topbar />
      <main className={styles.entry}>
        <Outlet />
      </main>
      <Bottombar />
    </>    
  );
}

export default App;
