import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from './Style';

class AddBrands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerSimpan = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('code', this.state.code);
        data.append('name', this.state.name);
        fetch('https://beli.herokuapp.com/brands', {
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
                <Box component="div" >
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Data Brands
                    </Typography>
                    <hr />
                </Box>
                <Paper>
                    <Container align='center' style={{width:500}}>
                        <form className={classes.form} noValidate onSubmit={this.handlerSimpan}>
                            <div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="code"
                                        label="Kode, contoh: #Apple"
                                        name="code"
                                        autoComplete="code"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Brands"
                                        name="name"
                                        className={classes.tf}
                                        autoComplete="name"
                                        onChange={this.changeHandler}
                                    />
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

export default withStyles(Styles)(AddBrands)