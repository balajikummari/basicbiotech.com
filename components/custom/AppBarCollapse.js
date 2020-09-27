
import React from "react";
import { Box, Button, Grid, MenuItem, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import Topics from "./Topics";

const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const AppBarCollapse = props => (
  <Box  className={props.classes.root} >
    <ButtonAppBarCollapse >
      <Box  pl={2} pr ={5} pt={2} >
        <Typography variant="subtitle1" color="Primary" style={{ paddingLeft: '1rem' }} >Topics</Typography>
        <MenuItem dense>
        <Typography variant="h6" color="initial">Biotechnology</Typography>
        </MenuItem>
        <MenuItem dense>
        <Typography variant="h6" color="initial">Biotechnology</Typography>
        </MenuItem>
        <MenuItem dense>
        <Typography variant="h6" color="initial">Biotechnology</Typography>
        </MenuItem>
        <MenuItem dense>
        <Typography variant="h6" color="initial">Biotechnology</Typography>
        </MenuItem>
      </Box>
      <Box  pl={2} pr ={5} pt={3}>
        <Typography variant="subtitle1" color="Primary" style={{ paddingLeft: '1rem' }} >About</Typography>
        <MenuItem dense>
        <Typography variant="body1" color="initial"> About Basic Biotech</Typography>
        </MenuItem>
        <MenuItem dense>
        <Typography variant="body1" color="initial"> Meet Our Team</Typography>
        </MenuItem>
        <MenuItem dense>
        <Typography variant="body1" color="initial"> Contact Us</Typography>
        </MenuItem>
        <MenuItem dense>
        <Typography variant="body1" color="initial"> Privacy and Terms</Typography>
        </MenuItem>
      </Box>
    </ButtonAppBarCollapse>
    <Box display='flex' className={props.classes.buttonBar} id="appbar-collapse">
      <Topics style={{ padding: '0.5rem 1rem' }} />
      <Button style={{ padding: '0.5rem 1rem' }} >About</Button>
      <Button style={{ padding: '0.5rem 1rem' }} >Subscribe</Button>
      <Button style={{ padding: '0.5rem 1rem' }} >Search</Button>
    </Box>
  </Box>
);

export default withStyles(styles)(AppBarCollapse);
