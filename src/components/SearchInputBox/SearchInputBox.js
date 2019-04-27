import React from "react";
import Input from "../../ReusableUI-Components/Input";
import "../../App.scss";

class SearchInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArrow: false,
      value: ""
    };
    this.searchUsersFn = this.searchUsersFn.bind(this);
  }

  searchUsersFn(e) {
    let docInputBox = document.getElementById("input-box");
    docInputBox.style.background = "white";
    docInputBox.style.boxShadow = "0px 4px 5px 0px rgba(205,205,205,1)";
    this.setState({ value: e, inputArrow: true }, () => {
      if (e === "") {
        this.setState({ inputArrow: false });
        document.getElementById("input-arrow").style.transition = "all 0.2s";
        docInputBox.style.backgroundColor = "#f8f8f8";
        docInputBox.style.transition = "all 0.4s";
        docInputBox.style.boxShadow = "none";
      }
    });
  }
  render() {
    let leftArrow = this.state.inputArrow ? (
      <i className="fas fa-arrow-down input__box__blue__arrow px-2 py-2" id="input-arrow" />
    ) : (
      <i className="fas fa-search icon-color input__search__icon px-3" />
    );
    let casualSearchBox = (
      <div className="col-12 px-0 input__box" id="input-box">
        <div className="px-2 py-2 d-flex">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0">
              <div className="main-left-arrow px-1">{leftArrow}</div>
              <Input
                placeholder={this.props.placeholder}
                onChangeHandler={this.searchUsersFn}
                value={this.state.value}
                classes="search__input__box"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    );
    let newSearch = (
      <div className="col-12 px-0 newSearchInputBox">
        <Input
          placeholder="Type Contact Name"
          onChangeHandler={this.searchUsersFn}
          value={this.state.value}
          classes="searchInputBoxCustomized"
          type="text"
        />
      </div>
    );
    let simpleInputForProfile__Name = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile_width_input_static">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile_width_45_static d-flex justify-content-between pt-1">
            <div className="profile_chracters_left">20</div>
            <div className="">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingNameFn}>
              <img src={require("../../assets/svg/correct-signal.svg")} alt="tick-correct-signal" height="17" width="17" />
            </div>
          </div>
        </div>
      </div>
    );
    let simpleInputForProfile__About = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile_width_input_static">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile_width_45_static d-flex justify-content-end pt-1">
            <div className="mr-2">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingAboutFn}>
              <img src={require("../../assets/svg/correct-signal.svg")} alt="tick-correct-signal" height="17" width="17" />
            </div>
          </div>
        </div>
      </div>
    );

    let simpleInputForGroupInfo__Name = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile_width_input_static">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile_width_45_static d-flex justify-content-between pt-1">
            <div className="profile_chracters_left">20</div>
            <div className="">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingNameGroupFn}>
              <img src={require("../../assets/svg/correct-signal.svg")} alt="tick-correct-signal" height="17" width="17" />
            </div>
          </div>
        </div>
      </div>
    );

    let simpleInputForGroupInfo__Description = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile_width_input_static">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile_width_45_static d-flex justify-content-end pt-1">
            <div className="mr-2">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingDescriptionFn}>
              <img src={require("../../assets/svg/correct-signal.svg")} alt="tick-correct-signal" height="17" width="17" />
            </div>
          </div>
        </div>
      </div>
    );

    let searchBox = null;
    switch (this.props.searchBoxType) {
      case "withSearchBox":
        searchBox = casualSearchBox;
        break;
      case "searchBoxWithLine":
        searchBox = newSearch;
        break;
      case "simpleInputForProfile__Name":
        searchBox = simpleInputForProfile__Name;
        break;
      case "simpleInputForProfile__About":
        searchBox = simpleInputForProfile__About;
        break;
      case "simpleInputForGroupInfo__Name":
        searchBox = simpleInputForGroupInfo__Name;
        break;
      case "simpleInputForGroupInfo__Description":
        searchBox = simpleInputForGroupInfo__Description;
        break;
      default:
        searchBox = simpleInputForProfile__About;
    }
    return searchBox;
  }
}

export default SearchInputBox;
