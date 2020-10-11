import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getAllRaces, getRace } from '../../lib/races'

export default function Race(pageProps) {
    const race = pageProps.data.race;

    return (
        // This will display the proper style for each element
        <div className={
            race == "Aasgardianos" ? styles.Agua :
                race == "Atlantes" ? styles.Fogo :
                    race == "Methaliers" ? styles.Metal :
                        race == "Olympianos" ? styles.Vento :
                            race == "Phantons" ? styles.Trevas :
                                race == "Teranos" ? styles.Negro : styles.Gelo}>
            
            {/* White background for description of each element */}
            <div className={styles.elementDescription}></div>
            
            <div className={styles.main}>
                
                <Head>
                    <title>{race}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 style={{fontSize: '5rem', padding: '2% 0'}}>{race}</h1>
                <div className={styles.grid}>
                    <img className={styles.racesImages} style={{float: 'left'}} src={'/' + `${race}` + '_female.png'} />
                    <img className={styles.racesImages} style={{ float: 'right' }} src={'/' + `${race}` + '_male.png'} />
                </div>

                {/* Need to break text into paragraphs and then display then on a list */}
                <p>{pageProps.data.description}</p>
            </div>

        </div>
    )
}

// List of all paths...Fallback = false -- > 404 if doesn't exist
export async function getStaticPaths() {
    const paths = getAllRaces()
    return {
        paths,
        fallback: false
    }
}

// pre render at build time
export async function getStaticProps({ params }) {
    const data = await getRace(params.race);

    return {
        props: {
            data
        }
    }
}