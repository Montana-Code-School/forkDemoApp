import React from 'react';
import { Button, ButtonDropdown, DropdownItem } from 'reactstrap';

export default class ForkMenuButton extends React.Component {

    constructor(props){
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    openModal(){
        this.props.openModal(this.props.buttonLabel)
    }

    render(){
        return (
            <DropdownItem onClick={this.openModal}>{this.props.buttonLabel}</DropdownItem>
        )
    }
}