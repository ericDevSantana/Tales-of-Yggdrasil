import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Form, Button} from 'react-bootstrap'

export default function Contacts() {
    const [contactMessage, setMessage] = React.useState({
        email: "",
        message: ""
    });

    function handleChanges(event) {
        const { name, value } = event.target;

        setMessage((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

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
                        <Form.Control type="email" pattern="[a-z0-9]+[@][a-z]+[.][a-z]+" value={contactMessage.email} onChange={handleChanges} name="email"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" rows="3" value={contactMessage.message} onChange={handleChanges} name="message"/>
                    </Form.Group>
                    <Button type="submit" variant="secondary">Enviar</Button>{' '}
                </Form>
                
            </main>
        </div>
    )
}