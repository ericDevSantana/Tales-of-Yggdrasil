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
                    <a>
                        <Card style={{ width: '20rem' }} className={styles.card}>
                            <Card.Img variant="top" src="/kina_avatar.jpg" />
                            <Card.Body>
                                <Card.Title>Aasgardianos</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/mage_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Atlantes</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/paly_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Methaliers</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/druid_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Olympianos</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/druid_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Phantons</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }} className={styles.card}>
                        <Card.Img variant="top" src="/druid_avatar.jpg" />
                        <Card.Body>
                            <Card.Title>Teranos</Card.Title>
                        </Card.Body>
                    </Card>

                </div>
            </main>
            

        </div>
    )
}