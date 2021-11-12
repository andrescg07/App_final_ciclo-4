import React from 'react'

//componentes
//import Header from '../components/Header'
//import Footer from '../components/Footer'
import logo from '../assets/images/logos/logo_utpg7.png';
import logo_admin from '../assets/images/logos/admin_arriendos.png';

const vistaAdmin = () => {
    return (
        
        <body class="">
	<div class="contenedor1" style={{width: '90%', margin: 'auto'}}>
        <img class="admin_logo" src={{logo_admin}} alt=""/>

		<hr class="border"/>

        <img class="form_logo" src={{logo}} alt=""/>

        <div>
            <section>
                <div class="titu_section">Administradores</div>
                <br/>
                <div>
                    <table class="table table-striped"> 
                        <thead class="thead-dark"> 
                            <tr> 
                            <th>Usuario</th>  
                            <th>Teléfono</th>
                            <th>Correo</th> 
                            <th>Estado</th> 
                            </tr> 
                        </thead> 
                        <tbody> 
                            <tr> 
                            <td>Danny Campos</td> 
                            <td>3012103099</td> 
                            <td>juliethcamposbustos@gmail.com</td> 
                            <td>Activo</td> 
                            </tr>
                            <tr> 
                            <td>Andrés Camacho </td> 
                            <td>3206868818</td> 
                            <td>sochauz07@gmail.com</td> 
                            <td>Activo</td> 
                            </tr>
                            <tr> 
                            <td>Edy Santiago Moran Chamorro</td> 
                            <td>3175344903</td> 
                            <td>moransantiago409@hotmail.com</td> 
                            <td>Activo</td> 
                            </tr>
                            <tr> 
                            <td>Jefferson Henao</td> 
                            <td>3218791977</td> 
                            <td>jefferhenao911@outlook.com</td> 
                            <td>Activo</td> 
                            </tr>
                            <tr> 
                            <td>William Sabi</td> 
                            <td>3112492225</td> 
                            <td>sochauz07@gmail.com</td> 
                            <td>Activo</td> 
                            </tr>
                        </tbody> 
                    </table>
                </div>
            </section>

            <section>
                <div class="titu_section">
                    Solicitudes de Arriendos
                </div>
                <br/>
                <div>
                    <table class="table table-striped"> 
                        <thead class="thead-dark"> 
                            <tr> 
                              <th>Nombre</th> 
                              <th>N° Cédula</th> 
                              <th>Teléfono</th> 
                              <th>Acción</th> 
                            </tr> 
                        </thead> 
                        <tbody> 
                            <tr v-for="student in Students" > 
                              <td>algo</td> 
                              <td>algo</td> 
                              <td>algo</td>
  
                              <td> 
                                
                                <div class="btn btn-success">Ver</div>
                                <div class="btn btn-success">Edit</div>
                                <button class="btn btn-danger">Delete</button>
                              </td> 
                            </tr> 
                        </tbody> 
                    </table>
                </div>
            </section>
        </div>

        <p class="texto-registrate">
			Página principal
			<router-link to="/"><a href="home_page.vue">Volver</a></router-link>
		</p>
	</div>
</body>
        
    )
}

export default vistaAdmin