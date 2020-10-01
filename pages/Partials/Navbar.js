import { Nav, Navbar } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">Tales of Yggdrasil</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/world">MUNDO</Nav.Link>
                    <Nav.Link href="/rpg">RPG</Nav.Link>
                    <Nav.Link href="/races">RAÇAS</Nav.Link>
                    <Nav.Link href="/elements">ELEMENTOS</Nav.Link>
                    <Nav.Link href="/books">LIVROS</Nav.Link>
                    <Nav.Link href="/project">PROJETO</Nav.Link>
                    <Nav.Link href="/contact">CONTATO</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}