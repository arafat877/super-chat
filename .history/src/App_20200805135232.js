import React from "react";
import "./App.scss";
import {Container} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {
  Message,
  GroupWork,
  Chat,
  Palette,
  Settings,
  PeopleAlt,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor:'#b7e3fe',
    height:"100vh"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container} >
      sd
    </Container>
  );
}

export default App;
