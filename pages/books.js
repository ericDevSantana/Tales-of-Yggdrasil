import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card, Button } from 'react-bootstrap'

export default function Books() {
    return (
        <div className={styles.lib}>    
            <Head>
                <title>Os Livros</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                <h1>Os Livros</h1>
                <p>
                    Tales of Yggdrasil RPG conta com vários livros para apresentar seu vasto mundo para os jogadores. Livros de regras sobre como jogar seu sistema de RPG, livros das magias, e livros de lores. Estes livros podem ser adquiridos pela loja virtual.
                </p>
                <p>
                    Por ainda estar em fase de early-access, os livros estão em um formato bem simples, e parte de seu conteúdo resumido, mas não se engane! Ao adquirir estes livros, você estará contribuindo para que TOY RPG se torne um jogo grande, e com sua ajuda poderemos adicionar ainda mais conteúdos e melhorar o que já existe!
                </p>
                <p>
                    Acesse os links abaixo para adquirir os livros e começar sua jornada por este novo mundo mágico!
                </p>

                <div className={styles.grid}>
                    <a href="https://www.amazon.com.br/dp/B083RCZWM6/ref=sr_1_3?qid=1578789520&refinements=p_27%3ALucas+Yabu&s=digital-text&sr=1-3&text=Lucas+Yabu" target="_blank" >
                        <Card style={{ width: '12rem', height: '18rem' }} className={styles.books}>
                            <Card.Img variant="top" src="/book.png" />
                            <Card.Body>
                                <Card.Title style={{ color: 'black'}}>Jogador</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://www.amazon.com.br/dp/B083RCQDMS/ref=sr_1_2?qid=1578789629&refinements=p_27%3ALucas+Yabu&s=digital-text&sr=1-2&text=Lucas+Yabu" target="_blank" >
                        <Card style={{ width: '12rem', height: '18rem' }} className={styles.books}>
                            <Card.Img variant="top" src="/book.png" />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Mestre</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://www.amazon.com.br/dp/B083RDHPF1/ref=sr_1_1?qid=1578789645&refinements=p_27%3ALucas+Yabu&s=digital-text&sr=1-1&text=Lucas+Yabu" target="_blank" >
                        <Card style={{ width: '12rem', height: '18rem' }} className={styles.books}>
                            <Card.Img variant="top" src="/book.png" />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Bestiário</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://www.amazon.com.br/dp/B0889N7JDS" target="_blank" >
                        <Card style={{ width: '12rem', height: '18rem' }} className={styles.books}>
                            <Card.Img variant="top" src="/book.png" />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Continente Verde</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </div>

                <p>
                    Os livros de magia da Tier 1, Tier 2 e Tier 3 podem ser baixados, juntamente de suas fichas, gratuitamente aqui!
                </p>

                <div className={styles.grid}>
                    <a href="https://drive.google.com/drive/folders/1FkFCn5DMfIQwzXLqSemy85BzLa7LoBHw" target="_blank" >
                        <Card style={{ width: '12rem' }} className={styles.books}>
                            <Card.Img variant="top" src="/book.png" />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Tier 1</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://drive.google.com/drive/folders/1ClYlUkSRUmJAhXMKdkBszUCH2m50MqTS" target="_blank" >
                        <Card style={{ width: '12rem' }} className={styles.books}>
                            <Card.Img variant="top" src="/book.png" />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Tier 2</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://drive.google.com/drive/folders/1VYVtM4Z3cX6VCd280a2DIJBMZRhhtRwR" target="_blank" >
                        <Card style={{ width: '12rem' }} className={styles.books}>
                            <Card.Img variant="top" src="/book.png" />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Tier 3</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </div>

            </main>
        </div>
    )
}