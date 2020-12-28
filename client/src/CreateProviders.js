import React from 'react';
import './App.css';
import { Button, Table, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap';

class CreateProvider extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal>
                <ModalHeader>
                    <div>
                        <h3>Inserte provedor</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input className="form-control" readOnly type="text" value={this.props.data.length + 1}/>
                    </FormGroup>
                    <FormGroup>
                        <label>Nit:</label>
                        <input className="form-control" name="Nit" type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <label>Nombre:</label>
                        <input className="form-control" name="Nombre" type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <label>Representante Legal:</label>
                        <input className="form-control" name="Reprersentante_Legal" type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <label>Direccion:</label>
                        <input className="form-control" name="Direccion" type="text"/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        );
    }
}

export default CreateProvider;_