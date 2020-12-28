import React from 'react';
import './App.css';
import { Button, Table, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Actions from './ActionButtons';

const providers =
    [{
        "id": 1,
        "Nit": 96,
        "Nombre": "Nader-Thompson",
        "Representante_Legal": "Ibby Pickwell",
        "Direccion": "81259 Sauthoff Junction"
      }, {
        "id": 2,
        "Nit": 33,
        "Nombre": "Lakin-Gutmann",
        "Representante_Legal": "Isahella Dyne",
        "Direccion": "15012 Grim Trail"
      }, {
        "id": 3,
        "Nit": 95,
        "Nombre": "Tillman Group",
        "Representante_Legal": "Michaella Landal",
        "Direccion": "92324 Arkansas Lane"
      }, {
        "id": 4,
        "Nit": 88,
        "Nombre": "Stamm-Christiansen",
        "Representante_Legal": "Bowie Colbourn",
        "Direccion": "587 Forest Run Center"
      }, {
        "id": 5,
        "Nit": 60,
        "Nombre": "Grady-Christiansen",
        "Representante_Legal": "Saw Rosenschein",
        "Direccion": "8661 Bowman Park"
      }]
class Providers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: providers 
    }
  }
  render(){
      return(
          <Container>
              <Button color="primary">Crear</Button>
              <br /> <br /> 
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nit</th>
                    <th>Nombre</th>
                    <th>Representante Legal</th>
                    <th>Direccion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((elemento) => (
                    <tr>
                      <td>{elemento.id}</td>
                      <td>{elemento.Nit}</td>
                      <td>{elemento.Nombre}</td>
                      <td>{elemento.Representante_Legal}</td>
                      <td>{elemento.Direccion}</td>
                      <td><Actions/></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
          </Container>
      );
  }
}


export default Providers;