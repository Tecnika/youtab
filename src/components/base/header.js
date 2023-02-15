import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "./logo";


function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Logo />
                        {' '}
                        YouTab
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Общая статистика</Nav.Link>
                            <Nav.Link href="#income">Доход</Nav.Link>
                            <Nav.Link href="#сonsumption">Расход</Nav.Link>
                            <NavDropdown title="Статистика" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Доход</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Расход</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Сводка</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Графики</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login">Tecnika (NK)</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;