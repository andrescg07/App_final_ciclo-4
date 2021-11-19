import React, {Component} from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import imagen from '../assets/habitacion1.jpg'
import Card from 'react-bootstrap/Card'

export default class CardResource extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            apartaments : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/apartament/')
          .then(res => {
            this.setState({
              apartaments: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }


    render(){
        return (
            <div class="col-lg-4 mx-auto">
            <Card className="card_dpta" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{this.props.obj.name}</Card.Title>
                    <Card.Text>
                    {this.props.obj.description}
                    </Card.Text>
                    <Card.Title>Precio: {this.props.obj.price}</Card.Title>
                    <Button className="ver_dpta" variant="primary">Solicitar</Button>
                </Card.Body>
            </Card>
        </div>
        
          )
    }
}