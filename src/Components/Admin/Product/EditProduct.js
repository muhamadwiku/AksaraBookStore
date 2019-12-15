import React, { Component } from 'react';
import {
    TextField, withStyles, makeStyles, Grid, Container,
    Button, Paper
} from '@material-ui/core/';

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

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',

            // Data
            items: [],
            name: '',
            price: '',
            stock: '',
            userid: 0,
            users: [],
            id: this.props.location.id,
        };
    }

    
    changeImage = (event) => {
        event.preventDefault()

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    handleUploadImage = (event) => {
        event.preventDefault();
        console.log(this.uploadInput)
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('https://beli.herokuapp.com/image', {
            method: 'PUT',
            body: data,
        }).then((response) => {
            console.log(response.json)
        });
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    editPost = () => {

        fetch(`http://https://beli.herokuapp.com/products/${this.state.id}`, {
          method: 'PUT',
          body: JSON.stringify({
            name: this.state.name,
            price: this.state.price,
            stock: this.state.stock,
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
        fetch("https://beli.herokuapp.com/all-products")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                users: result,
                name:result.name,
                price:result.price,
                stock: this.state.stock,
                id:result.id,
              });
            },
            (error) => {
              console.log(error)
            }
          )
    
        fetch(`http://https://beli.herokuapp.com/products/${this.state.id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result,
                name:result.name,
                price:result.price,
                stock: result.stock,
                id:result.id,
              });
            },                
            (error) => {
              console.log(error)   
            }
          )
      }

    render() {
        let { imagePreviewUrl } = this.state;
        const {classes} = this.props;

        return (
            <center>
                <div style={{ marginTop: 100 }}>

                    {/* Upload Gambar */}
                    <h2>Upload Gambar</h2>
                    <form onSubmit={this.handleUploadImage} >
                        <div>
                            <input ref={(ref) => { this.uploadInput = ref; }} onChange={this.changeImage}
                                type="file" />
                        </div>
                        <br />
                        <div>
                            <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Masukkan Nama File" />
                        </div>
                        <br />
                        <div>
                            <button className="i" type="button" onClick={this.handleUploadImage}>Upload</button>
                        </div>
                        <br />
                        <img src={imagePreviewUrl} alt="img" />
                    </form>

                    {/* Input data */}
                    <Grid style={{marginTop:50}}>
                        <h2 className={classes.font} >Edit Data Barang</h2>
                        <br />
                        <br />
                        <form className={classes.container} noValidate autoComplete="off">
                            <div>
                                <a>Nama :</a>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    className={classes.textField}
                                    style={{ width: 500 }}
                                    margin="normal"
                                    onChange={this.changeHandler}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <a>Harga :</a>
                                <TextField
                                    required
                                    id="price"
                                    name="price"
                                    className={classes.textField}
                                    style={{ width: 500 }}
                                    margin="normal"
                                    onChange={this.changeHandler}
                                    value={this.state.price}
                                />
                            </div>
                            <div>
                                <a>Stok &nbsp;&nbsp;&nbsp;:</a>
                                <TextField
                                    required
                                    id="stock"
                                    name="stock"
                                    className={classes.textField}
                                    style={{ width: 500 }}
                                    margin="normal"
                                    onChange={this.changeHandler}
                                    value={this.state.stock}
                                />
                            </div>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.editPost}>
                                Submit
                            </Button>
                        </form>
                    </Grid>
                </div>
            </center>
        );
    }
}

export default withStyles(styles)(EditProduct);
