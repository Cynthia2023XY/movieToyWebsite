import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // 引入LanguageContext
import './Header.css'; // 引入自定义的CSS文件
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown"; // 引入Dropdown组件

const Header = () => {
  const { language, toggleLanguage, texts } = useContext(LanguageContext); // 使用LanguageContext
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} />Movie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">{texts.home}</NavLink>
            <NavLink className="nav-link" to="/watchList">{texts.watchList}</NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2" onClick={handleLoginShow}>{texts.login}</Button>
          <Button variant="outline-info" onClick={handleRegisterShow}>{texts.register}</Button>
          <Dropdown align="end" className="ms-2">
            <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
              {language === 'en' ? 'English' : '中文'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => toggleLanguage('en')}>English</Dropdown.Item>
              <Dropdown.Item onClick={() => toggleLanguage('zh')}>中文</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleLoginClose} className="dark-modal">
        <Modal.Header closeButton>
          <Modal.Title>{texts.login}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{texts.email}</Form.Label>
              <Form.Control type="email" placeholder={texts.email} className="dark-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{texts.password}</Form.Label>
              <Form.Control type="password" placeholder={texts.password} className="dark-input" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {texts.submit}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Register Modal */}
      <Modal show={showRegister} onHide={handleRegisterClose} className="dark-modal">
        <Modal.Header closeButton>
          <Modal.Title>{texts.register}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{texts.email}</Form.Label>
              <Form.Control type="email" placeholder={texts.email} className="dark-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{texts.password}</Form.Label>
              <Form.Control type="password" placeholder={texts.password} className="dark-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>{texts.confirmPassword}</Form.Label>
              <Form.Control type="password" placeholder={texts.confirmPassword} className="dark-input" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {texts.submit}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Header;
