import React from 'react'
import { Navbar,Nav,Container,NavLink, NavbarBrand } from 'react-bootstrap';

import logo from '../assets/images/logos/logo_utpg7.png';

// import { Nav, NavLink, NavItem  } from 'react-bootstrap';

const header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="#home">
                        <a class="navbar-brand" href="#aaa">
                            <img src={logo} alt=""/>
                        </a>
                    </NavbarBrand>
                    
                    <Nav className="me-auto">
                    <NavLink href="#home">¡Renta de Muebles Fácil!</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        
        </header>

        /**
         *  <header id="header" class="header header-transparent">
                <Container className="container">
                    <Navbar id="navbarnav" class="navbar navbar-expand-lg navbar-light">
                    <NavbarBrand href="#home">
                        <a class="navbar-brand" href="#">
                            <img src="./assets/images/logos/logo_utpg7.png" alt="">
                        </a>
                    </NavbarBrand>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="icon icon-menu"></i></span>
                    </button>
                    <Nav>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <NavLink>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item nav-link active"><a class="ts-scroll" href="#home">Inicio</a></li>
                                    <li class="nav-item nav-link"><a class="ts-scroll" href="#sponsors">Articulos</a></li>
                                    <li class="nav-item nav-link"><a class="ts-scroll" href="#about">Caracteristicas</a></li>
                                    <li class="nav-item nav-link"><a class="ts-scroll" href="#ts-speakers">Beneficios</a></li>
                                    <li class="nav-item nav-link"><a class="ts-scroll" href="#schedules">Contacto</a></li>
                                    <router-link to="/sesion"><li class="nav-item nav-link"><a className="ts-scroll" href="login.html">Ingresar</a></li></router-link>
                                </ul>
                            </NavLink>
                        </div>
                    </Nav>
                    </Navbar>
                </Container>
            </header>
        */
    )
}

export default header
