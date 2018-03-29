import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col
} from 'reactstrap';
import RecipeInput from '../recipeInput/recipeInput.js';
import axios from 'axios';
import MenuButtons from '../menuButton/menuButtons';
// var jwt = require('jsonwebtoken');

export default class ProcessInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            process: [] ,
            userName: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        var token = localStorage.getItem('token');
        axios.post('/getUser', {token}).then((result) => {
            this.setState({ userName: result.data });
        })
    }

    createUI() {
        return this.state.process.map((el, i) =>
            <div key={i}>
                <Form>
                    <FormGroup row>
                        <Col id="process">
                            <Input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} />
                        </Col>
                        <Col id="removeButton">
                            <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

    handleChange(i, event) {
        let process = [...this.state.process];
        process[i] = event.target.value;
        this.setState({ process });
    }

    addClick() {
        this.setState(prevState => ({ process: [...prevState.process, ''] }))
    }

    removeClick(i) {
        let process = [...this.state.process];
        process.splice(i, 1);
        this.setState({ process });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/submitRecipe', { 
            title: this.props.recipeTitle, 
            author: this.state.userName, 
            ingredients: this.props.ingredients, 
            process: this.state.process 
        }).then((result) => {
            this.props.setNote(result.data.message, "warning", this.state.isNotificationOpen);        
            this.props.closeModal();
        })
    }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            {this.createUI()}
            <Button type='button' onClick={this.addClick.bind(this)}>+ step</Button>
            <Button type="submit" value="Submit">submit</Button>
        </form>
    );
}
}
