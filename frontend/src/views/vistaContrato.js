import React from 'react'

//componentes
import Header from '../components/Header'
//import Footer from '../components/Footer'

import logo from '../assets/images/logos/logo_utpg7.png';
import logo_admin from '../assets/images/logos/admin_arriendos.png';

const vistaContrato = () => {
    return (
        
        <body class="body-color">
            <Header/>
            <div class="contenedor_soli">
                <img class="admin_logo" src={logo_admin} alt=""/>

                <hr class="border"/>

                <img class="form_logo" src={logo} alt=""/>

                <form action method="POST" class="formulario">
                <div class="infomacion">Información General</div>
                    <div class="row form-group">
                        
                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Nombres y apellidos:</label><br/>
                            <i class="icono izquierda fa fa-user-circle-o"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Nombres y apellidos completos" maxlength="255" v-model="student.name" required/>
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Tipo de Documento:</label><br/>
                            <i class="icono izquierda far fa-address-card"></i><select name="" id="" class="selector" v-model="student.T_Documento" required>
                                <option value="Cédula de Ciudadania">C.C</option>
                                <option value="Registro Civil">R.C</option>
                                <option value="Tarjeta de Identidad">T.I</option>
                                <option value="Cédula de Extranjería">C.E</option>
                                <option value="Visa">Visa</option>
                                <option value="Ninguno">Ninguno</option>
                            </select>
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Número de Identidad:</label><br/>
                            <i class="icono izquierda fas fa-fingerprint"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Número de Identidad" maxlength="255" v-model="student.N_Identidad" required/>
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Nacionalidad:</label><br/>
                            <i class="icono izquierda fas fa-globe-americas"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Nacionalidad" maxlength="255" v-model="student.Nacionalidad" required/>
                        </div>
                        
                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Lugar de Nacimiento:</label><br/>
                            <i class="icono izquierda fas fa-globe-americas"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Lugar de Nacimiento:" maxlength="255" v-model="student.L_Nacimiento" required/>
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Fecha de Nacimiento:</label><br/>
                            <i class="icono izquierda fas fa-birthday-cake"></i><input type="date" id="entidad"  name="data[entidad]" class="selector input-sm" placeholder="Nacionalidad" maxlength="255" v-model="student.fecha" required/>
                        </div>
                        
                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Edad:</label><br/>
                            <i class="icono izquierda far fa-calendar-alt"></i><input type="number" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Edad:" maxlength="3" v-model="student.Edad" required/>
                        </div>

                        <div class="form-group col-md-4">
                            <label class="control-label">Género</label><br/>
                            <i class="icono izquierda fas fa-venus-mars"></i><input type="radio" name="zona" value="Hombre" v-model="student.Genero" required/> Hombre 
                            <input type="radio" name="zona" value="Mujer" v-model="student.Genero"/> Mujer 
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Correo:</label><br/>
                            <i class="icono izquierda fas fa-envelope"></i><input type="email" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Correo:" maxlength="255" v-model="student.email" required/>
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Teléfono:</label><br/>
                            <i class="icono izquierda fas fa-phone-volume"></i><input type="number" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Teléfono:" maxlength="10" v-model="student.phone" required/>
                        </div>
                    </div>
                    <div class="infomacion">Información Laboral</div>
                    <div class="row form-group">
                        
                        
                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Grado de Escolaridad:</label><br/>
                            <i class="icono izquierda fas fa-graduation-cap"></i><select name="" id="" class="selector" v-model="student.Escolaridad" required>
                                <option value="Primaria">Primaria</option>
                                <option value="Bachillerato">Bachillerato</option>
                                <option value="Técnico">Técnico</option>
                                <option value="Técnologo">Técnologo</option>
                                <option value="Profesional">Profesional</option>
                                <option value="Postgrado">Postgrado</option>
                                <option value="Ninguno">Ninguno</option>
                            </select>
                        </div>

                        <div class="form-group col-md-4">
                            <label class="control-label">¿Trabaja Actualmente?</label><br/>
                            <i class="icono izquierda fas fa-briefcase"></i><input type="radio" name="zona" value="Si" v-model="student.Trabajo" required/> Si 
                            <input type="radio" name="zona" value="No" v-model="student.Trabajo"/> No 
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad">Ocupación:</label><br/>
                            <i class="icono izquierda fas fa-laptop-house"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Ocupación:" maxlength="255" v-model="student.Ocupacion" required/>
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="entidad" style={{display: 'inline', color: 'red'}}>* </label><label class="control-label" for="entidad">Nombre de la Empresa:</label><br/>
                            <i class="icono izquierda far fa-building"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Nombre de la empresa:" maxlength="255" v-model="student.N_Empresa" required/>
                        </div>

                    </div>
                    <div class="infomacion">Información Residencial y Económica</div>
                    <div class="row form-group">
                        

                        <div class="col-md-4">
                                <label class="control-label" for="entidad">País de Residencia:</label><br/>
                                <i class="icono izquierda fas fa-globe-americas"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="País de Residencia:" maxlength="255" v-model="student.Pais_Residencia" required/>
                            </div>

                            <div class="col-md-4">
                                <label class="control-label" for="entidad">Dpto de Residencia:</label><br/>
                                <i class="icono izquierda fas fa-globe-americas"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Departamento de Residencia:" maxlength="255" v-model="student.Dpto_Residencia" required/>
                            </div>

                            <div class="col-md-4">
                                <label class="control-label" for="entidad">Ciudad de Residencia:</label><br/>
                                <i class="icono izquierda fas fa-globe-americas"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Ciudad de Residencia:" maxlength="255" v-model="student.Ciu_Residencia" required/>
                            </div>

                            <div class="form-group col-md-4">
                                <label class="control-label">Zona de Ubicación</label><br/>
                                <i class="icono izquierda fas fa-map-marker-alt"></i><input type="radio" name="zona" value="Urbana" v-model="student.Z_Ubicacion" required/> Urbana 
                                <input type="radio" name="zona" value="Rural" v-model="student.Z_Ubicacion"/> Rural 
                            </div>

                            <div class="col-md-4">
                                <label class="control-label" for="entidad">Tipo de Vivienda:</label><br/>
                                <i class="icono izquierda fas fa-home"></i><select name="" id="" class="selector" v-model="student.T_Vivienda" required>
                                    <option value="Casa">Casa</option>
                                    <option value="Apartamento">Apartamento</option>
                                    <option value="Habitación">Habitación</option>
                                    <option value="Albergue">Albergue</option>
                                    <option value="Inquilinato">Inquilinato</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <label class="control-label" for="entidad">Dirección:</label><br/>
                                <i class="icono izquierda fas fa-home"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Dirección:" maxlength="255" v-model="student.Direccion" required/>
                            </div>

                            <div class="col-md-4">
                                <label class="control-label" for="entidad">Tendencia de Vivienda:</label><br/>
                                <i class="icono izquierda fas fa-home"></i><select name="" id="" class="selector" v-model="student.Tende_Vivienda" required>
                                    <option value="Propia">Propia</option>
                                    <option value="Arrendada">Arrendada</option>
                                    <option value="Familiar">Familiar</option>
                                    <option value="Posada">Posada</option>
                                    <option value="Asentamiento">Asentamiento</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div class="form-group col-md-4">
                                <label class="control-label">¿Tiene Cuenta Bancaria?</label><br/>
                                <i class="icono izquierda fas fa-dollar-sign"></i><input type="radio" name="zona" value="Si" v-model="student.Cue_Bancaria" required/> Si 
                                <input type="radio" name="zona" value="No" v-model="student.Cue_Bancaria"/> No 
                            </div>

                            <div class="col-md-4">
                                <label class="control-label" for="entidad" style={{display: 'inline', color: 'red'}}>* </label><label class="control-label" for="entidad">Cuenta Bancaria:</label><br/>
                                <i class="icono izquierda fas fa-dollar-sign"></i><input type="text" id="entidad"  name="data[entidad]" class="escribir input-sm" placeholder="Cuenta Bancaria:" maxlength="255" v-model="student.Cue_Bancaria_N" required/>
                            </div>

                    </div>

                    <div >
                        <button class="submit-btn">Solicitar</button>
                    </div><br/>
                    
                    <div class="col-md-12">
                        <label class="control-label" for="entidad" style={{display: 'inline', color: 'red'}}>* </label>
                        <label class="control-label" for="entidad">Poner "Ninguno" en caso de no tener respuesta</label>
                    </div>

                        <div class="errores">
                            <ul>

                            </ul>
                        </div>

                </form>

                <p class="texto-registrate">
                    Página principal
                    <router-link to="/"><a href="home_page.vue">Volver</a></router-link>
                </p>
            </div>
        </body>

    )
}

export default vistaContrato