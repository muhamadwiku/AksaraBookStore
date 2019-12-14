import React, { Component } from 'react';
// import {Paper, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button} from '@material-ui/core';
import {
  withStyles,
  Grid,
  Paper,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import admin from '../index';
import { loginStyle } from './Style';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    return (
      <Router>
        <React.Fragment>
          <div className={classes.wraper}>
            <Grid container justify="center" align="center">
              <Grid item xs={12} md={4}>
                <Paper>
                  <form className={classes.formstyle} noValidate autoComplete="off">
                    <Typography component="h1" className={classes.formhead} variant="h5" >Masuk</Typography>
                    <TextField id="outlined-basic" className={classes.formitem} label="Nama User" variant="outlined" /><br />
                    <TextField id="outlined-basic" className={classes.formitem} label="Kata Sandi" variant="outlined" /><br />
                    {/* <Button></Button> */}
                    <Link to="/admin">Masuk</Link>
                  </form>
                </Paper>
                {/* <Switch>
                  <Route path="/admin" component={admin} />
                </Switch> */}
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default withStyles(loginStyle)(Login);