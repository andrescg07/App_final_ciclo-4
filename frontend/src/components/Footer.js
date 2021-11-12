import React from 'react'

// import { Nav, NavLink, NavItem  } from 'react-bootstrap';

const footer = () => {
    return (
        <section className="piecito">
            <div className="footer-area">
                <footer className="ts-footer ts-footer-item">
                    <div className="container">
                    <div className="row footer-border">
                        <div className="col-lg-6">

                            <div className="footer-menu mb-30">
                                <ul>
                                <li><a href="#a">Articulos</a></li>
                                <li><a href="#a">Caracteristicas</a></li>
                                <li><a href="#a">Beneficios</a></li>
                                <li><a href="#a">Contacto</a></li>
                                </ul>
                            </div>

                            <div className="ts-footer-social">
                                <ul>
                                <li>
                                    <a href="#a"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#a"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#a"><i class="fa fa-google-plus"></i></a>
                                </li>
                                <li>
                                    <a href="#a"><i class="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#a"><i class="fa fa-instagram"></i></a>
                                </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            
                            <div className="copyright-text text-right">
                                <p>Copyright &copy; 2021 <a href="index.html">UTP G7</a> - Todos Los Derechos Reservados.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
            </section>
    )
}

export default footer