import React from 'react'

//componentes
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

import {Card, Button} from "react-bootstrap";

//Imagenes
import caracter1 from '../assets/images/caracter/habitacion1.jpg';
import caracter2 from '../assets/images/caracter/naturaleza.jpg';
import caracter3 from '../assets/images/caracter/parque.jpg';
import caracter4 from '../assets/images/caracter/bbq.jpg';
import caracter5 from '../assets/images/caracter/canchas.jpg';
import caracter6 from '../assets/images/caracter/parqueadero.jpg';
import caracter7 from '../assets/images/caracter/piscina.jpg';
import caracter8 from '../assets/images/caracter/salon.jpg';




const vistaHomepage = () => {
    return (
        
        <body>

            <input type="checkbox" id="cerrar"/>
                <label for="cerrar" id="btn-cerrar">X</label>
                <div class="modal">
                    <div class="contenido">
                        <img src='' alt="" className="img-fluid"/>
                        
                    </div>
                </div>

            <Header/>

            <section class="hero-area content-left" id="home">
                    <div class="banner-item">
                        <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="banner-content-wrap">
                                    <div class="countdown wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
                                            <div class="counter-item">
                                                <i class="icon icon-ring-1Asset-1"></i>
                                                <span class="days">07</span>
                                                <div class="smalltext">Día</div>
                
                                            </div>
                                            <div class="counter-item">
                                                <i class="icon icon-ring-4Asset-3"></i>
                                                <span class="hours">11</span>
                                                <div class="smalltext">Mes</div>
                                            </div>
                                            <div class="counter-item">
                                                <i class="icon icon-ring-3Asset-2"></i>
                                                <span class="minutes">2021</span>
                                                <div class="smalltext">Año</div>
                                            </div>

                                        </div>

                                    <h1 class="banner-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">
                                    Estilo De Vida Natural
                                    </h1>
                                    <p class="banner-info wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">UTP G7:
                                    Todo lo que necesitas en 
                                    un mismo lugar</p>
                                    
                                    <div class="banner-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
                                    <a href="#aaa" class="btn">¡Comprar YA!</a>
                                    </div>

                                </div>

                            </div>
                        </div>
                        </div>
                        
                    </div>
                </section> 

            <section>
            <div className="figurita3"></div>
            <div class="container">
                
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="section-title white text-center">
                            <span>Deléitate Con Nuestros</span>
                            Departamentos
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-4 mx-auto">
                        <Card className="card_dpta" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={caracter1} />
                            <Card.Body>
                                <Card.Title>Apartamento #1</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="ver_dpta" variant="primary">Solicitar</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div class="col-lg-4 mx-auto">
                        <Card className="card_dpta" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={caracter1} />
                            <Card.Body>
                                <Card.Title>Apartamento #1</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="ver_dpta" variant="primary">Solicitar</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div class="col-lg-4 mx-auto">
                        <Card className="card_dpta" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={caracter1} />
                            <Card.Body>
                                <Card.Title>Apartamento #1</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="ver_dpta" variant="primary">Solicitar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="m_info">
                <Button variant="primary" style={{ margin: '0 0 0 30%' }}>Ver Más Apartamentos</Button>
            </div>
            
            </section>

            <section style={{ background: 'darkblue' }}>
            <div className="figurita"></div>
            <div className="figurita1"></div>
            <div className="figurita2"></div>
            <div className="row">
                <div class="col-lg-8 mx-auto">
                    <h2 class="section-title white text-center">
                        <span>Conece sus</span>
                        Beneficios
                    </h2>
                </div>
            </div>
            <div className="row"> 
                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter1} />
                    <Card.Body>
                        <Card.Title>Habitación</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>

                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter2} />
                    <Card.Body>
                        <Card.Title>Zonas Verdes</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>

                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter3} />
                    <Card.Body>
                        <Card.Title>Parque de Niños</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>

                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter4} />
                    <Card.Body>
                        <Card.Title>Zona BBQ</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>

                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter5} />
                    <Card.Body>
                        <Card.Title>Canchas Deportivas</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>

                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter6} />
                    <Card.Body>
                        <Card.Title>Parqueadero</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>

                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter7} />
                    <Card.Body>
                        <Card.Title>Piscina</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>

                <Card className="card_caracteristicas" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={caracter8} />
                    <Card.Body>
                        <Card.Title>Salón Social</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button href="#" variant="primary" className="ver_dpta">Ver</Button>
                    </Card.Body>
                </Card>
            </div>
            </section>

            <section>
            <div className="figurita3"></div>
            <div class="container">
                
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="section-title white text-center">
                            <span>Un poco de lo nuestro</span>
                            Galería
                        </h2>
                    </div>
                </div>
                
            </div>
            <Carousel/>
            
            
            </section>
            

            <section id="about" class="ts-intro event-intro">
            <div className="figurita4"></div>
            <div className="figurita5"></div>
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h2 class="section-title white">
                                <span>Conoce Nuestras</span>
                                Caracteristicas
                            </h2>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-lg-4">
                            <div class="single-intro-text">
                                <i class="fas fa-icons"></i>
                                <h3 class="ts-title">Comodidad Pura</h3>
                                <p>
                                    Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-intro-text">
                                <i class="fas fa-users"></i>
                                <h3 class="ts-title">Buenas Personas</h3>
                                <p>
                                    Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="single-intro-text">
                                <i class="far fa-grin-squint-tears"></i>
                                <h3 class="ts-title">Diversión Pura</h3>
                                <p>
                                    Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
                                </p>
                            </div>
                        </div>

                        </div>
                    </div>

                </section>

            <Footer/>
            
        </body>
    )
}

export default vistaHomepage
