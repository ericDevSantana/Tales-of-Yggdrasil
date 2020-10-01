import { Nav, Navbar } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Tales of Yggdrasil</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/world">MUNDO</Nav.Link>
                    <Nav.Link href="#link">RPG</Nav.Link>
                    <Nav.Link href="#link">RAÇAS</Nav.Link>
                    <Nav.Link href="#link">ELEMENTOS</Nav.Link>
                    <Nav.Link href="#link">LIVROS</Nav.Link>
                    <Nav.Link href="#link">PROJETO</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}