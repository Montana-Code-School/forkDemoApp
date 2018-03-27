import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ForkModal from './forkModal.js';

export default class EditButton extends Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.editRecipe(this.props.recipeToEdit);
    }

    render() {
        console.log(this.props.recipeToEdit);
        return (
            <div>
                <Button onClick={this.clickHandler}>Edit</Button>
            </div>
        )
    }
}
