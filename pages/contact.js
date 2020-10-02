import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Form, Button} from 'react-bootstrap'

export default function Contacts() {
    return (
        <div>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Entre em contato</h1>
                <Form style={{ width: '800px', height: '400px' }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="secondary">Enviar</Button>{' '}
                </Form>
                
            </main>
        </div>
    )
}