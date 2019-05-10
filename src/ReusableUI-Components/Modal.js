import React, { Component } from "react";

import { Modal } from "reactstrap";

class MainModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} centered={true} contentClassName="modal__popup">
        {this.props.children}
      </Modal>
    );
  }
}

export default MainModal;
