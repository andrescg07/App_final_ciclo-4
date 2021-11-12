import React from 'react'

//componentes
import Header from '../components/Header'
import Footer from '../components/Footer'

import logo from '../assets/images/logos/logo_utpg7.png';
import logo_admin from '../assets/images/logos/admin_arriendos.png';

const vistaLogin = () => {
    return (
        
        <body class="body-color">
            <Header/>
            <div class="contenedor">
            <img class="admin_logo" src={logo_admin} alt=""/>
                <hr class="border"/>

                <img class="form_logo" src={logo} alt=""/>

                <form action="" method="POST" class="formulario" name="login">

                    <div class="form-group">

                        <i class="icono izquierda fa fa-user-circle-o"></i><input type="text" name="usuario" class="usuario" placeholder="Usuario"/>

                    </div>

                    <div class="form-group">

                        <i class="icono izquierda fa fa-lock" aria-hidden="true"></i><input type="password" name="password" class="password_btn" placeholder="Contraseña"/>

                    </div>

                    <div >
                        <i class="submit-btn" onclick="login.submit()">Ingresar</i>
                    </div>
                    

                        <div class="errores">
                            <ul>

                            </ul>
                        </div>

                </form>
                <p class="texto-registrate">
                    ¿Quieres tener una cuenta?
                    <router-link to="/registro"><a href="Registrarse.vue">Registrarse</a></router-link>
                </p>

                <p class="texto-registrate">
                    Página principal
                    <router-link to="/"><a href="home_page.vue">Volver</a></router-link>
                </p>
            </div>

            <Footer/>
        </body>
    )
}

export default vistaLogin