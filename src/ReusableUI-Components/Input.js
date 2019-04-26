import React from "react";
import "../App.scss";
import Textarea from "react-textarea-autosize";

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
    if (event.key === "Enter") {
      event.preventDefault();
      this.props.onClickHandler();
      return false;
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
          <Textarea
            id="textarea"
            className={(defaultClass += " " + this.props.classes)}
            minRows={1}
            maxRows={5}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.inputHandler}
            onKeyDown={e => this.functionExecuteHandler(e)}
          />
        );
      }
    }
    return displayBox;
  }
}

export default SearchBar;
