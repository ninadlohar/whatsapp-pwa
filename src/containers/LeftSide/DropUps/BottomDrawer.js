import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  render() {
    return (
      <div>
        <Drawer anchor="bottom" open={this.props.open} onOpen={this.props.onOpen}>
          <div tabIndex={0} onClick={this.props.toggleDrawer} className="bottomDrawer">
            {this.props.children}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
