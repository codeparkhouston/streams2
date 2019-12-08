import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#669966`,
      marginBottom: `1.45rem`,
    }}
  >
      <Navbar expand="lg">
      {/* <Container> */}

        <Container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0.5rem 0.5rem 0.5rem 0.5rem`,
          }}
        >      
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Link to="/">
            <Navbar.Brand as="span">
              <h1 style={{ margin: 0, color: `white`, textDecoration: `none`}}>
              
                {siteTitle}
              
              </h1>
            </Navbar.Brand>
          </Link>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {menuLinks.map(link => (
                  <Link to={link.link} key={link.name} > 
                    <Nav.Link as="span" eventkey={link.name}  style={{ color: `white` }} >
                      
                        {link.name}
                      
                    </Nav.Link>
                  </Link>
                ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
