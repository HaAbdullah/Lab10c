import styles from "../styles/build.module.css";

const BuildingPage = () => {
  return (
    <div className={styles.main}>
      <h2>Building a Next.js App: My Process</h2>

      <h3>Step 1: Explore Documentation and Understand Key Concepts</h3>
      <ul className={styles.list}>
        <li>
          I started by reading the{" "}
          <a href="https://nextjs.org/docs/app/getting-started/project-structure">
            official Next.js documentation
          </a>
          to familiarize myself with the project structure, routing, and
          components.
        </li>
      </ul>

      <h3>Step 2: Clean Up Unnecessary Files</h3>
      <ul className={styles.list}>
        <li>
          I removed unnecessary files such as <code>pages.js</code> (similar to{" "}
          <code>index.html</code>), <code>pages.module.css</code>, and{" "}
          <code>globals.css</code> to simplify the project.
        </li>
      </ul>

      <h3>Step 3: Create Components and Organize Styles</h3>
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
          Next, I created a "styles" folder and added the corresponding styles:{" "}
          <code>building.module.css</code>, <code>difficulties.module.css</code>
          , and <code>installing.module.css</code>.
        </li>
        <li>
          Finally, I imported all the components into <code>pages.js</code> to
          bring everything together.
        </li>
      </ul>
    </div>
  );
};

export default BuildingPage;
