import React from 'react'


import comodidad from '../assets/images/caracter/habitacion1.jpg';
import comida from '../assets/images/caracter/bbq.jpg';
import naturaleza from '../assets/images/caracter/naturaleza.jpg';
import ninos from '../assets/images/caracter/parque.jpg';
import diversion from '../assets/images/caracter/canchas.jpg';
import agua from '../assets/images/caracter/piscina.jpg';
import comunidad from '../assets/images/caracter/salon.jpg';
import vehiculos from '../assets/images/caracter/parqueadero.jpg';


//comodidad - naturaleza - niños - diversion - agua - comunidad

const pruebita = () => {
    return (
        
        <body class="body-color">
            <div class="body-inner">


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

                <section id="sponsors" class="ts-sponsors sponsors-border">
                    <div class="container">
                        <div class="row sponsors-wrap">
                        <div class="col-md">
                            <a href="#aaa" class="sponsors-logo">
                                <img class="img-fluid" src="../assets/images/sponsors/familia.png" alt=""/>
                            </a>
                        </div>
                        <div class="col-md">
                            <a href="#aaa" class="sponsors-logo">
                                <img class="img-fluid" src="../assets/images/sponsors/comodidad.png" alt=""/>
                            </a>
                        </div>
                        <div class="col-md">
                            <a href="#aaa" class="sponsors-logo">
                                <img class="img-fluid" src="../assets/images/sponsors/urbano.png" alt=""/>
                            </a>
                        </div>
                        <div class="col-md">
                            <a href="#aaa" class="sponsors-logo">
                                <img class="img-fluid" src="../assets/images/sponsors/diversion.png" alt=""/>
                            </a>
                        </div>
                        <div class="col-md">
                            <a href="#aaa" class="sponsors-logo">
                                <img class="img-fluid" src="../assets/images/sponsors/naturaleza.png" alt=""/>
                            </a>
                        </div>
                        </div>
                    </div>
                </section>


                <section id="about" class="ts-intro event-intro">
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
                                <i class="icon-speaker"></i>
                                <h3 class="ts-title">Comodidad Pura</h3>
                                <p>
                                    Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-intro-text">
                                <i class="icon-people"></i>
                                <h3 class="ts-title">Buenas Personas</h3>
                                <p>
                                    Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="single-intro-text">
                                <i class="icon-fun"></i>
                                <h3 class="ts-title">Diversión Pura</h3>
                                <p>
                                    Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
                                </p>
                            </div>
                        </div>

                        </div>
                    </div>

                </section>



                <section id="ts-speakers" class="ts-speakers">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h2 class="section-title white text-center">
                                <span>Conece sus</span>
                                Beneficios
                            </h2>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={comodidad} alt=""/>
                                    <a href="#aaa" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Comodidad</a></h3>
                                    <p>
                                    Habitaciones
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={comida} alt=""/>
                                    <a href="#aaa"  class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Comida Y Fiesta</a></h3>
                                    <p>
                                    Salon BBQ
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="600ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={naturaleza} alt=""/>
                                    <a href="#aaa" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Naturaleza</a></h3>
                                    <p>
                                    Zonas Verdes
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={ninos} alt=""/>
                                    <a href="#aaa" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Niños y Niñas</a></h3>
                                    <p>
                                    Parques Infantiles
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={diversion} alt=""/>
                                    <a href="#aaa" class="view-speaker  ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Diversión</a></h3>
                                    <p>
                                    Deportes
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="900ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={agua} alt=""/>
                                    <a href="#aaa" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Agua y Más </a></h3>
                                    <p>
                                    Piscina
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1000ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={comunidad} alt=""/>
                                    <a href="#aaa" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Comunidad </a></h3>
                                    <p>
                                    Salon Social
                                    </p>
                                </div>
                            </div>

                        </div> 

                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1100ms">
                            <div class="ts-speaker white-text">
                                <div class="speaker-img">
                                    <img class="img-fluid" src={vehiculos} alt=""/>
                                    <a href="#popup_8" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                                                <i class="icon icon-plus"></i>
                                            </a>
                                </div>
                                <div class="ts-speaker-info">
                                    <h3 class="ts-title"><a href="#aaa">Vehículos </a></h3>
                                    <p>
                                    Parqueadero
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>


                    <div class="speaker-shap">
                        <img class="shap1" src="../assets/images/shap/home_speaker_memphis1.png" alt=""/>
                        <img class="shap2" src="../assets/images/shap/home_speaker_memphis2.png" alt=""/>
                    </div>

                
                </section>


            


                <div class="footer-area">
            
                    <footer class="ts-footer ts-footer-item">
                        <div class="container">
                        <div class="row footer-border">
                            <div class="col-lg-6">


                                <div class="footer-menu mb-30">
                                    <ul>
                                    <li><a href="#aaa">Articulos</a></li>
                                    <li><a href="#aaa">Caracteristicas</a></li>
                                    <li><a href="#aaa">Beneficios</a></li>
                                    <li><a href="#aaa">Contacto</a></li>

                                    </ul>
                                </div>

                                <div class="ts-footer-social">
                                    <ul>
                                    <li>
                                        <a href="#aaa"><i class="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#aaa"><i class="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#aaa"><i class="fa fa-google-plus"></i></a>
                                    </li>
                                    <li>
                                        <a href="#aaa"><i class="fa fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="#aaa"><i class="fa fa-instagram"></i></a>
                                    </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="col-lg-6">
                                
                                <div class="copyright-text text-right">
                                    <p>Copyright &copy; 2021 <a href="index.html">UTP G7</a> - Todos Los Derechos Reservados.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </footer>

                    

                </div>

            </div>

            </body>
    )
}

export default pruebita
