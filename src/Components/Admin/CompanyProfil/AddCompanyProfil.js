import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from './Style';

class AddCompanyProfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            phone: '',
            fax: '',
            email:'',
            website:'',
        }
    }

    

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }

    handlerSimpan = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('address', this.state.address);
        data.append('phone', this.state.phone);
        data.append('fax', this.state.fax);
        data.append('email', this.state.email);
        data.append('website', this.state.website);
        fetch('https://beli.herokuapp.com/company-profiles', {
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
                        Tambah Data Company
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
                                        id="address"
                                        label="Alamat"
                                        name="address"
                                        autoComplete="address"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="No. Tlp"
                                        name="phone"
                                        className={classes.tf}
                                        autoComplete="phone"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="fax"
                                        label="Fax"
                                        name="fax"
                                        className={classes.tf}
                                        autoComplete="fax"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="website"
                                        label="Website"
                                        name="website"
                                        autoComplete="website"
                                        className={classes.tf}
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

export default withStyles(Styles)(AddCompanyProfil)