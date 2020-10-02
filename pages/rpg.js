import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function RPG() {
    return (
        <div>
            <Head>
                <title>The RPG</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>O RPG</h1>
                <p>
                    Tales of Yggdrasil possui um sistema de RPG similar aos clássicos, mas sua mecânica é diferenciada por dar liberdade aos jogadores e mestres criarem seus personagens e histórias únicas. Não existem classes pré-feitas, cada jogador monta a sua própria de acordo com sua estratégia. Os combates são rápidos, utilizando de poucas rolagens de dados.
                    Entre neste mundo e se torne um caçador para derrubar as criaturas mais ferozes, um guerreiro imbatível, o mais poderoso mago, e mais. Seja aquilo que deseje e domine seu elemento mágico para descobrir territórios inexplorados enquanto luta contra a perigosa vida selvagem, e se torne um herói! Comece já sua jornada para escrever sua própria lenda que será contada por gerações!
                </p>
            </main>
        </div>
    )
}