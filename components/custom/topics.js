import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Box, Link } from "@material-ui/core";
import { getAllTopics } from '../../lib/api'


export default function Topics(props) {
  // console.log(props)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ padding: '0.5rem 1rem' }}
      >
        Topics
      </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
      >
      
      { props?.allTopics?.map((topic) => {
        return(
          <Link as={`/topics/${topic.node.name}`} href={`/topics/${topic.node.name}`} color='inherit' underline='none'>
          <MenuItem onHover={handleClose} onClick={handleClose} style={{color:"white"}}>{topic.node.name}</MenuItem>
          </Link>
        );
      })}
        
      </Menu>
    </Box>
  );
}


