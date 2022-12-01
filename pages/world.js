import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function World() {
  return (
    <div className={styles.world}>
      <Head>
        <title>The World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* White background for description of each element */}
      {/* <div className={styles.elementDescription}></div> */}

      <main className={styles.main}>
        <h1>O Mundo de Yggdrazil</h1>
        <p className={styles.paragraphs}>
          Yggdrazil é composta por 5 cinco continentes; Continente Verde,
          coberto por grandes florestas. Continente Branco composto por diversas
          planícies. Continente Azul, um gigantesco mar rico em ilhas.
          Continente Vermelho, e suas inúmeras cadeias de montanhas. Continente
          Preto, local de sombrios e apavorantes pântanos. Todos separados por
          desertos sem fim. Existem várias raças com seus próprios reinos, mas
          as maiores são; A raça guerreira Aasgardiana, de Midgard. Os artesões
          mágicos Atlantes da cidade-estado Atlantis. Os Methaliers, na caótica
          cidade-estado Mechaforja. Phantons, uma raça quase extinta que vive em
          Nifelheim. Teranos, que se fecham na cidade-árvore Gaia. Observando e
          gerenciando toda Yggdrasil, o Império dos Dragões.
        </p>

        <p className={styles.paragraphs}>
          Atualmente uma tênue paz paira entre os grandes reinos, após o termino
          da 3ª Grande Guerra. Ainda existe uma tensão entre as raças, e
          qualquer faísca pode reacender as chamas da guerra. Mas outros
          problemas estão aparecendo aos poucos, mistérios sem respostas e
          sussurros sem uma voz. Cabe aos heróis de hoje descobrirem o que se
          esconde entre os escombros da guerra.
        </p>
        <p>
          Quer saber mais sobre a lore deste mundo? Clique no link no rodapé
          desta página para ler a série A História de Yggdrazil - As Grandes
          Raças, que conta a história das raças jogáveis, lançando um capítulo
          novo a cada 15 dias na segunda feira.
        </p>

        <div className={styles.contImages}>
          <a href="/blueCont.png" target="_blank">
            <Image
              src="/blueCont.png"
              alt="Blue Continent"
              width={500}
              height={500}
            />
          </a>

          <a href="/greenCont.png" target="_blank">
            <Image
              src="/greenCont.png"
              alt="Green Continent"
              width={500}
              height={500}
            />
          </a>

          <a href="/redCont.png" target="_blank">
            <Image
              src="/redCont.png"
              alt="Red Continent"
              width={500}
              height={500}
            />
          </a>

          <a href="/whiteCont.png" target="_blank">
            <Image
              src="/whiteCont.png"
              alt="White Continent"
              width={500}
              height={500}
            />
          </a>

          <a href="/blackCont.png" target="_blank">
            <Image
              src="/blackCont.png"
              alt="Black Continent"
              width={500}
              height={500}
            />
          </a>
        </div>

        {/* <p className={styles.paragraphs}>
          Em breve uma amostra dos mapas estarão disponíveis para serem baixados
          gratuitamente!
        </p> */}

        {/* <a 
                href="https://drive.google.com/drive/folders/1hDFYTrn_hY52k-gh-hf-3UlV2F47vl6w" 
                target="_blank"
                >
                    <Card style={{ width: '12rem', height: '18rem' }} className={styles.books}>
                        <Card.Img variant="top" src="/maps.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: 'black' }}>Mapas</Card.Title>
                        </Card.Body>
                    </Card>
                </a> */}
      </main>
    </div>
  );
}
