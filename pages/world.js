import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card } from 'react-bootstrap'

export default function World() {
    return (
        <div className={styles.world}>
            <Head>
                <title>The World</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>O Mundo de Yggdrasil</h1>
                <p>
                    Yggdrasil é composta por 5 cinco continentes; Continente Verde, coberto por grandes florestas. Continente Branco composto por diversas planícies. Continente Azul, um gigantesco mar rico em ilhas. Continente Vermelho, e suas inúmeras cadeias de montanhas. Continente Preto, local de sombrios e apavorantes pântanos. Todos separados por desertos sem fim.
                    Existem várias raças com seus próprios reinos, mas as maiores são; A raça guerreira Aasgardiana, de Midgard. Os artesões mágicos Atlantes da cidade-estado Atlantis. Os Methaliers, na caótica cidade-estado Mechaforja. Phantons, uma raça quase extinta que vive em Nifelheim. Teranos, que se fecham na cidade-árvore Gaia. Observando e gerenciando toda Yggdrasil, o Império dos Dragões.
                </p>
                
                <p>
                    Atualmente uma tênue paz paira entre os grandes reinos, após o termino da 3ª Grande Guerra. Ainda existe uma tensão entre as raças, e qualquer faísca pode reacender as chamas da guerra. Mas outros problemas estão aparecendo aos poucos, mistérios sem respostas e sussurros sem uma voz. Cabe aos heróis de hoje descobrirem o que se esconde entre os escombros da guerra.
                </p>

                <p>
                    Faça o download dos mapas dos 5 continentes de Yggdrasil logo a baixo! Alguns mapas tiveram de ser separados por partes pois são muito grandes. Lembre-se que esta é a versão artística dos mapas, e NÃO estão em escala real!
                </p>

                <a href="https://drive.google.com/drive/folders/1hDFYTrn_hY52k-gh-hf-3UlV2F47vl6w" target="_blank">
                    <Card style={{ width: '12rem', height: '18rem' }} className={styles.books}>
                        <Card.Img variant="top" src="/maps.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: 'black' }}>Mapas</Card.Title>
                        </Card.Body>
                    </Card>
                </a>
            </main>
            
        </div>
    )
}