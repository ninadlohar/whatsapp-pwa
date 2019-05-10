import React from "react";
import Input from "../../ReusableUI-Components/Input";
import "../../scss/dropdown/search.scss";

class SearchInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArrow: false,
      value: "",
      mobileSearchBoxValue: "",
      mobileSearch: ""
    };
    this.searchUsersFn = this.searchUsersFn.bind(this);
    this.mobileSearchBoxFn = this.mobileSearchBoxFn.bind(this);
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

  mobileSearchBoxFn(e) {
    let docInputBox = document.getElementById("search-input-box-new-group");
    // docInputBox.style.background = "red";
    docInputBox.style.boxShadow = "0px 4px 5px 0px rgba(205,205,205,1)";
    this.setState({ mobileSearchBoxValue: e, inputArrow: true }, () => {
      docInputBox.style.backgroundColor = "#f8f8f8";
      docInputBox.style.boxShadow = "none";
    });
  }

  mobileChatFn = e => {
    this.setState({ mobileChat: e });
  };

  activeInputValue = () => {
    this.setState({ inputArrow: true });
  };

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
              <div className="main-left-arrow px-1" onClick={this.props.setSearchDeactiveFn}>
                {leftArrow}
              </div>
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
    let typeContactNameInput = (
      <div className="col-12 px-0 newGroup__input__section" id="newGroup__input__section">
        <Input
          placeholder="Type Contact Name"
          onChangeHandler={this.searchUsersFn}
          value={this.state.value}
          classes="newGroup__input__box"
          type="text"
        />
      </div>
    );
    let simpleInputForProfile__Name = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile__input__box">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile__input__icons__section d-flex justify-content-between pt-1">
            <div className="profile__input__characters__left">20</div>
            <div className="">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingNameFn}>
              <img
                src={require("../../assets/svg/correct-signal.svg")}
                alt="tick-correct-signal"
                height="17"
                width="17"
              />
            </div>
          </div>
        </div>
      </div>
    );
    let simpleInputForProfile__About = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile__input__box">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile__input__icons__section d-flex justify-content-end pt-1">
            <div className="mr-2">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingAboutFn}>
              <img
                src={require("../../assets/svg/correct-signal.svg")}
                alt="tick-correct-signal"
                height="17"
                width="17"
              />
            </div>
          </div>
        </div>
      </div>
    );

    let simpleInputForGroupInfo__Name = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile__input__box ">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile__input__icons__section d-flex justify-content-between pt-1">
            <div className="profile__input__characters__left">20</div>
            <div className="">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingNameGroupFn}>
              <img
                src={require("../../assets/svg/correct-signal.svg")}
                alt="tick-correct-signal"
                height="17"
                width="17"
              />
            </div>
          </div>
        </div>
      </div>
    );

    let simpleInputForGroupInfo__Description = (
      <div className="col-12 px-0">
        <div className="row mx-0">
          <div className="profile__input__box ">
            <Input placeholder="Type Contact Name" value="Niko" classes="simple__edit__pencil" type="text" />
          </div>
          <div className="profile__input__icons__section d-flex justify-content-end pt-1">
            <div className="mr-2">
              <img src={require("../../assets/svg/happy.svg")} alt="tick-mark" height="17" width="17" />
            </div>
            <div className="" onClick={this.props.isEditingDescriptionFn}>
              <img
                src={require("../../assets/svg/correct-signal.svg")}
                alt="tick-correct-signal"
                height="17"
                width="17"
              />
            </div>
          </div>
        </div>
      </div>
    );

    let mobileSearchBox = (
      <div className="col-12 px-0 input__box" id="search-input-box">
        <div className="px-2 py-2 d-flex">
          <div className="row mx-0 w-100">
            <div className="col-12 px-0">
              <div className="main-left-arrow px-1" onClick={this.props.setSearchDeactiveFn}>
                <i className="fas fa-arrow-down input__box__green__arrow px-2 py-2" id="input-arrow" />
              </div>
              <Input
                placeholder={this.props.placeholder}
                onChangeHandler={this.mobileSearchBoxFn}
                value={this.state.mobileSearchBoxValue}
                classes="search__input__box"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    );

    let mobileTSVInput = (
      <div className="col-12 px-0 input__box" id="search-input-box">
        <div className="px-2 py-2 d-flex">
          <div className="row mx-0 w-100 justify-content-center">
            <Input
              placeholder={this.props.placeholder}
              onChangeHandler={this.mobileSearchBoxFn}
              value={this.state.mobileSearchBoxValue}
              classes="mobileTSVInput text-center"
              type="text"
            />
          </div>
        </div>
      </div>
    );

    let mobileTSVInput3 = (
      <div className="col-12 px-0 input__box" id="search-input-box">
        <div className="px-2 py-2 d-flex">
          <div className="row mx-0 w-100 justify-content-center">
            <Input
              placeholder={this.props.placeholder}
              onChangeHandler={this.mobileSearchBoxFn}
              value={this.state.mobileSearchBoxValue}
              classes="mobileTSVInput3 text-center"
              type="text"
            />
          </div>
        </div>
      </div>
    );

    let mobileChangeNumberInputs = (
      <div className="col-12 px-0 input__box" id="search-input-box">
        <div className="px-2 py-2 d-flex">
          <div className="row mx-0 w-100 justify-content-center">
            <Input
              placeholder={this.props.placeholder}
              onChangeHandler={this.mobileSearchBoxFn}
              value={this.props.p91}
              classes="mobileChangeNumberInputs"
              type="text"
            />
          </div>
        </div>
      </div>
    );
    let mobileMainChat = (
      <div className="col-12 px-0" id="mobileSearch-input-box">
        <div className="py-2 d-flex">
          <div className="row mx-0 w-100 justify-content-center">
            <Input
              placeholder={this.props.placeholder}
              classes="mobileSearchTextArea"
              onChangeHandler={this.mobileChatFn}
              type="textarea"
              placeholder="Type a message"
            />
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
        searchBox = typeContactNameInput;
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
      case "mobileSearchBox":
        searchBox = mobileSearchBox;
        break;
      case "mobileTSVInput":
        searchBox = mobileTSVInput;
        break;
      case "mobileTSVInput3":
        searchBox = mobileTSVInput3;
        break;
      case "mobileChangeNumberInputs":
        searchBox = mobileChangeNumberInputs;
        break;
      case "mobileMainChat":
        searchBox = mobileMainChat;
        break;
      default:
        searchBox = simpleInputForProfile__About;
    }
    return searchBox;
  }
}

export default SearchInputBox;
