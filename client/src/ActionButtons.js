import React from 'react';
import './App.css';
import { Button, Table, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class Actions extends React.Component {
    render() {
        return(
            <div className="actionsBtn">
                <div><Button color="primary">Editar</Button></div>
                <div><Button color="primary">Eliminar</Button></div>
            </div>            
        );
    }
}

export default Actions;