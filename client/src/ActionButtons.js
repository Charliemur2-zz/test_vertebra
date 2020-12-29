import React from 'react';
import './App.css';
import { Button } from 'reactstrap';

class Actions extends React.Component {
    render() {
        return(
            <div>
                <div><Button color="primary">Editar</Button></div>
                <div><Button color="primary">Eliminar</Button></div>
            </div>            
        );
    }
}

export default Actions;