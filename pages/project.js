import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Project() {
    return (
        <div className={styles.projectMain}>
            <Head>
                <title>O Projeto</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>O Projeto</h1>
                <p>
                    Meu nome é Lucas Milhomem Yabu, sou o criador e desenvolvedor deste projeto. Venho trabalhando no desenvolvimento de um sistema único a alguns anos, e na construção deste novo universo a muito mais tempo ainda.
                    Tales of Yggdrasil é o projeto de uma vida inteira, mas ainda se encontra em seus primeiros passos para se tornar um grande jogo que proporcionará muita diversão e aventuras épicas. Felizmente conto com a ajuda de grandes 
                    amigos para dar vida a este sonho, porém TOY ainda é um projeto totalmente indie com orçamento limitado, mas tenha certeza que a dedicação e esforço para o tornar grande são incessantes!
                </p>

                <p>
                    Agradeço desde já a todos que adquirirem os livros, pois vocês estarão ajudando a transformar este projeto em algo grandioso! Lembrem-se que TOY RPG ainda está em Acesso Antecipado, e por isto é sujeito a mudanças. 
                    Faça o download dos mapas dos 5 continentes de Yggdrasil logo a baixo! Alguns mapas tiveram de ser separados por partes pois são muito grandes. Lembre-se que esta é a versão artística dos mapas, e NÃO estão em escala real!
                </p>
                
                <h1>Colaboladores</h1>
            </main>

            <div className={styles.colab}>
                <ul className={styles.colabList}>
                    <li>
                        <h2>Logo</h2>
                        <p>
                        <a href="https://www.instagram.com/pedro_s_dutra/" target="_blank" >Pedro Dutra</a>
                        </p>
                    </li>

                    <li>
                        <h2>Arte Raças</h2>
                        <p>
                            <a href="https://www.artstation.com/ya_wara" target="_blank" >Camila Teixeira Frauzino</a><br/>
                        </p>
                    </li>

                    <li>
                        <h2>Arte Elementos</h2>
                        <p>
                            <a href="https://www.linkedin.com/in/eric-santana-14438032/" target="_blank" >Jean Vitor</a>
                        </p>
                    </li>
                </ul>

                <ul className={styles.colabList}>
                    <li>
                        <h2>Website</h2>
                        <p>
                        <a href="https://www.linkedin.com/in/eric-santana-14438032/" target="_blank" >Eric Santana</a>
                        </p>
                    </li>

                    <li>
                        <h2>Arte Livros</h2>
                        <p>
                        <a href="https://www.flaticon.com/authors/freepik" target="_blank" >Freepik</a>
                        </p>
                    </li>

                    <li>
                        <h2>Arte Principal</h2>
                        <p>
                        <a href="https://pixabay.com/users/jcragaru34-6733407/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5176259" target="_blank" >Jean C Ragaru</a>
                        </p>
                    </li>

                </ul>

            </div>          

        </div>
    )
}