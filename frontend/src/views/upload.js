import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import HeaderAdmin from '../components/Header'
import axios from 'axios';

//componentes
//import Header from '../components/Header'
//import Footer from '../components/Footer'




export default class CreateStudent extends Component {
    onSubmit(e) {
        e.preventDefault()
    
        const apartamentObject = {
            name: this.state.name,
            description: this.state.description,
            price: this.price,
            phone: this.phone,
        };
    
        axios.post('http://localhost:5000/upload', apartamentObject)
            .then(res => console.log(res.data));
    
        this.setState({
            name: '',
            description: '',
            price: '',
            phone: '',
        });
    }
    render(){
        return (
            <div>
                <HeaderAdmin />
                <Form className="container" action="/upload" method="post">
                    <div className="d-flex flex-column">
                        <input type="text" name="name" placeholder="Nombre"></input>
                        <input type="text" name="description" placeholder="Description"></input>
                        <input type="text" name="price" placeholder="Precio"></input>
                        <input type="text" name="phone" placeholder="Telefono"></input>
    
                        <input type="file" name="image"></input>
                    </div>
                    <button class="btn btn-success btn-block">
                        Upload
                    </button>
                </Form>
            </div>
    
        )
    }

}