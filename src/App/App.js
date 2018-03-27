import React, { Component } from 'react';
import logo from '../forkgold.png';
import './App.css';
import Menubuttons from '../menuButton/menuButtons.js';
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
    // if (this.state.isLoggedIn) {
    // var Profile = < Profile classname="Profile"/>
    // }
    return (
      <div className="App">
        <div className="headerMenu">
          <div className="Menubuttons">
            < Menubuttons className="navigationButton" isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

        </div>
        <img src={logo} className="fork_logo" alt="logo" usemap="#image-map" />
        <map name="image-map">
          <area shape="rect" coords="50,75,190,200," href="localhost:3000/search.html" alt="" />
          <area shape="rect" coords="205,75,340,200" href="localhost:3000/make.html" alt="" />
          <area shape="rect" coords="355,75,500,200" href="localhost:3000/share.html" alt="" />
        </map>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div >
          <br />
          <ul>
            <p2 class="copyright"> © Fork | 2018 All rights are given for free. You're Welcome.</p2>
            <br />
          </ul>
        </div>
      </div>
    )
  }
}
