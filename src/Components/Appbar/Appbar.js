import React, { Component } from 'react';
import { Route, Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Grid, withStyles, Container, Paper } from "@material-ui/core";
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { styleAppbar } from './Style';

//search
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

//material icons
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;
    const MyLink = props => <Link to="/akademik" {...props} />;


    return (
      <div className={classes.navBody}>
        <center>
          <Paper className={classes.Paper}>
            <Grid container justify="flex-end" alignitems="center">
              <Grid item xs={6} md={1}>
              <Link to="/login"> <Button>Login</Button> </Link>
              </Grid>
              <Grid item xs={6} md={1}>
              <Link to="/register"> <Button>Register</Button> </Link>
              </Grid>
              <Grid item xs={6} md={2}>
                <Link to="/kontak-kami"> <Button>Kontak Kami</Button> </Link>
              </Grid>
            </Grid>
          </Paper>

          {/* <Container> */}
          {/* app bar */}
          <AppBar position="static" className={classes.Navbar}>
            <Toolbar className={classes.navborder}>
              <Grid container>
                <Grid item md={1}>
                  <Typography variant="h6">
                    <NavLink to="/" exact>
                      <img className={classes.logo} alt="telkom university logo" src={require('../image/logo-primary.png')} />
                    </NavLink>
                  </Typography>
                </Grid>
              </Grid>

              <Grid container justify="flex-end">
                <Grid item xs={6} md={3}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Typography style={{ color: "black" }}>
                    <ShoppingCartRoundedIcon />
                  </Typography>
                 
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          {/* end of app bar */}
          {/* </Container> */}
        </center>
      </div>
    );
  }
}

export default withStyles(styleAppbar)(Navbar);