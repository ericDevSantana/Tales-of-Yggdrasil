import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Card, Button } from "react-bootstrap";

export default function Books() {
  return (
    <div className={styles.lib}>
      <Head>
        <title>Os Livros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Os Livros</h1>
        {/* <p className={styles.paragraphs}>
          Tales of Yggdrazil irá contar com uma série de livros que contarão
          várias histórias de seu vasto mundo. Também haverá o Livro do Mestre,
          Livro do Jogador, e Bestiário, contendo regras e informações
          importantes para pode jogar o seu RPG.
        </p>
        <p className={styles.paragraphs}>
          Por ainda estar em fase de testes com acesso antecipado, os livros
          estão em um formato bem simples, e parte de seu conteúdo resumido, mas
          não se engane! Ao adquirir estes livros, você estará contribuindo para
          que TOY RPG se torne um jogo grande, e com sua ajuda poderemos
          adicionar ainda mais conteúdos e melhorar o que já existe!
        </p>
        <p className={styles.paragraphs}>
          Em breve estarão disponiveis nesta página os links para efetuar a
          compra dos livros.
        </p> */}
        <p className={styles.paragraphs}>
          Tales of Yggdrazil irá contar com uma variedade de livros que contarão
          várias histórias de seu vasto mundo. Também existem os livros do RPG
          de TOY; Livro do Jogador, que contém as regras do jogo, e o Manual do
          Mestre, que dá mais informações sobre o mundo e dicas para você narrar
          suas próprias aventuras neste universo sempre em crescimento.
        </p>

        <p className={styles.paragraphs}>
          Por ser um projeto indie os livros ainda estão em um formato bem
          simplista, ao adquiri-los você estará ajudando não só o projeto do RPG
          mas o mundo de Yggdrazil como um todo a crescer ainda mais! O Livro o
          Jogador e Manual do Mestre podem ser adquiridos juntos em um combo de
          apenas R$50.
        </p>

        <p className={styles.paragraphs}>
          Mande um WhatsApp para o número (62) 99646-7971 para realizar a
          compra!
        </p>
      </main>
    </div>
  );
}
