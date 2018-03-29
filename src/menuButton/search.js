import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Jumbotron, FormGroup, Col, } from 'reactstrap';
import axios from 'axios';
import Menubuttons from './menuButtons';
import ForkButton from '../forkButton/forkButton';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            closeAll: false,
            query: '',
            results: [],
            ingredients: '',
            searchResults: [],
        };
        this.search = this.search.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.returnRecipeList = this.returnRecipeList.bind(this);
    }

    search() {
        axios.post('/searchRecipe', { ingredients: this.state.query }).then((result) => {
            if (result.data.message) {
                this.props.setNote("No recipe found", "warning", this.state.isNotificationOpen);
                this.props.closeModal();
            } else {
                this.setState ({
                    searchResults: result.data,
                })
            }
        })
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }
    returnRecipeList() {
        return this.state.searchResults.map((value, i) => {
            return (
                <div key={i}>
                    <Jumbotron>
                        <h1 className="display">{this.state.searchResults[i].title}</h1>
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
                                    {this.state.searchResults[i].ingredients.map((value, x) => {
                                        return (
                                            <li key={x}>{this.state.searchResults[i].ingredients[x]}</li>
                                        )
                                    })}
                                </ul>
                            </Col>
                            <Col className="recipe">
                                <ol className="lead">
                                    {this.state.searchResults[i].process.map((value, y) => {
                                        return (
                                            <li key={y}>{this.state.searchResults[i].process[y]}</li>
                                        )
                                    })}
                                </ol>
                            </Col>
                        </FormGroup>
                        <ForkButton forkedRecipe={this.state.searchResults[i]} setNote={this.props.setNote} closeModal={this.props.closeModal} />
                    </Jumbotron>
                </div>
            )
        })
    }
    render() {
        return (
            <div>

                <div id="inputFieldsSearch">
                    <input
                        value={this.state.query}
                        placeholder="Search"
                        onChange={this.handleInputChange}
                    />
                    <Button onClick={this.search}>search</Button>
                </div>
                {this.returnRecipeList()}

            </div>

        )
    }
}

