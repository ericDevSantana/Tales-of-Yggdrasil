import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getAllElementsIds, getText} from '../../lib/elements'

export default function Element(pageProps) {

    // const url = window.location.href.split('/');
    const element = pageProps.data.elem;
    console.log(pageProps.data)

    return (
        <div className={styles.main}>
            <Head>
                <title>{element}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <img className={styles.element} src={'/'+`${element}`+'.png'}/>
            <p>{pageProps.data.description}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllElementsIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getText(params.elem);

    return {
        props: {
            data
        }
    }
}