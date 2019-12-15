import React, { Component } from 'react';
import {Typography,Container, Paper, withStyles, Grid,Button } from '@material-ui/core/';
import {Link} from 'react-router-dom';

const styles = theme => ({
  boxitem:{
    background:'#757575',
    padding:10
  },
  linkMore:{
    textAlign:'right',
    background:'red',
  },
  font:{
    color:'white'
  },
});

class DetailProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id:this.props.location.id,
    };
  }

  componentDidMount() {
    fetch(`http://dummy.restapiexample.com/api/v1/employee/${this.state.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          
          this.setState({
            items: result,
            address: result.address
          });
        },                
        (error) => {
          console.log(error)   
        }
      )
  }

    render() {
      const {classes} = this.props;
      const item = this.state.items
        return (
            <Container fixed>
              <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Paper key={item.id} className={classes.boxitem}>

                      <Typography variant="h6" component="h2" className={classes.font}>
                        {item.employee_name}
                      </Typography>
                      <Typography  component="p" className={classes.font}>
                        Harga : {item.employee_salary}
                      </Typography>
                      <Typography component="p" className={classes.font}>
                        Stok &nbsp;&nbsp;&nbsp;&nbsp;: {item.employee_age}
                      </Typography>
                      <br/>
                      <Paper className={classes.linkMore}>
                      <Grid item xs={12} className={classes.linkMore}>
                            <Button variant="contained">
                              <Link to={{
                                  pathname: '/editPost',
                                  id: `${item.id}`,
                                }}>
                                Edit
                              </Link>
                            </Button>
                              &nbsp;
                            <Button variant="contained" onClick={()=>this.deletePost(item.id)}>
                                Hapus
                            </Button>
                          </Grid>
                          </Paper>
                    </Paper>
                  </Grid>
              </Grid>
            </Container>
        );
    }
}

export default withStyles(styles)(DetailProduk)