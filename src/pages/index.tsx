import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | João Vitor Pereira</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.section}>
          <h1>
            Desenvolvedor <span>Front-End</span>
          </h1>

          <p>Apaixonado por tecnologias, novidades, livros e muito mais.</p>
          <p>
            Olá, meu nome é João Vitor Pereira, tenho 23 anos e sou
            Desenvolvedor Front-End Mobile Pleno. Atualmente trabalho com o
            Framework do React Native, mas adora estudar novas abordagens como
            Flutter, além de stacks voltadas para web como Angular, NextJS,
            ReactJS.
          </p>

          <div>
            <u>Saiba mais</u>
          </div>
        </section>

        <section className={styles.works}>
          <div className={styles.rowCards}>
            <div className={styles.card}>
              <div className={styles.infoCard}>
                <img className={styles.imageCard} src="/images/Book.svg" alt="Livro" />
                <span>Resenhas literárias</span>
              </div>
              <div className={styles.infoDescription}> </div>
            </div>

            <div className={styles.card}>
              <div className={styles.infoCard}>
                <img className={styles.imageCard} src="/images/Game-Controlle.svg" alt="Livro" />
                <span>Resenhas jogos</span>
              </div>
              <div className={styles.infoDescription}> </div>
            </div>

            <div className={styles.card}>
              <div className={styles.infoCard}>
                <img className={styles.imageCard} src="/images/movie-projector.svg" alt="Livro" />
                <span>Resenhas filmes</span>
              </div>
              <div className={styles.infoDescription}> </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
