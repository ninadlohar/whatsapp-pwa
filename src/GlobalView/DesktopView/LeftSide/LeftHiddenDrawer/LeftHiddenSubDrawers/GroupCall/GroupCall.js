import React from "react";

class GroupCall extends React.Component {
  state = {
    onHoverState: false,
    data: ""
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

  componentDidMount() {
    this.setState({ data: this.props.value });
  }

  render() {
    return (
      <div className="call__info__section" id="call__info__section">
        <div className="w-100 d-flex userInfo__box">
          <div className="leftChat__user__image">
            <img
              src={require("../../../../../../assets/images/BB_S5B_004_sm.jpg")}
              alt="tim-holland"
              className="sender__image__left__window"
            />
          </div>
          <div className="calls__user__details__mobile">
            <div className="leftChat__senderName___time">
              <div className="row mx-0">
                <div className="leftChat__senderName noOverFlow">{this.state.data.name}</div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="d-flex align-items-center single-icons mr-2">
              <img src={require("../../../../../../assets/svg/call1.svg")} alt="call" height="20" width="20" />
            </span>
            <span className="d-flex align-items-center single-icons">
              <img src={require("../../../../../../assets/svg/video-camera.svg")} alt="video-camera" height="22" width="22" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupCall;
