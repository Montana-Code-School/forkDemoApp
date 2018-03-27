import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
      
    };

    // this.toggle = this.toggle.bind(this);
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

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  render() {
    return (
      <div>
        {/* <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel} About Us</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>About Us</ModalHeader>
          <ModalBody> */}
          Welcome to Fork! <br />
          <br />
What is Fork? <br />
<br />
Fork is an easy-to-use recipe vault for keeping all your cooking adventures in one place.
We are passionate about eating well, and we know you are too. <br/>

Our users can browse meal ideas by searching our library of user-submitted entries.  Like something you see?  Simply "Fork" it over to your plate for later use. 
Craving salmon but don't know what to cook?  You can conveniently search by ingredient to find a list of delicious solutions to tame your hunger!  Have some great creations from your own kitchen?  Help expand the community by sharing your ideas for others to Fork!
<br />
Eat well, and thanks for using Fork!<br />
<br />
-The Fork Team 
and Moby.
          {/* </ModalBody>
        </Modal> */}
        </div>
    );
  }
}

export default About;