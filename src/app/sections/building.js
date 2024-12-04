import styles from "../styles/build.module.css";
import Image from "next/image";

const BuildingPage = () => {
  return (
    <div className={styles.main}>
      <h2>How I Built the App</h2>

      <h3>Step 1: Explore Documentation and Understand Key Concepts</h3>
      <ul className={styles.list}>
        <li>
          I started by reading the{" "}
          <a href="https://nextjs.org/docs/app/getting-started/project-structure">
            official Next.js documentation
          </a>
          to learn about how Next.js does project structure, routing, and
          components.
        </li>
      </ul>

      <h3>Step 2: Clean Up Unnecessary Files</h3>
      <ul className={styles.list}>
        <li>
          I removed the files that come with creating a Next.js app:{" "}
          <code>pages.js</code> (similar to <code>index.html</code>),{" "}
          <code>pages.module.css</code>, and <code>globals.css</code>.
        </li>
      </ul>

      <h3>Step 3: Create Components</h3>
      <ul className={styles.list}>
        <li>
          After cleaning up the code in <code>pages.js</code>, I created a new
          React component as the starting point for the app.
        </li>
        <li>
          I then set up a "Sections" folder and created three components:{" "}
          <code>Building.js</code>, <code>Difficulties.js</code>, and{" "}
          <code>Installing.js</code>.
        </li>
        <li>
          I then created a "styles" folder and added the style files:{" "}
          <code>building.module.css</code>, <code>difficulties.module.css</code>
          , and <code>installing.module.css</code>.
        </li>
        <li>
          Finally, I imported all the components into <code>pages.js</code> to
          bring everything together.
        </li>
        <img src="imports.png" />
      </ul>
    </div>
  );
};

export default BuildingPage;
