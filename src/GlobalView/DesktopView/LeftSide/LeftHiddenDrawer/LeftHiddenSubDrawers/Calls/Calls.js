import React from "react";

class Calls extends React.Component {
  state = {
    onHoverState: false
  };

  onHover = () => {
    this.setState({ onHoverState: true }, () => {
      document.getElementById("rollback-on-hover").style.transform = "translate(-6px, 0)";
      document.getElementById("rollback-on-hover").style.transition = "0.3s";
    });
  };
  offHover = () => {
    this.setState({ onHoverState: false });
  };

  render() {
    return (
      <div className=" w-100 d-flex userInfo__box" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
        <div className="leftChat__user__image">
          <img
            src={require("../../../../../../assets/images/BB_S5B_004_sm.jpg")}
            alt="tim-holland"
            className="sender__image__left__window"
          />
        </div>
        <div className="calls__user__details">
          <div className="leftChat__senderName___time">
            <div className="row mx-0">
              <div className="leftChat__senderName noOverFlow">NiKO</div>
            </div>
          </div>
          <div className="leftChat__message___messageLeftToRead">
            <div className="row mx-0">
              <div className="leftChat__message noOverFlow">
                <span className="pr-2">
                  <img src={require("../../../../../../assets/svg/call-received-arrow.svg")} height="11" width="11" alt="call-received" />
                </span>
                <span>Yesterday 10:30 AM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={require("../../../../../../assets/svg/video-camera.svg")} alt="video-camera" height="20" width="20" />
        </div>
      </div>
    );
  }
}

export default Calls;
