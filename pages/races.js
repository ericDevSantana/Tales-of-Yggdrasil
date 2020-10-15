import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Races() {
    return (
        <div className={styles.races}>
            <Head>
                <title>Raças</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main} style={{ padding: '1% 15%' }}>
                <h1>As Raças</h1>
                <div className={styles.grid}>
                    
                    <Link href="/races/[race]" as={`/races/Aasgardianos`}>
                        <div className={styles.racesFlags}>
                            <img src="/Aasgardian.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Atlantes`}>
                        <div className={styles.racesFlags}>
                            <img src="/Atlantean.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Methaliers`}>
                        <div className={styles.racesFlags}>
                            <img src="/Methalier.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Olympianos`}>
                        <div className={styles.racesFlags}>
                            <img src="/Olympian.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Phantons`}>
                        <div className={styles.racesFlags}>
                            <img src="/Phantons.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Teranos`}>
                        <div className={styles.racesFlags}>
                            <img src="/Teran.png"/>
                        </div>
                    </Link>

                </div>
            </main>
            

        </div>
    )
}