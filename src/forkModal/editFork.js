import React from 'react';
import ForkButton from '../forkButton/forkButton'
import axios from 'axios';
import { Jumbotron, FormGroup, Col, Button, Input, Form, Label } from 'reactstrap';
import EditButton from './editButton'
import Menubuttons from '../menuButton/menuButtons.js';


export default class ViewForks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.editFork._id,
            process: this.props.editFork.process,
            ingredients: this.props.editFork.ingredients,
            title: this.props.editFork.title,
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
        this.handleProcessChange = this.handleProcessChange.bind(this);
        this.saveFork = this.saveFork.bind(this);


    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleIngredientsChange(x, event) {
        let ingredients = [...this.state.ingredients];
        ingredients[x] = event.target.value;
        this.setState({ ingredients });
    }

    handleProcessChange(y, event) {
        let process = [...this.state.process];
        process[y] = event.target.value;
        this.setState({ process });
    }

    saveFork() {
        axios.post('/saveFork', { title: this.state.title, ingredients: this.state.ingredients, process: this.state.process, _id: this.state._id }).then((result) => {
            this.setState({
                modalNotificationMessage: result.data.message
            });
            this.props.setNote(result.data.message, "warning", this.state.isNotificationOpen);
            this.props.closeModal();
        })
    }

    renderRecipes() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display"><input type="text" value={this.state.title} onChange={this.handleTitleChange}></input></h1>
                    <Form>
                        <FormGroup>
                            <Label for="ingredients">Ingredients:</Label>
                                <ul className="lead" id="ingredients">
                                    {this.props.editFork.ingredients.map((value, x) => {
                                        return (
                                            <li key={x}><input type="text" value={this.state.ingredients[x]} onChange={this.handleIngredientsChange.bind(this, x)}></input></li>
                                        )
                                    })}
                                </ul>
                        </FormGroup>
                        <FormGroup>
                            <Label for="process">Process:</Label>
                                <ol className="lead" id="process">
                                    {this.props.editFork.process.map((value, y) => {
                                        return (
                                            <li key={y}><input type="text" value={this.state.process[y]} onChange={this.handleProcessChange.bind(this, y)}></input></li>
                                        )
                                    })}
                                </ol>
                        </FormGroup>
                        <Button onClick={this.saveFork}>Save</Button>
                    </Form>
                </Jumbotron>
            </div>

        )
    }

    render() {
        return (
            <div>
                {this.renderRecipes()}
            </div>
        )
    }

}