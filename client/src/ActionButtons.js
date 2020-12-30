import React from 'react';
import './App.css';
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Button } from 'reactstrap';

class Edit extends React.Component {
    // constructor
    constructor(props){
        super(props);
        this.state = {
            modalEdit: false,
            form: this.props.form 
        }
        console.log(this.props)
        console.log(this.props.data)
        // bind methods to this
       /*  this.handleChange = this.handleChange.bind(this); */
        this.showFormEdit = this.showFormEdit.bind(this);
        this.hideFormEdit = this.hideFormEdit.bind(this);
        /* this.insertElement = this.insertElement.bind(this);
 */
    }
    // handleChange methos to show change values
    /* handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    } */
    // method to show the modal form
    showFormEdit = () => {
        this.setState({ modalEdit: true});
    }
    // methos to hide modal form
    hideFormEdit = () => {
        this.setState({ modalEdit: false});
    }
    /* insertElement = () => {
        let newElement = {...this.state.form};
        newElement.id = this.props.data.length + 1;
        let newData = this.props.data;
        newData.push(newElement);
        this.setState({ data: newData, modalEdit: false});
    }  */
    render() {
        return(
            <div>
                {/* Button Edit */}
                <Button color="primary" onClick={this.showFormEdit}>Editar</Button>
                    {this.state.show && <Edit/>}
                {/* modal form to edit */}
                <Modal isOpen={this.state.modalEdit}>
                    <ModalHeader>
                        <div>
                            <h3>Editar provedor</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.props.data.id}/>
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
                        <Button color="success" >Editar</Button>{' '}
                        <Button color="danger" onClick={this.hideFormEdit} >Cancelar</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>            
        );
    }
}

export default Edit;