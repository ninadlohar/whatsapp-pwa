import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const styles = theme => ({
  paper: {
    position: "relative",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class MobileModal extends React.Component {
  state = {
    value: "Everyone",
    key2: [
      { key: "Everyone", value: "Everyone" },
      { key: "My Contacts", value: "My Contacts" },
      { key: "Nobody", value: "Nobody" }
    ]
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.closeModal}
        >
          <div className="mobile__modal d-flex justify-content-center align-items-center h-100">
            <div className={classes.paper}>
              <Typography variant="h6" id="modal-title">
                {this.props.h6}
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup className={classes.group} value={this.state.value} onChange={this.handleChange}>
                    {this.state.key2.map(k => (
                      <FormControlLabel
                        value={k.key}
                        control={<Radio />}
                        label={k.value}
                        onClick={this.props.closeModal}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Typography>
              <MobileModalWrapped />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

MobileModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const MobileModalWrapped = withStyles(styles)(MobileModal);

export default MobileModalWrapped;
