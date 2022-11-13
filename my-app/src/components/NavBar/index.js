import React from 'react';
import {FaBars} from 'react-icons/fa';
import './style.css';
import {Nav, NavBarContainer, 
        NavLogo, MobileIcon, 
        NavMenu, NavItem, 
        NavLinks, NavBtn, NavBtnLink} from './NavBarElements';

import {Kategoria} from '../Kategoria/Kategoria'

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav >
        <NavBarContainer >
          <NavLogo to='/'>
            YourGuide
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            {/* <NavItem>
              <NavLinks to="App">About Us</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="Autoret">Autoret</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Importuesit">Importuesit</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Lexuesit">Lexuesit</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Kategorit">
                <div class="dropdown">
                    <span>Categories</span>
                    <div class="dropdown-content">
                      <div class="content">
                        {/* <p>Hello</p> */}
                        <Kategoria/>
                      </div>
                    </div>
                </div>
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
          <NavLinks to="/signin">Sign In</NavLinks>
          </NavBtn>
          <NavBtn>
            <NavLinks to="/login">Log In</NavLinks>
          </NavBtn> */}
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar;