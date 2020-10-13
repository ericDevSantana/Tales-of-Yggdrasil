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
                {/* <h1 style={{fontSize: '5rem'}}>Elementos</h1> */}
                <div className={styles.grid}>
                    
                    <Link href="/elements/[elem]" as={`/elements/Fogo`}>
                        <div className={styles.card}>
                            <img src={'/Fogo.png'} />
                        </div>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Gelo`}>
                        <div className={styles.card}>
                            <img src={'/Gelo.png'} />
                        </div>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Vento`}>
                        <div className={styles.card}>
                            <img src={'/Vento.png'} />
                        </div>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Agua`}>
                        <div className={styles.card}>
                            <img src={'/Agua.png'} />
                        </div>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Negro`}>
                        <div className={styles.card}>
                            <img src={'/Negro.png'} />
                        </div>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Metal`}>
                        <div className={styles.card}>
                            <img src={'/Metal.png'} />
                        </div>
                    </Link>

                    <Link href="/elements/[elem]" as={`/elements/Trevas`}>
                        <div className={styles.card}>
                            <img src={'/Trevas.png'} />
                        </div>
                    </Link>

                </div>
            </main>


        </div>
    )
}