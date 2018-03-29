import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import Menubuttons from './menuButtons';

export default class CreateAcct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      closeAll: false,
      userName: '',
      password: '',
      password2: '',
      passwordType: "password",
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPassword2Change = this.onPassword2Change.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.createAcct = this.createAcct.bind(this);
  }

  createAcct() {
    if (this.state.password === this.state.password2) {
      axios.post('/createAcctData', { userName: this.state.userName, password: this.state.password }).then((result) => {
        this.setState({
          style: {
            color: "black"
          },
          modalNotificationMessage: result.data.message,
          closeAll: false,
          userData: {
            userName: '',
            password: ''
          }
        });
        this.props.setNote(result.data.message, "warning", this.state.isNotificationOpen);        
        this.props.closeModal();
        this.props.login(this.state.userName, this.state.password).then((result) => {
        })
      })
    } else {

      this.props.setNote("Passwords must match", "warning", this.state.isNotificationOpen);  
      this.props.closeModal();
    }}

    onUserChange = (e) => {
      this.setState({
        userName: (e.target.value)
      });
    }

    onPasswordChange = (e) => {
      this.setState({
        password: (e.target.value)
      });
    }

    onPassword2Change = (e) => {
      this.setState({
        password2: (e.target.value)
      });
    }

    showPassword() {
      if (this.state.passwordType === "password" || this.state.passwordType === "password2") {
        this.setState({
          passwordType: "text",
        })
      } else {
        this.setState({
          passwordType: "password",
        })
      }
    }

    render() {
      return (
        <div >
          <div id="inputCreateAccount">
            <b className="usernameText">Username:</b><br />
            <input id="usernameInput" type="text" name="username" placeholder="Username" value={this.state.userName} onChange={this.onUserChange} />
            <br />
            <br />
            <b>Password:</b>
            <br />
            <input type={this.state.passwordType} name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
            <br />
            <input type={this.state.passwordType} name="password2" placeholder="Re-enter password" value={this.state.password2} onChange={this.onPassword2Change} />
            <br />
            <p><input type="checkbox" onClick={this.showPassword} /> Show password</p>
            <Button color="secondary" onClick={this.createAcct}>Create Account</Button>
          </div>
        </div>
      );
    }
  }