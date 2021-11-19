import React, { Component } from "react";
import axios from 'axios';

//componentes
import Header from '../components/Header'
//import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import logo from '../assets/images/logos/logo_utpg7.png';
import logo_admin from '../assets/images/logos/admin_arriendos.png';

export default class CreateApartament extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeApartamentName = this.onChangeApartamentName.bind(this);
        this.onChangeApartamentDescription = this.onChangeApartamentDescription.bind(this);
        this.onChangeApartamentPrice = this.onChangeApartamentPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          description: '',
          price: ''
        }
      }
    
      onChangeApartamentName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeApartamentDescription(e) {
        this.setState({ description: e.target.value })
      }
    
      onChangeApartamentPrice(e) {
        this.setState({ price: e.target.value })
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const apartamentObject = {
          name: this.state.name,
          description: this.state.description,
          price: this.state.price
        };
    
        axios.post('http://localhost:5000/apartament/create', apartamentObject)
          .then(res => console.log(res.data));
    
        this.setState({
          name: '',
          description: '',
          price: ''
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
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeApartamentName} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control  type="text" value={this.state.description} onChange={this.onChangeApartamentDescription} />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" value={this.state.price} onChange={this.onChangeApartamentPrice} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Crear Apartamento
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