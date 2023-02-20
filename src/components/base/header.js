import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Avatar from "../work_components/avatar";
import Logo from "../work_components/logo";


function Header() {
    let name = "Tecnika (NK)"
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container className="a_content_center">
                    <Navbar.Brand  href="#home">
                        <Logo />
                        {' '}
                        YouTab
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/communal">Общая статистика</Nav.Link>
                            <Nav.Link href="/income">Доход</Nav.Link>
                            <Nav.Link href="/сonsumption">Расход</Nav.Link>
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
                            <div className="f_flex f_row">
                                <Avatar name={name}/>
                                                                <a style={{margin:'5px'}} href="#login">{name}</a></div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;