import React from "react";

class ContactDataChatWStataus extends React.Component {
  state = {
    onHoverState: false,
    data: "",
    selected: false,
    count: 0
  };
  onHover = () => {
    this.setState({ onHoverState: true });
  };
  offHover = () => {
    this.setState({ onHoverState: false });
  };

  componentDidMount() {
    this.setState({ data: this.props.value });
  }

  countParticipants = id => {
    if (this.state.data.id === id) {
      this.setState({ selected: true, count: this.state.count + 1 });
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    console.log(this.state.selected + "    " + this.state.count);
    return (
      <div
        className="chat-1 w-100 d-flex rightSlider__userInfo__box"
        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
        onClick={() => this.countParticipants(this.state.data.id)}
      >
        <div className="leftChat__user__image">
          <img src={this.state.data.image} alt="karl-benz" className="logged__in__user__image__49px" />
        </div>
        <div className="leftChat__user__details">
          <div className="leftChat__senderName___groupAdmin">
            <div className="row mx-0">
              <div className="leftChat__senderName__asAdmin noOverFlow">{this.state.data.name}</div>
            </div>
          </div>
          <div className="leftChat__message___messageLeftToRead">
            <div className="row mx-0">
              <div className="leftChat__message noOverFlow">{this.state.data.status}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDataChatWStataus;
