import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ElementBox = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

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
}

export default ElementBox;

