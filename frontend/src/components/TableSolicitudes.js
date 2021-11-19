import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class SolicitudTable extends Component {

    constructor(props) {
        super(props);
        this.deleteSolicitud = this.deleteSolicitud.bind(this);
    }

    deleteSolicitud() {
        axios.delete('http://localhost:5000/solicitud/delete/' + this.props.obj._id)
            .then((res) => {
                console.log('Solicitud successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>
                    <Link className="edit-link" to={"/edit/" + this.props.obj._id}>
                        Editar
                    </Link>
                    <Button onClick={this.deleteSolicitud} size="sm" variant="danger">Eliminar</Button>
                </td>
            </tr>
        );
    }
}