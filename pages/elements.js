import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Button, Card } from 'react-bootstrap'

export default function Elements() {
    return (
        <div className={styles.races}>
            <Head>
                <title>Elementos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main} style={{ padding: '1% 5%' }}>
                <div className={styles.grid}>
                    
                    <Link href="/elements/[elem]" as={`/elements/Agua`}>
                        <a>
                            <Card bg="primary" style={{ width: '14rem', borderWidth: '10px' }} className={styles.card}>
                                <Card.Img variant="top" src="/Agua.png" />
                                <Card.Body style={{ color: 'black' }}>
                                    <Card.Title style={{ fontSize: '2rem' }}>Água</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Fogo`}>
                        <div className={styles.card}>
                            <img style={{ height: '250px', width: '250px' }} src={'/Fogo.png'} />
                        </div>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Gelo`}>
                        <a>
                            <Card bg="info" style={{ width: '14rem', borderWidth: '10px' }} className={styles.card}>
                                <Card.Img variant="top" src="/Gelo.png" />
                                <Card.Body style={{ color: 'black' }}>
                                    <Card.Title style={{ fontSize: '2rem' }}>Gelo</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Metal`}>
                        <a>
                            <Card style={{ width: '14rem', backgroundColor: 'silver', borderWidth: '10px' }} className={styles.card}>
                                <Card.Img variant="top" src="/Metal.png" />
                                <Card.Body style={{ color: 'black' }}>
                                    <Card.Title style={{ fontSize: '2rem' }}>Metal</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Negro`}>
                        <a>
                            <Card bg="secondary" style={{ width: '14rem', borderWidth: '10px' }} className={styles.card}>
                                <Card.Img variant="top" src="/Negro.png" />
                                <Card.Body style={{ color: 'black' }}>
                                    <Card.Title style={{ fontSize: '2rem' }}>Negro</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Vento`}>
                        <a>
                            <Card bg="success" style={{ width: '14rem', borderWidth: '10px' }} className={styles.card}>
                                <Card.Img variant="top" src="/Vento.png" />
                                <Card.Body style={{ color: 'black' }}>
                                    <Card.Title style={{ fontSize: '2rem' }}>Vento</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Trevas`}>
                        <a>
                            <Card style={{ width: '14rem', backgroundColor: 'purple', borderWidth: '10px' }} className={styles.card}>
                                <Card.Img variant="top" src="/Trevas.png" />
                                <Card.Body style={{ color: 'black' }}>
                                    <Card.Title style={{ fontSize: '2rem' }}>Trevas</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Link>

                </div>
            </main>


        </div>
    )
}