import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getAllRaces, getRace } from '../../lib/races'

export default function Race(pageProps) {
    const race = pageProps.data.race;
    const paragraphs = pageProps.data.description.split("$");

    return (
        // This will display the proper style for each element
        <div className={
            race == "Aasgardianos" ? styles.aasgardianos :
                race == "Atlantes" ? styles.atlantes :
                    race == "Methaliers" ? styles.methaliers :
                        race == "Olympianos" ? styles.olympianos :
                            race == "Phantons" ? styles.phantons :
                                styles.teranos}>
            
            {/* White background for description of each element
            <div className={styles.elementDescription}></div> */}
            
            <div className={styles.main}>
                
                <Head>
                    <title>{race}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1>{race}</h1>
                <div className={styles.grid} style={{backgroundColor: 'white', borderRadius: '10px', marginBottom: '20px'}}>
                    <div className={styles.racesImages}>
                        <img style={{float: 'left', margin: '0 30px 0 30px'}} src={'/' + `${race}` + '_female.png'} />
                        <img style={{float: 'right', margin: '0 30px 0 30px'}} src={'/' + `${race}` + '_male.png'} />
                    </div>
                    
                </div>

                {/* Need to break text into paragraphs and then display then on a list */}
                {/* <p>{pageProps.data.description}</p> */}
                {paragraphs.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
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