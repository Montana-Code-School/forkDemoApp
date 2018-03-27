import React from 'react';
import ForkButton from '../forkButton/forkButton'
import axios from 'axios';
import { Jumbotron, FormGroup, Col, Button } from 'reactstrap';
import EditButton from './editButton'

export default class ViewForks extends React.Component {
    constructor(){
        super();
        this.state = {
            recipeToEdit: [],
        }
    }

    renderRecipes() {
        if (this.props.myForks == undefined) {
            debugger;
            return ("You better start forking!")
        } else {
            return this.props.myForks.map((value, i) => {
                return (
                    <div key={i}>
                        <Jumbotron>
                            <h1 className="display">{this.props.myForks[i].title}</h1>
                            <FormGroup className="row1" row>
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
                                        {this.props.myForks[i].ingredients.map((value, x) => {
                                            return (
                                                <li key={x}>{this.props.myForks[i].ingredients[x]}</li>
                                            )
                                        })}
                                    </ul>
                                </Col>
                                <Col className="recipe">
                                    <ol className="lead">
                                        {this.props.myForks[i].process.map((value, y) => {
                                            return (
                                                <li key={y}>{this.props.myForks[i].process[y]}</li>
                                            )
                                        })}
                                    </ol>
                                </Col>
                            </FormGroup>
                            <EditButton onEditClick={this.props.onEditClick} recipeToEdit={this.state.recipeToEdit[i]} />
                        </Jumbotron>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                {this.renderRecipes()}
            </div>
        )
    }

}