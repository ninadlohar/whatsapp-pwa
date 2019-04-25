import React, { Component } from "react";

import { Modal } from "reactstrap";

class MainModal extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} centered={true} contentClassName="modal__popup">
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default MainModal;
