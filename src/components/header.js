import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom"
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  div1: {
    display: "inline"
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.div1}>

      <AppBar
        position="static"
        style={{ backgroundColor: "#ede7f6" }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>EggPlant</h1>
        </Link>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="#ede7f6"
            textColor="#ede7f6"
          >
          <Link to="/register" style={{ textDecoration: "none" }} >
          <Tab label="EGG Register"/>
          </Link>
          <Link to="/list" style={{ textDecoration: "none" }} >
          <Tab label="EGG List" />
          </Link>
          <Link to="/group" style={{ textDecoration: "none" }} >
          <Tab label="Group" />
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }} >
          <Tab label="Login" />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  )
}