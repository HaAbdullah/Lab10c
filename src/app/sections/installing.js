import styles from "../styles/install.module.css";

const InstallingPage = () => {
  return (
    <div className={styles.main}>
      <h2>How I Installed Next.js</h2>

      <h3>Step 1: Install Node.js and npm</h3>
      <ul className={styles.list}>
        <li>
          I started by downloading Node.js from the{" "}
          <a style={{ color: "lightblue" }} href="https://nodejs.org/en">
            official website
          </a>
          .
        </li>
        <li>
          Node.js is a platform that allows JavaScript to run outside the
          browser and comes bundled with npm (Node Package Manager).
        </li>
      </ul>

      <h3>Step 2: Create a Next.js App</h3>
      <ul className={styles.list}>
        <li>Next, I navigated to my "Lab 10" folder.</li>
        <li>
          Following the{" "}
          <a
            style={{ color: "lightblue" }}
            href="https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup"
          >
            official documentation
          </a>
          , I ran the following command to create a new Next.js app:
        </li>
        <li>
          <mark>npx create-next-app@latest lab10c</mark>
        </li>
      </ul>
    </div>
  );
};

export default InstallingPage;
