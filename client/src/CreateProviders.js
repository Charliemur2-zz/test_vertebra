import React from 'react';
import './App.css';
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Button } from 'reactstrap';

class CreateProvider extends React.Component {
    // Constructor
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            modalInsertar: false,
            form: this.props.form 
        }
        // bind methods to this
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.insertElement = this.insertElement.bind(this);

    }
    // handleChange methos to show change values
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
     // method to show the modal form
    showForm = () => {
        this.setState({ modalInsertar: true});
    }
    // method to hide modal form
    hideForm = () => {
        this.setState({ modalInsertar: false});
    }
    // method to insert new element in table
    insertElement = () => {
        let newElement = {...this.state.form};
        newElement.id = this.props.data.length + 1;
        let newData = this.props.data;
        newData.push(newElement);
        this.setState({ data: newData, modalInsertar: false});

    }
    render(){
        return(
            <div>
                {/* Button to create new item */}
                <Button color="primary" onClick={this.showForm}>Crear</Button>
                    {this.state.show && <CreateProvider/>}
                {/* Modal form to insert new item */}
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
                            <input className="form-control" name="Nit" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input className="form-control" name="Nombre" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Representante Legal:</label>
                            <input className="form-control" name="Representante_Legal" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Direccion:</label>
                            <input className="form-control" name="Direccion" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.insertElement}>Guardar</Button>{' '}
                        <Button color="danger" onClick={this.hideForm}>Cancelar</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateProvider;