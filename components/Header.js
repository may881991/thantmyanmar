import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  const [search, setSearch]= useState()
  function findSerach(value) {
   
    setSearch(value.target.value)
  }

  return (
    <div className={`shadow header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
          <img src="/images/tm-logo.svg" alt="" className="img-fluid mx-auto d-block"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Engagement</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Our Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#resources">Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contact'>Contact Us</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href='#partner'>Partners</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>*/}
            </Nav>
          </Collapse>
          <div className="input-group">
          <a id="button-search"><img src="/images/search-line.svg" alt="" className="img-fluid mx-auto d-block"/></a>
            <input onChange={findSerach} className="form-control" type="text" placeholder="Search Here..." aria-label="Enter search term..." aria-describedby="button-search" />
            {/* <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }}>  */}
              
            {/* </Link> */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;