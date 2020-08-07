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
  c1Logo: {
    border: "solid white",
    height: "15%",
  },
  c1Menu: {
    border: "solid white",
    height: "70%",
  },
  c1PP: {
    border: "solid white",
    height: "15%",
  },
  c2Search:{
    border: "solid white",
    height: "7.5%",
  },
  c2Conv:{
    border: "solid white",
    height: "7.5%",
  },
  c2Select:{
    border: "solid white",
    height: "5%",
  },
  c2Messages:{
    border: "solid white",
    height: "80%",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container containerer className={classes.innerContainer}>
        <Grid item className={classes.column1} xs={1}>
          <Grid item className={classes.c1Logo} xs={12}>
            lg
          </Grid>
          <Grid item className={classes.c1Menu} xs={12}>
            mn
          </Grid>
          <Grid item className={classes.c1PP} xs={12}>
            pp
          </Grid>
        </Grid>
        <Grid item className={classes.column2} xs={3}>
          <Grid item className={classes.c2Search} xs={12}>
            search
          </Grid>
          <Grid item className={classes.c2Conv} xs={12}>
            Conversations
          </Grid>
          <Grid item className={classes.c2Select} xs={12}>
            Selections
          </Grid>
          <Grid item className={classes.c2Messages} xs={12}>
            Messages
          </Grid>
        </Grid>
        <Grid item className={classes.column3} xs={8}>
          as
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
