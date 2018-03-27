import React from 'react';
import ForkButton from '../forkButton/forkButton'
import axios from 'axios';
import { Jumbotron, FormGroup, Col, Button } from 'reactstrap';
import EditButton from './editButton'

export default class ViewForks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeToEdit: [],
            ingredient: [],
            title: "",

        }
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange = (event) => {
        this.setState({
            title: (event.target.value)
        });
      }
    

    // handleIngredientChange(i, event) {
    //     this.state.ingredient[i] = event.target.value;
    //     // this.setState({ ingredient });
    // }

    renderRecipes() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display"><input type="text" value={this.props.editFork.title} onChange={this.handleTitleChange}></input></h1>
                    <FormGroup row>
                        <Col>
                            <h2 className="colHeader">Ingredients:</h2>
                        </Col>
                        <Col>
                            <h2 className="colHeader">Process:</h2>
                        </Col>
                    </FormGroup>
                    <FormGroup className="row2" row>
                        <Col className="recipe">
                            <ul className="lead">
                                {this.props.editFork.ingredients.map((value, x) => {
                                    return (
                                        <li key={x}><input type="text" value={this.props.editFork.ingredients[x]} onChange={this.handleIngredientChange}></input></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col className="recipe">
                            <ol className="lead">
                                {this.props.editFork.process.map((value, y) => {
                                    return (
                                        <li key={y}><input type="text" value={this.props.editFork.process[y]}></input></li>
                                    )
                                })}
                            </ol>
                        </Col>
                    </FormGroup>
                    //save button?
                </Jumbotron>
            </div>
    
    )}

render(){
    return (
        <div>
            {this.renderRecipes()}
        </div>
    )
}

}