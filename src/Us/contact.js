import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        {/* <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Contact Us</Button> */}
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Contact Us</ModalHeader>
          <ModalBody> */}
            We are located in the basement corner of Blunderbuss. You will find us surrounding Moby as he sleeps.
          {/* </ModalBody>
        </Modal> */}
        </div>
    );
  }
}

export default Contact;