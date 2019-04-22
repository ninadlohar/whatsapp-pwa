import React from "react";
import "../App.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputHandler = this.inputHandler.bind(this);
    this.functionExecuteHandler = this.functionExecuteHandler.bind(this);
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
    }
    return displayBox;
  }
}

export default SearchBar;
