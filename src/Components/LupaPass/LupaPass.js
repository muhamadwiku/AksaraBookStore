import React, { Component } from 'react';
import { Box, Card, CardMedia, Button, Typography, withStyles, Container, Grid, CssBaseline, Avatar, FormControlLabel, Checkbox, Link, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './Style';

class LupaPass extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    return (

      <div className={classes.wraper}>
        <Container>
          <Grid container className={classes.grid1}>
            {/* Grid one */}
            <Grid item className={classes.gridlogin} xs={12} md={6}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Lupa Akun?
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Masukkan Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  {/* <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  /> */}
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                   Kirim Link
                  </Button>
                  <Grid container>
                    {/* <Grid item xs>
                      <Link href="#" variant="body2">
                        Lupa Password?
                      </Link>
                    </Grid> */}
                    {/* <Grid item>
                      <Link href="#" variant="body2">
                        {"Belum punya Akun? Buat Akun"}
                      </Link>
                    </Grid> */}
                  </Grid>
                </form>
              </div>
            </Container>
            </Grid>

            <Grid item className={classes.gridlogin} xs={12} md={6}>
              <Typography> 
                <img className={classes.cardM} alt="contact center" src={require('../image/logo-primary.png')} />
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </div>

    );
  }
}
export default withStyles(useStyles)(LupaPass);
