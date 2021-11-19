import React, { Component } from "react";
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import SolicitudTable from '../components/TableSolicitudes';

//componentes
//import Header from '../components/Header'
//import Footer from '../components/Footer'
import logo from '../assets/images/logos/logo_utpg7.png';
import logo_admin from '../assets/images/logos/admin_arriendos.png';

export default class VistaAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contratos_arriendos: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/solicitud/')
          .then(res => {
            this.setState({
              contratos_arriendos: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      DataTable() {
        return this.state.contratos_arriendos.map((res, i) => {
          return <SolicitudTable obj={res} key={i} />;
        });
      }

    render(){

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
                    <Table striped bordered hover size="sm">
                                <thead className="bg-dark text-white">
                                    <tr >
                                        <th>Usuario</th>
                                        <th>Teléfono</th>
                                        <th>Correo</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
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
                            </Table>
                        </div>
                    </section>

                    <section>
                        <div className="titu_section">
                            <h2 className="text-center text-white">Solicitudes de Arriendos</h2>
                        </div>
                        <br />
                        <div>
                            <Table striped bordered hover size="sm">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Nombres</th>
                                        <th>Apellido</th>
                                        <th>Identificación</th>
                                        <th>Correo</th>
                                        <th>Teléfono</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {this.DataTable()}
                                </tbody>
                            </Table>
                    </div>
                </section>
            </div>
    
            <p class="texto-registrate">
                Página principa
            </p>
        </div>
    </body>
            
        )
    }
    
}