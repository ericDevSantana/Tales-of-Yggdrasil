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

            <main className={styles.main} style={{ padding: '1% 5%' }}>
                
                <div className={styles.grid}>
                    
                    <Link href="/races/[race]" as={`/races/Aasgardianos`}>
                        <img className={styles.racesFlags} src="/Aasgardian.png"/>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Atlantes`}>
                        <img className={styles.racesFlags} src="/Atlantean.png"/>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Methaliers`}>
                        <img className={styles.racesFlags} src="/Methalier.png"/>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Olympianos`}>
                        <img className={styles.racesFlags} src="/Olympian.png"/>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Phantons`}>
                        <img className={styles.racesFlags} src="/Phantons.png"/>
                    </Link>

                    <Link href="/races/[race]" as={`/races/Teranos`}>
                        <img className={styles.racesFlags} src="/Teran.png"/>
                    </Link>

                </div>
            </main>
            

        </div>
    )
}