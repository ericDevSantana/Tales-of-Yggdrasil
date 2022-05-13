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
                    
                    <Link href="/races/[race]" as={`/races/Aasgardians`}>
                        <div className={styles.racesFlags}>
                            <img src="/Aasgardian Flag.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Atlanteans`}>
                        <div className={styles.racesFlags}>
                            <img src="/Atlantean Flag.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Methaliers`}>
                        <div className={styles.racesFlags}>
                            <img src="/Methalier Flag.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Olympians`}>
                        <div className={styles.racesFlags}>
                            <img src="/Olympian Flag.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Phantons`}>
                        <div className={styles.racesFlags}>
                            <img src="/Phantons Flag.png"/>
                        </div>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Terans`}>
                        <div className={styles.racesFlags}>
                            <img src="/Teran Flag.png"/>
                        </div>
                    </Link>

                </div>
            </main>
            

        </div>
    )
}