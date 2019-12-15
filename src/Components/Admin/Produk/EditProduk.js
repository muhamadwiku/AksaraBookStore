import React,{Component} from 'react';
import {TextField, withStyles, makeStyles, Grid, Container,
   Button, Paper} from '@material-ui/core/';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
  font: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
}));

class EditProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name:'',
      salary:'',
      age:'',
      userid:0,
      users:[],
      id:this.props.location.id,
    };
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  editPost = () => {

    fetch(`http://dummy.restapiexample.com/api/v1/update/${this.state.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: this.state.name,
        salary: this.state.salary,
        age: this.state.age,
        id: this.state.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))

  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employee")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result,
            name:result.name,
            salary:result.salary,
            age: this.state.age,
            id:result.id,
          });
        },
        (error) => {
          console.log(error)
        }
      )

    fetch(`http://dummy.restapiexample.com/api/v1/update/${this.state.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result,
            name:result.name,
            salary:result.salary,
            age: result.age,
            id:result.id,
          });
        },                
        (error) => {
          console.log(error)   
        }
      )
  }

    render() {
      const {classes} = this.props;
        return (
            <Grid align='center'>
              <h2 className={classes.font} >Edit Data Barang</h2>
              <br/>
              <br/>
                <form className={classes.container} noValidate autoComplete="off">
                  <div>
                    <a>Nama :</a>
                    <TextField
                      required
                      id="name"
                      name="name"
                      className={classes.textField}
                      style={{width:500}}
                      margin="normal"
                      onChange={this.changeHandler}
                      value={this.state.employee_name}
                    />
                  </div>
                  <div>
                    <a>Harga :</a>
                    <TextField
                      required
                      id="salary"
                      name="salary"
                      className={classes.textField}
                      style={{width:500}}
                      margin="normal"
                      onChange={this.changeHandler}
                      value={this.state.employee_salary}
                    />
                  </div>
                  <div>
                    <a>Stok &nbsp;&nbsp;&nbsp;:</a> 
                    <TextField
                      required
                      id="age"
                      name="age"
                      className={classes.textField}
                      style={{width:500}}
                      margin="normal"
                      onChange={this.changeHandler}
                      value={this.state.employee_age}
                    />
                  </div>
                  <br/>
                  <Button variant="contained" color="primary" onClick={this.editPost}>
                    Submit
                  </Button>
                </form>
            </Grid>
        );
    }
}

export default withStyles(styles)(EditProduk)