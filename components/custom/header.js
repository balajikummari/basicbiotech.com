import { Avatar, Box, Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import AppBarCollapse from "./AppBarCollapse";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="default" className={classes.navigation}>
      <Toolbar>
        <Link as href='/' variant='inherit' underline="none">
          <Avatar aria-label="author" variant="square" style={{ margin: "0rem 1rem" }} src="/favicon/android-icon-192x192.png"  />
          </Link>
         
            <Link variant='h6' href='/' underline="none" variant='inherit'>
            <Typography
            variant="h5"
            className={classes.appTitle}
            color='textPrimary'
          >
          <Box fontWeight={700}>
          Basic Biotech
          </Box>
          </Typography>
          </Link>
          <AppBarCollapse allTopics={props.allTopics}/>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
        classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
