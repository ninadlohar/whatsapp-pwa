import React from "react";
import SearchInputBox from "../../../../../components/SearchInputBox/SearchInputBox";
import NewUserChat from "../../../../../components/TypesOfUserChats/NewUserChat";

class NewGroup extends React.Component {
  componentDidMount() {
    var height = document.getElementById("page").clientHeight;
    var header = document.getElementById("newGroup_header").clientHeight;
    var inputBox = document.getElementById("newGroup__input__section").clientHeight;
    var content = document.getElementById("leftSide__log__of__chats_newGroup");

    var step1 = height - header;
    var availableheight = step1 - inputBox;
    content.style.height = availableheight + 15 + "px";
    content.style.overflow = "scroll";

    window.addEventListener("resize", function() {
      var height = document.getElementById("page").clientHeight;
      var header = document.getElementById("newGroup_header").clientHeight;
      var inputBox = document.getElementById("newGroup__input__section").clientHeight;
      var content = document.getElementById("leftSide__log__of__chats_newGroup");

      var step1 = height - header;
      var availableheight = step1 - inputBox;
      content.style.height = availableheight + 15 + "px";
      content.style.overflow = "scroll";
    });
  }

  render() {
    let hashTag = (
      <div className="hashTag w-100">
        <div className="hashTag_child">#</div>
      </div>
    );
    return (
      <div className={this.props.classes} id="leftSlider__chatActiveBox">
        <header className="col-12 px-0" id="newGroup_header">
          <div className="leftSlider__header__green_box">
            <div className="row">
              <div className="col-12 d-flex custom__59height align-items-center">
                <span className="leftSlider__back__arrow" onClick={this.props.toggleHandlerOut}>
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="leftSlider__greenBox__header">Add Group Participants</span>
              </div>
            </div>
          </div>
        </header>
        <section className="col-12 px-0 leftSide__chat__section">
          <SearchInputBox searchBoxType="searchBoxWithLine" placeholder="Type Contact Name" />
          <div className="row mx-0">
            <div className="col-12 px-0 leftSide__log__of__chats " id="leftSide__log__of__chats_newGroup">
              <div className="row mx-0">
                {hashTag}
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
                <NewUserChat />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NewGroup;
