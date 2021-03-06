import React from "react";
import { SocialIcon } from "react-social-icons";

class InviteFriends extends React.Component {
  render() {
    return (
      <div className="col-12 p-2 px-0 justify-content-around d-flex">
        <div className="row mx-0">
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://linkedin.com/in/" />
          </div>
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://facebook.com/in/" />
          </div>
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://twitter.com/in/" />
          </div>
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://instagram.com/in/" />
          </div>
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://skype.com/in/" />
          </div>
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://whatsapp.com/in/" />
          </div>
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://google.com/in/" />
          </div>
          <div className="col-3 p-1" onClick={this.props.closeDrawer}>
            <SocialIcon url="http://github.com/in/" />
          </div>
        </div>
      </div>
    );
  }
}

export default InviteFriends;
