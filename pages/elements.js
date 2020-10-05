import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card } from 'react-bootstrap'

export default function Elements() {
    return (
        <div className={styles.races}>
            <Head>
                <title>Elementos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main} style={{ padding: '1% 5%' }}>
                <div className={styles.grid}>
                    <a>
                        <Card bg="primary" style={{ width: '14rem', backgroundColor: 'purple' }} className={styles.card}>
                            <Card.Img variant="top" src="/Agua.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '2rem' }}>Água</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a>
                        <Card bg="danger" style={{ width: '14rem' }} className={styles.card}>
                            <Card.Img variant="top" src="/Fogo.png"/>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '2rem' }}>Fogo</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a>
                        <Card bg="info" style={{ width: '14rem' }} className={styles.card}>
                            <Card.Img variant="top" src="/Gelo.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '2rem' }}>Gelo</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a>
                        <Card bg="secondary" style={{ width: '14rem' }} className={styles.card}>
                            <Card.Img variant="top" src="/Metal.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '2rem' }}>Metal</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a>
                        <Card bg="dark" style={{ width: '14rem' }} className={styles.card}>
                            <Card.Img variant="top" src="/Negra.png" />
                            <Card.Body style={{ color: 'white' }}>
                                <Card.Title style={{ fontSize: '2rem' }}>Negro</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a>
                        <Card bg="success" style={{ width: '14rem' }} className={styles.card}>
                            <Card.Img variant="top" src="/Vento.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '2rem' }}>Vento</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                    <a>
                        <Card style={{ width: '14rem', backgroundColor: 'purple'  }} className={styles.card}>
                            <Card.Img variant="top" src="/Trevas.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '2rem' }}>Trevas</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>

                </div>
            </main>


        </div>
    )
}