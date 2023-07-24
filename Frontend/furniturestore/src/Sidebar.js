import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import '../src/sidebar.css';

export default function TemporaryDrawer() {
  const navigate = useNavigate(); // Access the navigate function for navigation

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleNavigation = (url) => {
    navigate(url); // Navigate to the specified URL
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['cart', 'tables', 'beds', 'chairs', 'shelves','sofa','AddProduct'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText
              primary={text}
              onClick={() => handleNavigation(`/${text}`)} // Handle click and navigate to the specified URL
              style={{ cursor: 'pointer' }} // Add pointer cursor style
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id='btn' onClick={toggleDrawer(anchor, true)}>
            <Menu />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
