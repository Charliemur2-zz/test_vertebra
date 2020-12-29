import React from 'react';
import './App.css';
import { Table, Container, Button } from 'reactstrap';
import CreateProvider from './CreateProviders';
import Edit from './ActionButtons';

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
      data: providers,
      form: {
        ID: '',
        Nit: '',
        Nombre: '',
        Representante_Legal: '',
        Direccion: ''
      }
    }
    /* this.deleteElement = this.deleteElement.bind(this); */
  }
  deleteElement = (singledata) => {
    let option = window.confirm("esta seguro de eliminar el registro" + singledata.id);
    if (option){
      let counter = 0;
      let list = this.state.data;
      list.forEach((item) => {
        if (item.id === singledata.id) {
          list.splice(counter, 1);
        }
        counter++;
      });
      this.setState({data: list});
    }
  }
  render(){
      return(
          <Container>
              <CreateProvider data={this.state.data} form={this.state.form}/>
              <br /> <br /> 
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nit</th>
                    <th>Nombre</th>
                    <th>Representante Legal</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
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
                      <td><Edit data={this.state.data} form={this.state.form}/></td>
                      <td><Button onClick={this.deleteElement.bind(null, elemento)}>Eliminar</Button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
          </Container>
      );
  }
}


export default Providers;