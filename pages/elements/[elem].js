import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getAllElements, getElement } from '../../lib/elements'

export default function Element(pageProps) {
    const element = pageProps.data.elem;

    return (
        // This will display the proper style for each element
        <div className={
            element == "Agua" ? styles.Agua :
                element == "Fogo" ? styles.Fogo :
                    element == "Metal" ? styles.Metal :
                        element == "Vento" ? styles.Vento :
                            element == "Trevas" ? styles.Trevas :
                                element == "Negro" ? styles.Negro : styles.Gelo}>
            
            {/* White background for description of each element */}
            <div className={styles.elementDescription}></div>
            
            <div className={styles.main}>
                
                <Head>
                    <title>{element}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 style={{fontSize: '5vw', padding: '2% 0'}}>{element}</h1>

                <img className={styles.element} src={'/' + `${element}` + '.png'} />
                <p>{pageProps.data.description}</p>
            </div>

        </div>
    )
}

// List of all paths...Fallback = false -- > 404 if doesn't exist
export async function getStaticPaths() {
    const paths = getAllElements()
    return {
        paths,
        fallback: false
    }
}

// pre render at build time
export async function getStaticProps({ params }) {
    const data = await getElement(params.elem);

    return {
        props: {
            data
        }
    }
}