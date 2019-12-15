import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from './Style';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            category: '',
            brand: '',
            weight: '',
            color: '',
            description: '',
            productionYear: '',
            stock: '',
            image: '',
            imagePreviewUrl: null
        }
    }

    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: image,
                imagePreviewUrl: reader.result
            })
        }

        reader.readAsDataURL(image)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerSimpan = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('name', this.state.name);
        data.append('price', this.state.price);
        data.append('category', this.state.category);
        data.append('brand', this.state.brand);
        data.append('weight', this.state.weight);
        data.append('color', this.state.color);
        data.append('description', this.state.description);
        data.append('productionYear', this.state.productionYear);
        data.append('stock', this.state.stock);
        data.append('image', this.uploadInput.files[0]);
        fetch('https://beli.herokuapp.com/products', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
        }
        ).then(json => console.log(json))


    }

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Data
                    </Typography>
                    <hr />

                </Box>
                <Paper className={classes.root}>
                    <Container align='center' style={{ width: 500 }}>
                        <form className={classes.form} noValidate onSubmit={this.handlerSimpan}>
                            <div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Nama Produk"
                                        name="name"
                                        autoComplete="name"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="price"
                                        label="Harga"
                                        name="price"
                                        className={classes.tf}
                                        autoComplete="price"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="category"
                                        label="Kategory : 5de4ea4c9378c55a3ef4fba6"
                                        name="category"
                                        autoComplete="category"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="brand"
                                        label="Merk : 5de72272a4502443e49850cf"
                                        name="brand"
                                        autoComplete="brand"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="weight"
                                        label="Berat"
                                        name="weight"
                                        className={classes.tf}
                                        autoComplete="weight"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="color"
                                        label="Warna"
                                        name="color"
                                        autoComplete="color"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="description"
                                        label="Deskripsi"
                                        name="description"
                                        autoComplete="description"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="stock"
                                        label="Stok"
                                        name="stock"
                                        className={classes.tf}
                                        autoComplete="stock"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="productionYear"
                                        label="Tahun Produksi"
                                        name="productionYear"
                                        autoComplete="productionYear"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className={classes.tf}>
                                    <input ref={(ref) => {
                                        this.uploadInput = ref;
                                    }} onChange={this.changeImage} type="file" />
                                    <Paper style={{ margintop: 20 }}>
                                        <img src={this.state.imagePreviewUrl} alt="img" />
                                    </Paper>
                                </div>
                            </div>
                        </form>
                    </Container>
                    <center>
                        <Button
                            align='center'
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.tf}
                            onClick={this.handlerSimpan}
                        >
                            Simpan
                    </Button>
                    </center>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(AddProduct)