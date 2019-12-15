import React,{Component} from 'react'
import {TextField, withStyles, makeStyles,Button,Box} from '@material-ui/core'

const styles = makeStyles(theme => ({
  container:{
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 250,
  },
  select: {
    marginLeft: theme.spacing(1),
    marginRight : theme.spacing(1),
    minWidth:250,
  },
}));


class AddProduk extends Component {

  constructor(props){
    super(props);
    this.state = {
      items:[],
      name:'',
      salary:'',
      age:'',
      userid:0,
      users:[]
    };
  }

  changeHandler = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  simpan = () => {
    fetch('http://dummy.restapiexample.com/api/v1/create',{
      method:'POST',
      body: JSON.stringify({
        name: this.state.name,
        salary: this.state.salary,
        age: this.state.age,
        id: this.state.id
      }),
      headers: {
        "Content-type" : "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  componentDidMount(){
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => res.json())
    .then (
      (result) => {
        this.setState({
          users : result
        });
      },
      (error) => {
        console.log(error)
      }
    )

  }
  render(){
    const {classes} = this.props;
    return(
      <Box align='Center' fixed>
          <form className={classes.container} noValidate autoComplete="off">
            <div>
            <h2 className="fontblog">
            Masukan Data Produk</h2>
              <TextField
                required
                id = "name"
                label = "Nama"
                name = "name"
                className={classes.textField}
                margin="normal"
                onChange={this.changeHandler}
                />
            </div>

            <div>
              <TextField
                required
                id = "salary"
                label = "Harga"
                name = "salary"
                className={classes.textField}
                margin="normal"
                onChange={this.changeHandler}
                />
            </div>

            <div>
              <TextField
                required
                id = "age"
                label = "Stok"
                name = "age"
                className={classes.textField}
                margin="normal"
                onChange={this.changeHandler}
                />
            </div>
            <p/>
              <Button style={{width: 200}} variant="contained" color="primary" onClick={this.simpan}>
                Simpan
              </Button>
          </form>
      </Box>
    );
  }
}
export default withStyles(styles)(AddProduk)