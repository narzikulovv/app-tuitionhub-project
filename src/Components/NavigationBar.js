import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="navbar_main">
            <div className="container con_main">
                <Navbar  light expand="lg" className="navbar_main_child">
                    <NavbarBrand href="/" className="navbar_brend">Tuition Hub</NavbarBrand>

                    <div className="wrap d-flex align-items-center">
                        <select  className="form-control select_two ">
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                        </select>


                        <NavbarToggler className="burger" onClick={toggle}>
                            <button aria-label="Toggle navigation" type="button" className="navbar-toggler">
                                <span><img src="./images/burger.svg" alt=""/></span></button>
                        </NavbarToggler>
                    </div>


                    <Collapse isOpen={isOpen} navbar className="collapse_main">
                        <Nav className="m-auto  nav_main" navbar>
                            <NavItem className="navitem_main">
                                <NavLink href="#!" className="navlink_main">Home</NavLink>
                            </NavItem>
                            <NavItem className="navitem_main">
                                <NavLink href="#!" className="navlink_main">Programs</NavLink>
                            </NavItem>
                            <NavItem className="navitem_main">
                                <NavLink href="#!" className="navlink_main">Partners</NavLink>
                            </NavItem>
                            <NavItem className="navitem_main">
                                <NavLink href="#!" className="navlink_main">Achievement</NavLink>
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
                        <select  className="form-control select">
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                        </select>
                        {/*<NavbarText className="register_one">Registration</NavbarText>*/}
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavigationBar;