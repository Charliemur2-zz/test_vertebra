import React from 'react';
import { Button, /*Dropdown, DropdownToggle, DropdownMenu, DropdownItem*/ } from 'reactstrap';
import Providers from './Providers';

class ElementBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        // bind methods to this
        this.toggleDiv = this.toggleDiv.bind(this);    
        
    }
    // method to show element table
    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: !show});
    }
    
    render(){
        return(
            <div>
                <Button color="secondary" onClick={this.toggleDiv}>Provedores</Button>{' '}
                {this.state.show && <Providers/>}
                <Button color="secondary">Productos</Button>{' '}
                <Button color="secondary">Tiendas</Button>{' '}
            </div>
        );
    }
}








/*const ElementBox = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    state = {
        divcontainer: false
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
            Elije un Elemento
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem text>Elementos</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Productos</DropdownItem>
            <DropdownItem>Provedores</DropdownItem>
            <DropdownItem>Tiendas</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}*/

export default ElementBox;

