import React, { Component } from 'react';
import { Typography, Container, Paper, withStyles, Grid, Button, Box } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const styles = theme => ({
  boxitem: {
    background: '#757575',
    padding: 10
  },
  linkMore: {
    textAlign: 'right',
    background: 'red',
  },
  font: {
    color: 'white'
  },
  title: {
    paddingTop: 10,
    background: '#bdbdbd',
    color: 'black',
  },
  ln: {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: "none"
    }
  },
  ft: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: "none"
    }
  },
});


class Produk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  deletePost = (id) => {
    console.log(id)
    fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    const { classes } = this.props;
    return (
      <Container fixed>
        <Box component="div" className={classes.title}>
          <Typography variant="h4" component="h3" align="center">
            Daftar Data Produk
              </Typography>
          <hr />
          <Box display="flex" justifyContent="flex-end" m={1}>
          <Button style={{background:'#757575', marginBottom:8}} 
          startIcon={<AddCircleOutlineIcon style={{ color: 'white' }}/>}>
            <Link className={classes.ft} to='/Admin/AddProduk'>
              Tambah Data
            </Link>
          </Button>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {this.state.items.map(item => (
            <Grid item xs={6}>

              <Paper key={item.id} className={classes.boxitem}>

                <Typography variant="h6" component="h2" className={classes.font}>
                  {item.employee_name}
                </Typography>
                <Typography component="p" className={classes.font}>
                  Harga : {item.employee_salary}
                </Typography>

                <Typography component="p" className={classes.font}>
                  Stok &nbsp;&nbsp;&nbsp;: {item.employee_age}
                </Typography>

                <br />
                <Paper className={classes.linkMore}>
                  <Grid item xs={12} className={classes.linkMore}>
                    <Button variant="contained" >
                      <Link className={classes.ln} to={{
                        pathname: '/Admin/Detail',
                        id: `${item.id}`,
                      }}>
                        More
                                </Link>
                    </Button>
                    &nbsp;
                            <Button variant="contained">
                      <Link className={classes.ln} to={{
                        pathname: '/Admin/Edit',
                        id: `${item.id}`,
                      }}>
                        Edit
                              </Link>
                    </Button>
                    &nbsp;
                            <Button variant="contained" onClick={() => this.deletePost(item.id)}>
                      Hapus
                            </Button>
                  </Grid>
                </Paper>

              </Paper>

            </Grid>
          ))}
        </Grid>

      </Container>
    );
  }
}

export default withStyles(styles)(Produk)