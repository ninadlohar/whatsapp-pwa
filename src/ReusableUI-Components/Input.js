import React from "react";
import "../App.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputHandler = this.inputHandler.bind(this);
    this.functionExecuteHandler = this.functionExecuteHandler.bind(this);
    this.textAreaAdjust = this.textAreaAdjust.bind(this);
  }

  textAreaAdjust(o) {
    o.target.style.height = "1px";
    o.target.style.height = 0 + o.target.scrollHeight + "px";
  }

  inputHandler(e) {
    this.props.onChangeHandler(e.target.value);
  }

  functionExecuteHandler(event) {
    if (this.props.onClickHandler) {
      if (event.key === "Enter") {
        this.props.onClickHandler();
      }
    }
  }

  render() {
    let displayBox = null;
    let defaultClass = "form-control";
    switch (this.props.type) {
      case "text": {
        return (
          <input
            className={(defaultClass += " " + this.props.classes)}
            type="text"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.inputHandler}
            onKeyPress={this.functionExecuteHandler}
          />
        );
      }
      case "textarea": {
        return (
          <textarea
            id="textarea"
            className={(defaultClass += " " + this.props.classes)}
            type="text"
            rows="1"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.inputHandler}
            onKeyPress={this.functionExecuteHandler}
            onKeyUp={this.textAreaAdjust}
          />
        );
      }
    }
    return displayBox;
  }
}

export default SearchBar;
