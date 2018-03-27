import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Menubuttons from './menuButtons';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      passwordType: "password"
    };
    this.login = this.login.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }

  login() {
    this.props.login(this.state.userName, this.state.password).then((result) => {
      this.props.setNote(result, this.state.notificationColor, this.state.isNotificationOpen);        
      this.props.closeModal();
    })
  }

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

  showPassword() {
    if (this.state.passwordType === "password") {
      this.setState({
        passwordType: "text"
      })
    } else {
      this.setState({
        passwordType: "password"
      })
    }
  }

  render() {
    return (
      <div>
            <div id="inputFieldsLogin">
              <b className="usernameText">Username:</b><br />
              <input type="text" name="username" placeholder="Username" value={this.state.userName} onChange={this.onUserChange} />
              <br />
              <br />
              <b>Password:</b>
              <br />
              <input type={this.state.passwordType} name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
              <br />
              <p><input type="checkbox" onClick={this.showPassword} /> Show password</p>            
              <Button color="secondary" onClick={this.login}>Log In</Button>
            </div>
      </div>
    );
  }
}