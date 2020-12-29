import React from 'react';
import './App.css';
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Button } from 'reactstrap';

class CreateProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalInsertar: false 
        }
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }
    showForm = () => {
        this.setState({ modalInsertar: true});
    }
    hideForm = () => {
        this.setState({ modalInsertar: false});
    }
    render(){
        return(
            <div>
                <Button color="primary" onClick={this.showForm}>Crear</Button>
                    {this.state.show && <CreateProvider/>}
                <Modal isOpen={this.state.modalInsertar}>
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
                        <Button color="success">Guardar</Button>{' '}
                        <Button color="danger" onClick={this.hideForm}>Cancelar</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateProvider;