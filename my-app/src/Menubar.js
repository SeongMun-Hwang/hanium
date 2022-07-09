import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./logo.jpg";
import {LinkContainer} from 'react-router-bootstrap'

const Menubar = () => {
    return <div>
        <Navbar bg="light" expand="lg">
            <Container fluid={true}>
                <Navbar.Brand href="#home"><img src={logo} style={{width: 100}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="고객센터" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">질의응답</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="계정" id="basic-nav-dropdown">
                            <LinkContainer to="/Login">
                                <NavDropdown.Item href="#action/3.2">로그인</NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Item>회원가입</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}
export default Menubar