import React from "react";
import Auxilliary from "../../../../hoc/Auxillary";
import Radio from "@material-ui/core/Radio";

class Groups extends React.Component {
  state = {
    checkedA: false,
    selectedValue: "a"
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleRadioChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  componentDidMount() {
    let header = document.getElementById("mobile__group__head");
    let infoSection = document.getElementById("mobile__group__section");
    this.props.componentWithoutSearchBar(header, infoSection);
  }

  render() {
    return (
      <Auxilliary>
        <header className="col-12 fixed-top mobile__view__starred__Messages__Header py-2" id="mobile__group__head">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0 py-1 d-flex">
              <div className="row mx-0 w-100">
                <div
                  className="mobileView__left__arrow d-flex align-items-center justify-content-start"
                  onClick={this.props.closeDrawer}
                >
                  <img src={require("../../../../assets/svg/left.svg")} width="24" height="24" alt="left-arrow" />
                </div>
                <div className="mobileView__selectContactSection pl-3">
                  <div className="mobile__newChat__selectedContact">Groups</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="mobile__group__section">
          <div className="col-12 py-3">
            <div className="privacy">Who can add me to groups</div>
          </div>

          <div className="col-12 d-flex">
            <div className="d-flex align-items-center pr-3">
              <Radio
                checked={this.state.selectedValue === "a"}
                onChange={this.handleRadioChange}
                value="a"
                name="radio-button-demo"
                aria-label="A"
              />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Everyone</div>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex">
            <div className="d-flex align-items-center pr-3">
              <Radio
                checked={this.state.selectedValue === "a"}
                onChange={this.handleRadioChange}
                value="a"
                name="radio-button-demo"
                aria-label="A"
              />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">My contacts</div>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex">
            <div className="d-flex align-items-center pr-3">
              <Radio
                checked={this.state.selectedValue === "a"}
                onChange={this.handleRadioChange}
                value="a"
                name="radio-button-demo"
                aria-label="A"
              />
            </div>
            <div className="d-flex align-items-center w-100">
              <div>
                <div className="mobile__settings__header__name">Nobody</div>
              </div>
            </div>
          </div>

          <div className="col-12 py-3">
            <div className="privacy__text">
              Admins who can't add you to group will have the option of inviting you privately instead
            </div>
          </div>
          <div className="enable-button-parent w-100 d-flex justify-content-center" onClick={this.props.closeDrawer}>
            <div className="enable-button">
              <div className="d-flex justify-content-center">DONE</div>
            </div>
          </div>
        </div>
      </Auxilliary>
    );
  }
}

export default Groups;
