import React from "react";

class Status extends React.Component {
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
          <img src={require("../../../../../assets/images/Iron-Man.jpg")} alt="jolie" className="sender__image__left__window" />
        </div>
        <div className="leftChat__user__details">
          <div className="leftChat__senderName___time">
            <div className="row mx-0">
              <div className="leftChat__senderName noOverFlow">Shizuka</div>
            </div>
          </div>
          <div className="leftChat__message___messageLeftToRead">
            <div className="row mx-0">
              <div className="leftChat__message noOverFlow">Today, 10: 14 AM</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
