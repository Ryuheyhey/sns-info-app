import React, { useCallback, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { createStyles, makeStyles } from '@material-ui/core';
import Link from "next/link"
import { StylesContext } from '@material-ui/styles';


const useStyles = makeStyles(() => createStyles({
  drawer: {
    width: 250
  }, 
  root: {
    flexGrow: 1
  },
  menu: {
    padding: 0
  },
  title:{
    margin: "0 auto",
    fontSize: "1.6rem",
    textAlign: "center"
  },
  icon:{
    padding: "1rem",
    lineHeight: ""
  }
})
)


const Header = (props) => {
  const classes = useStyles()

  const [state, setState] = useState({left: false})
  const toogleDrawer = (anchor, open) => () => {
    setState({...state, [anchor]: open})
  }

  const menus = [
    {
      name: "Twitter",
      link: "/",
      icon: <TwitterIcon />,
      
    },
    {
      name: "Instagram",
      link: "/instagram",
      icon: <InstagramIcon />,
    },
    {
      name: "Youtube",
      link: "/youtube",
      icon: <YouTubeIcon />,
    },
    {
      name: "Facebook",
      link: "/facebook",
      icon: <FacebookIcon />,
    },
  ]

  const drawer = (
    <div className={classes.drawer}>
      <List>
      {menus.map((menu, index) => {
        return (
        <Link href={menu.link} >
          <a>
          <ListItem key={index}>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
          </ListItem>
          </a>
        </Link>
      )
    })}
    </List>
    <Divider />
    {/* お気に入り機能の追加 */}
    </div>
  )
  
  return (
    <div className={classes.root}>
      <AppBar color="inherit">
        <Toolbar>
        <IconButton color="inherit" aria-label="Menu" className={classes.menu} onClick={toogleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Drawer open={state.left} onClose={toogleDrawer('left', false)}>
            <div 
              tabIndex={0} 
              role="button" 
              onClick={toogleDrawer('left', false)}
              onKeyDown={toogleDrawer('left', false)} 
            >
              {drawer}
            </div>
          </Drawer>
          <strong className={classes.title}>
            <a href={props.app_link} target="_blank" rel="noopener">
              <span className={classes.icon}>{props.icon}</span>
              <span  >{props.title}</span>
            </a>
          </strong>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header