import React, { Component } from "react";
import axios from 'axios';

//componentes
import Header from '../components/Header'
//import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import logo from '../assets/images/logos/logo_utpg7.png';
import logo_admin from '../assets/images/logos/admin_arriendos.png';

export default class CreateSolicitud extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeSolicitudName = this.onChangeSolicitudName.bind(this);
        this.onChangeSolicitudLastName = this.onChangeSolicitudLastName.bind(this);
        this.onChangeSolicitudId = this.onChangeSolicitudId.bind(this);
        this.onChangeSolicitudEmail = this.onChangeSolicitudEmail.bind(this);
        this.onChangeSolicitudPhone = this.onChangeSolicitudPhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          lastName: '',
          id: '',
          email: '',
          phone: ''
        }
      }
    
      onChangeSolicitudName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeSolicitudLastName(e) {
        this.setState({ lastName: e.target.value })
      }
    
      onChangeSolicitudId(e) {
        this.setState({ id: e.target.value })
      }
      onChangeSolicitudEmail(e) {
        this.setState({ email: e.target.value })
      }
      onChangeSolicitudPhone(e) {
        this.setState({ phone: e.target.value })
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const solicitudObject = {
          name: this.state.name,
          lastName: this.state.lastName,
          id: this.state.id,
          email: this.state.email,
          phone: this.state.phone
        };
    
        axios.post('http://localhost:5000/solicitud/create', solicitudObject)
          .then(res => console.log(res.data));
    
        this.setState({
          name: '',
          lastName: '',
          id: '',
          email: '',
          phone: ''
        });
      }

render(){
    return (
        
        <body class="body-color">
            <Header/>
            <div class="contenedor_soli">
                <img class="admin_logo" src={logo_admin} alt=""/>

                <hr class="border"/>

                <img class="form_logo" src={logo} alt=""/>

                <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeSolicitudName} />
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeSolicitudLastName} />
        </Form.Group>

        <Form.Group controlId="Id">
          <Form.Label>Identificación</Form.Label>
          <Form.Control type="text" value={this.state.id} onChange={this.onChangeSolicitudId} />
        </Form.Group>

        <Form.Group controlId="Id">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="text" value={this.state.email} onChange={this.onChangeSolicitudEmail} />
        </Form.Group>

        <Form.Group controlId="Id">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeSolicitudPhone} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Solicitar
        </Button>
      </Form>

                <p class="texto-registrate">
                    Página principal
                    <router-link to="/"><a href="home_page.vue">Volver</a></router-link>
                </p>
            </div>
        </body>

    )

}
   
}