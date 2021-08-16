import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LENGUAGE } from "../tools/constans";
import { getLenguage, getText } from "../locales";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const chengeLenguage = (e) => {
    localStorage.setItem(LENGUAGE, e.target.value);
    document.location.reload(true);
  };

  return (
    <div className="navbar_main">
      <div className="container con_main">
        <Navbar light expand="lg" className="navbar_main_child">
          <NavbarBrand href="/" className="navbar_brend">
            <img src="./images/logo3.png" alt="" />
          </NavbarBrand>

          <div className="wrap d-flex align-items-center">
            <select className="form-control select_two ">
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
            </select>

            <NavbarToggler className="burger" onClick={toggle}>
              <button
                aria-label="Toggle navigation"
                type="button"
                className="navbar-toggler"
              >
                <span>
                  <GiHamburgerMenu/>
                </span>
              </button>
            </NavbarToggler>
          </div>

          <Collapse isOpen={isOpen} navbar className="collapse_main">
            <Nav className="m-auto  nav_main " navbar>
              <NavItem className="navitem_main">
                <Link to="/" className="navlink_main">
                  {getText("uy")}
                </Link>
              </NavItem>
              <NavItem className="navitem_main">
                <Link to="/news" className="navlink_main">
                  {getText("yangiliklar")}
                </Link>
              </NavItem>
              <NavItem className="navitem_main">
                <Link to="/programs" className="navlink_main">
                  {getText("dasturlar")}
                </Link>
              </NavItem>
              <NavItem className="navitem_main">
                <Link to="/partners" className="navlink_main">
                  {getText("hamkorlar")}
                </Link>
              </NavItem>
              <NavItem className="navitem_main">
                <Link to="/contak" className="navlink_main">
                  {getText("muvaffaqiyat")}
                </Link>
              </NavItem>
              {/*<NavItem className="navitem_main">*/}
              {/*    <NavLink href="#!" className="register_two navlink_main">Registration</NavLink>*/}
              {/*</NavItem>*/}
            </Nav>
            {/*<InputGroup className="d-flex search">*/}
            {/*    <Input className="input " placeholder="Search"/>*/}
            {/*    <InputGroupAddon addonType="append" className="lupa">*/}
            {/*        <Button type="button" className="button"> <img src="./images/lupa.svg" alt=""/></Button>*/}
            {/*    </InputGroupAddon>*/}
            {/*</InputGroup>*/}
            <select onChange={chengeLenguage} className="form-control select">
              <option value="uz" selected={getLenguage() === "uz"}>
                UZ
              </option>
              <option value="ru" selected={getLenguage() === "ru"}>
                RU
              </option>
              <option value="en" selected={getLenguage() === "en"}>
                EN
              </option>
            </select>
            {/*<NavbarText className="register_one">Registration</NavbarText>*/}
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;
