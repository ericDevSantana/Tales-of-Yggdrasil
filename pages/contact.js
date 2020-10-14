import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Form, Button} from 'react-bootstrap'

export default function Contacts() {
    const [contactMessage, setMessage] = React.useState({
        subject: "",
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

    function handleSubmit(event) {
        // window.open('mailto:yabu.games@outlook.com?subject=subject&body=' + contactMessage.message);
        window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&su="+contactMessage.subject+"&to=yabu.games@outlook.com&body="+contactMessage.message);
    }

    return (
        <div>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.contacts}>
                <h1>Entre em contato</h1>
                <Form style={{ width: '100%', height: '100%' }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        {/* <Form.Label>E-mail:</Form.Label>
                        <Form.Control type="email" pattern="[a-z0-9]+[@][a-z]+[.][a-z]+" value={contactMessage.email} onChange={handleChanges} name="email" required/> */}
                        <Form.Label>Assunto</Form.Label>
                        <Form.Control style={{ resize: 'none' }} as="textarea" rows="1" value={contactMessage.subject} onChange={handleChanges} name="subject" required />
                        
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control style={{resize: 'none'}} as="textarea" rows="10" value={contactMessage.message} onChange={handleChanges} name="message" required/>
                    </Form.Group>
                    <Button type="submit" variant="secondary" onClick={handleSubmit}>Enviar</Button>{' '}
                </Form>
                
            </main>
        </div>
    )
}