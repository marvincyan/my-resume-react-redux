import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalForm from './ModalForm';
import '../css/modal.css';

class Modals extends Component {
  componentWillMount() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var form = url.searchParams.get('form');
    if(form && form === 'submitted'){
      this.props.changeThanks();
    }
  }

  render() {
    return(
      <div>
        <Modal size="lg" isOpen={this.props.modals.hire}>
          <ModalHeader>
            <Button color="outline-light" className="closeButton" onClick={this.props.changeHire}>close</Button>
            <div className="modal-title">HAVE A PROJECT?</div>
            <p>I'm ready to help you. You just type in the details below.</p>
          </ModalHeader>
          <ModalBody>
            <ModalForm />
          </ModalBody>
        </Modal>

        <Modal size="lg" className="thanks" isOpen={this.props.modals.thanks}>
          <ModalHeader>
            <Button color="outline-light" className="closeButton" onClick={this.props.changeThanks}>close</Button>
            Your form has been submitted!
          </ModalHeader>
          <ModalBody>
            <p>Thank you for contacting me. I will get back to you as soon as possible.</p>
            <p>I look forward to working with you!</p>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Modals;