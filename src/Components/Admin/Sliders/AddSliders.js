import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from './Style';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            code: '',
            image:'',
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
        this.setState({ [event.target.description]: event.target.value })
    }

    handlerSimpan = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('title', this.state.title);
        data.append('description', this.state.description);
        data.append('code', this.state.code);
        data.append('image', this.uploadInput.files[0]);
        fetch('https://beli.herokuapp.com/slider', {
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
                        Tambah Data Slider
                    </Typography>
                    <hr />
                </Box>
                <Paper className={classes.root}>
                    <Container align='center' style={{width:500}}>
                        <form className={classes.form} noValidate onSubmit={this.handlerSimpan}>
                            <div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="title"
                                        label="Judul"
                                        name="title"
                                        className={classes.tf}
                                        autoComplete="title"
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
                                <div className={classes.tf}>
                                    <input ref={(ref) => {
                                        this.uploadInput = ref;
                                    }} onChange={this.changeImage} type="file" />
                                    <Paper style={{margintop:20}}>
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