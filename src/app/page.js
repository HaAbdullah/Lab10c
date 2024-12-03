import styles from "./styles.module.css";
import BuildingPage from "./sections/building.js";
import InstallingPage from "./sections/installing.js";
import DifficultiesPage from "./sections/difficulties.js";

export default function Home() {
  const difficulties = [
    "Understanding CSS Modules",
    "Using Google Fonts",
    "Learning React Props",
  ];

  return (
    <div className={styles.page}>
      <h1>Installing, Using, and Deploying Next.js</h1>
      <InstallingPage />
      <BuildingPage />
      <DifficultiesPage difficulties={difficulties} />
    </div>
  );
}
