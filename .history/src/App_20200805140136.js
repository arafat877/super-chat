import React from "react";
import "./App.scss";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    backgroundColor: "#b7e3fe",
    height: "100vh",
    display: "flex",
  },
  innerContainer: {
    backgroundColor: "#3576ef",
    margin: "auto",
    height: "90%",
    width: "80%",
    borderRadius: "10px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Container className={classes.innerContainer}>
        <Grid container spacing={3}>
        <Grid  xs={3}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
