import React from 'react';
import './menuButtons.css';
import Login from './login';
import CreateAcct from './createAcct';
import Search from './search';
import axios from 'axios';
import RecipeInputModal from '../recipeInputModal/recipeInputModal';
import RecipeListModal from '../recipeListModal/recipeListModal';
import Profile from '../profile.js';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ForkMenuButton from "./ForkMenuButton";
import ModalNotification from "./modalNotification";
import ProcessInput from '../processInput/processInput';

export default class Menubuttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      test: "test",
      selectedButtonLabel: " ",
      notificationMessage: " ",
      notificationColor: 'success',
      isNotificationOpen: false,
    };

    this.menuButtonLabels = [
      "Create Account",
      "Login",
      "Add New Recipe",
      "View Recipe",
      "Search"
    ]

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.mapLabelToComponent = this.mapLabelToComponent.bind(this);
    this.login = this.login.bind(this);
    this.setNote = this.setNote.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  setNote(message, color, isOpen) {
    this.setState({
      notificationMessage: message,
      notificationColor: color,
      isNotificationOpen: isOpen,
    })
  }

  closeAlert() {
    this.setState({
      isNotificationOpen: false
    })
  }

  login(userName, password) {
    return new Promise((resolve, reject) => {
      axios.post('/loginData', { userName, password }).then((result) => {
        resolve(result.data.message);
        localStorage.setItem('token', result.data.myToken);
      })
    })
  }

  mapLabelToComponent(label) {
    switch (label) {
      case "Create Account":
        return <CreateAcct closeModal={this.closeModal} login={this.login} setNote={this.setNote} />
      case "Login":
        return <Login closeModal={this.closeModal} login={this.login} setNote={this.setNote} />
      case "Add New Recipe":
        return <RecipeInputModal closeModal={this.closeModal} setNote={this.setNote} />
      case "View Recipe":
        return <RecipeListModal closeModal={this.closeModal} setNote={this.setNote}/>
      case "Search":
        return <Search closeModal={this.closeModal} setNote={this.setNote} />
    }
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  openModal(label) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      selectedButtonLabel: label
    })
  }

  render() {

    let component = this.mapLabelToComponent(this.state.selectedButtonLabel);
    let menuButtons = this.menuButtonLabels.map((l) => {
      return (
        <ForkMenuButton buttonLabel={l} openModal={this.openModal} />
      )
    });

    return (
      <div>
        <ModalNotification notificationColor={this.state.notificationColor} notificationMessage={this.state.notificationMessage} isNotificationOpen={this.state.isNotificationOpen} closeAlert={this.closeAlert} />
        <div className='buttons'>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.state.selectedButtonLabel}<Button color="secondary" onClick={this.closeModal}>Close</Button>
            </ModalHeader>
            <ModalBody>
              {component}
            </ModalBody>
          </Modal>
          <ButtonGroup>
            {menuButtons}
            < Profile classname="Profile" />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

