import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, tudo bem?</span>
          <h1>
            News about the <span>React</span> world.
          </h1>

          <p>
            Get acess to all the publications <br />
            <span>for 30 mounth</span>
          </p>
        </section>
      </main>
    </>
  );
}
