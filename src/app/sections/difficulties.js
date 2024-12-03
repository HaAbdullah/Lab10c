import styles from "../styles/difficulties.module.css";
import Image from "next/image";

const DifficultiesPage = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading2}>The Difficulties I Faced</h2>

      <h3 className={styles.heading3}>1. Understanding CSS Modules</h3>
      <ul className={styles.list}>
        <li>
          I didn't fully understand how CSS Modules worked. I was used to
          writing global styles, but CSS Modules scope styles locally to each
          component.
        </li>
        <li>
          I also mistakenly tried to use tag selectors like `h2`, `h3`, and `p`,
          which didn't work as expected in the module file.
        </li>
        <li>
          To fix this, I learned that I should use class names in CSS Modules
          and apply those class names to the appropriate elements in the
          component.
        </li>
        <li>
          This resolved the issue, and I was able to properly scope styles to
          the components.
        </li>
      </ul>

      <h3 className={styles.heading3}>2. Using Google Fonts</h3>
      <ul className={styles.list}>
        <li>
          Another difficulty I faced was integrating Google Fonts into my
          Next.js app.
        </li>
        <li>
          In classic HTML and CSS, importing Google Fonts is pretty
          straightforward, but in Next.js, it's a bit different. You have to be
          mindful of performance, and simply adding a{" "}
          <code className={styles.code}>link</code> tag in the{" "}
          <code className={styles.code}>Head</code> component isn't enough. It
          has to be done in a more optimized way to avoid unnecessary
          re-renders.
        </li>
        <li>
          I used the official{" "}
          <a
            style={{ color: "lightblue" }}
            href="https://nextjs.org/docs/pages/building-your-application/optimizing/fonts"
          >
            Next.js documentation
          </a>{" "}
          to learn the best approach to import fonts. That helped me figure out
          how to use the built-in font optimization system.
        </li>
        <li>
          Combining this new knowledge with what I learned about CSS modules, I
          was able to import Google Fonts correctly by using the{" "}
          <code className={styles.code}>next/font/google</code> package.
        </li>
        <Image
          src="/stylesjs.png"
          alt="Google Fonts integration example"
          width={600}
          height={400}
        />
        <li>
          Then, I used CSS variables in my global styles to define the fonts:
        </li>
        <Image
          src="/stylescss.png"
          alt="CSS Variables for Google Fonts"
          width={600}
          height={400}
        />
      </ul>

      <h3 className={styles.heading3}>3. Learning React Props</h3>
      <ul className={styles.list}>
        <li>
          One aspect of React that I wanted to learn was Props, which allow you
          to send data from one component to another.
        </li>
        <li>
          I solved this by studying how props work in React and experimenting
          with passing simple values like strings and numbers between
          components.{" "}
          <a
            style={{ color: "lightblue" }}
            href="https://www.youtube.com/watch?v=uvEAvxWvwOs"
          >
            This YouTube video
          </a>{" "}
          specifically was very helpful.
        </li>
        <Image
          src="/props.png"
          alt="React Props demonstration"
          width={600}
          height={400}
        />
      </ul>
    </div>
  );
};

export default DifficultiesPage;
