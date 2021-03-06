import React from 'react';
import ForkButton from '../forkButton/forkButton'
import axios from 'axios';
import { Jumbotron, FormGroup, Col, Button } from 'reactstrap';
import ViewForks from './viewForks'
import EditFork from './editFork'
import Menubuttons from '../menuButton/menuButtons.js';


export default class ForkModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myForks: [],
            renderContent: "view",
            editFork: [],
        }
        this.editRecipe = this.editRecipe.bind(this);
    }

    editRecipe(recipes) {
        this.setState({
            editFork: recipes,
            renderContent: "edit",
        })
    }

    onEditClick(recipe) {
        this.setState({
            user: recipe.author,
            titleToEdit: recipe.title,
            ingredientsToEdit: recipe.ingredients,
            processToEdit: recipe.proccess,
            renderContent: "edit"
        })
    }

    componentDidMount() {
        var token = localStorage.getItem('token');
        axios.post('/myForks', { token }).then((result) => {
            this.setState({
                myForks: result.data.recipes,
                user: result.data.user
            });
        })
    }

    render() {
        if (this.state.renderContent  === "view") {
        return (
            <div>
                <ViewForks editRecipe={this.editRecipe} myForks={this.state.myForks} user={this.state.user} />
            </div>
        )
    } else {
        return (
            <div>
                <EditFork editFork={this.state.editFork} closeModal={this.props.closeModal} setNote={this.props.setNote} />
            </div>
        )
    }
    }
}