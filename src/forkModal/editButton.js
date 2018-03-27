import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class EditButton extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Button onClick={this.props.onEditClick(this.props.recipeToEdit)}>Edit</Button>
            </div>
        )
    }
}