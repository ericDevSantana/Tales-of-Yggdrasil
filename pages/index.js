import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Image} from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tales of Yggdrasil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>  
        {/* <h1>Bem Vindo a</h1> */}

        <Image className={styles.logo} src='/extendedlogo.png' fluid/>
        
        <p>Tales of Yggdrasil é um RPG de mesa ainda em desenvolvimento, mas seu early access (acesso antecipado) já está disponível para ser jogado. O Livro do Jogador e Livro do Mestre podem ser adquiridos através deste site.
        Por ainda estar no early access, o conteúdo disponível ainda é simples, mas novos conteúdos serão adicionados com o tempo, e o que está disponível poderá sofrer alterações. Quem adquirir os livros durante o período de acesso antecipado receberá as atualizações de ambos os livros gratuitamente.
        Explore um pouco deste mundo incrível através deste site!</p>
      </main>

    </div>
  )
}
