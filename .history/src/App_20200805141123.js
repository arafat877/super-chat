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
  column1: {
    border: "solid white",
  },
  column2: {
    border: "solid white",
  },
  column3: {
    border: "solid white",
  },
  c1Logo:{
    border: "solid white",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container containerer className={classes.innerContainer}>
        <Grid item container className={classes.column1} xs={1}>
          <Grid item direction="column-reverse" className={classes.c1Logo} xs={2}>
            as
          </Grid>
          <Grid item direction="column-reverse" className={classes.c1Logo} xs={8}>
            as
          </Grid>
          <Grid item direction="column-reverse" className={classes.c1Logo} xs={2}>
            as
          </Grid>
        </Grid>
        <Grid item className={classes.column2} xs={3}>
          as
        </Grid>
        <Grid item className={classes.column3} xs={8}>
          as
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
