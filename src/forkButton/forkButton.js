import React, { Component } from 'react';
import { Button, Jumbotron, FormGroup, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';
import Menubuttons from '../menuButton/menuButtons';

export default class ForkButton extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.forkClick = this.forkClick.bind(this);
    }

    forkClick() {
        var token = localStorage.getItem('token');
        axios.post('/forkRecipe', {
            title: this.props.forkedRecipe.title,
            ingredients: this.props.forkedRecipe.ingredients,
            process: this.props.forkedRecipe.process,
            token: token,
        }).then((result) => {
            this.props.setNote(result.data.message, "warning", true);
            this.props.closeModal();
            
        })
    }

    closeForkModal() {
        this.setState({
            isForkModalOpen: false,
        });
    }

    openForkModal() {
        this.setState({
            isForkModalOpen: true,
        });
    }

    renderModal() {
            var component = (
                <div>
                    
                </div>
            )
        }

    render() {
        return (
                <div>
                    <Button color="primary" onClick={this.forkClick}>Fork!</Button>
                </div>
        );
    };
};