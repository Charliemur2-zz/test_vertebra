import React from 'react';
import './App.css';
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Button } from 'reactstrap';

class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalEdit: false,
            form: this.props.form 
        }
       /*  this.handleChange = this.handleChange.bind(this); */
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        /* this.insertElement = this.insertElement.bind(this);
 */
    }
    /* handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    } */
    showForm = () => {
        this.setState({ modalEdit: true});
    }
    hideForm = () => {
        this.setState({ modalEdit: false});
    }
    i/* nsertElement = () => {
        let newElement = {...this.state.form};
        newElement.id = this.props.data.length + 1;
        let newData = this.props.data;
        newData.push(newElement);
        this.setState({ data: newData, modalEdit: false});
    }  */
    render() {
        return(
            <div>
                <Button color="primary" onClick={this.showForm}>Editar</Button>
                    {this.state.show && <Edit/>}
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div>
                            <h3>Inserte provedor</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" />
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

export default Edit;