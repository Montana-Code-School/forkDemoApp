import React, { Component } from 'react';
import logo from '../forkgold.png';
import './App.css';
import Menubuttons from '../menuButton/menuButtons.js';
import '../menuButton/menuButtons.css';
import RecipeInputModal from '../recipeInputModal/recipeInputModal.js';
import Spinner from '../spinThing.js';
import RecipeListModal from '../recipeListModal/recipeListModal';
import Profile from '../profile.js';
import { render } from 'react-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
    this.loggedIn = this.loggedIn.bind(this);
  }


  loggedIn() {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    return (
      <div className="App">
        <div className="headerMenu">
          <div className="Menubuttons">
            < Menubuttons className="navigationButton" isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} />
          </div>

        </div>
        <div className="CopyandLogo"> 
        <img src={logo} className="fork_logo" alt="logo" usemap="#image-map" />
          <br />
          <ul>
            <p2 className="copyright"> © Fork | 2018 All rights are given for free. You're Welcome.</p2>
            <br />
          </ul>
        </div>
        <br />
      </div>
      
    )
  }
}
