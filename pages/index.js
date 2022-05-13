import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Image } from "react-bootstrap";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Tales of Yggdrasil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image className={styles.logo} src="/frontPage.jpeg" fluid />
      </main>

      <div
        style={{
          backgroundColor: "white",
          fontSize: "1.15rem",
          textAlign: "justify",
          padding: "2% 15%",
          opacity: "100%",
        }}
      >
        <p className={styles.paragraphs}>
          Tales of Yggdrazil será uma série de livros de fantasia com seu
          próprio sistema de RPG de mesa que ainda está em desenvolvimento.
          Recentemente passou pela sua faze de testes fechado, e a fase de
          testes abertos irá começar *em breve*, siga nossas redes sociais para
          saber quando os livros estarão disponíveis!
        </p>

        <p className={styles.paragraphs} style={{ textAlign: "center" }}>
          Enquanto isso explore um pouco deste mundo incrível através deste
          site!
        </p>
      </div>
    </div>
  );
}
