import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Element() {

    const url = window.location.href.split('/');
    const element = url[(url.length - 1)];

    return (
        <div className={styles.main}>
            <Head>
                <title>{element}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <img className={styles.element} src={'/'+`${element}`+'.png'}/>
            <p>This is the description of the element {element}!</p>
        </div>
    )
}