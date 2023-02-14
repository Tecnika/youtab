import { Container, Navbar, NavbarBrand, Button, ButtonGroup} from "react-bootstrap";


function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        YouTab
                    </Navbar.Brand>
                    <p>Стили</p>
                    <ButtonGroup>
                    <Button variant="outline-light">Lux</Button>
                    <Button variant="outline-light">Sketchy</Button>
                    </ButtonGroup>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;