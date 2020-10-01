import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Card, Button} from 'react-bootstrap'

export default function Races() {
    return (
        <div className={styles.races}>
            <Head>
                <title>Raças</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/kina_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Knights</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/mage_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Sorcerers</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/paly_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Paladins</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/druid_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Druids</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
            </main>
            

        </div>
    )
}