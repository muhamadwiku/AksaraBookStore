import React, { Component } from "react";
import {
    Container,
    Grid,
    Typography,
    withStyles,
    Box,
    CardMedia,
    Paper,
    Button
} from "@material-ui/core";
import { Styles } from "./Style";
import 'react-owl-carousel2/src/owl.theme.default.css';
import 'react-owl-carousel2/lib/styles.css';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class Transaksi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemt: [],
            itemNo: 1,
        };
    }

    componentDidMount() {
        fetch("http://www.json-generator.com/api/json/get/bGLmkZbkEi?indent=2")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        itemt: result
                    });
                },
                (error) => {
                    console.log(error)
                }
            )

    }

    render() {
        const { itemt } = this.state
        const { classes } = this.props;


        return (
            <Container>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Daftar Penjualan
              </Typography>
                    <hr />
                    <Box display="flex" justifyContent="flex-end" m={1}>
                        <Button style={{ background: '#757575', marginBottom: 8 }}
                            startIcon={<AddCircleOutlineIcon style={{ color: 'white' }} />}>
                            <Link className={classes.ft} to='/Admin/AddBrands'>
                                Tambah Data
            </Link>
                        </Button>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    {itemt.map((card, i) => (
                        <Grid item key={card._id} xs={12}>
                            <Paper className={classes.boxitem}>

                                <Grid style={{ marginTop: 10 }}>
                                    <Box style={{ marginLeft: 10 }}>
                                        <Typography style={{ color: "white", fontWeight: 'bold' }}>
                                            User : {card.user}</Typography>
                                        &nbsp;: 
                                        <Typography style={{ color: "white", fontWeight: 'bold' }}>
                                            Judul : ({card.judul})</Typography>
                                        &nbsp;
                                            <Typography style={{ color: "white", fontWeight: 'bold' }}>
                                            Date : ({card.date})</Typography>
                                        &nbsp;
                                            <Typography style={{ color: "white", fontWeight: 'bold' }}>
                                            Harga : ({card.total_beli})</Typography>
                                    </Box>

                                    <br />
                                    <div className={classes.linkMore}>
                                        <Grid item xs={12} className={classes.linkMore}>
                                            <Button variant="contained" style={{ marginLeft: 10 }}>
                                                <Link className={classes.ln} to={{
                                                    pathname: '/Admin/Detail',
                                                    // id: `${item.id}`,
                                                }}>
                                                    More
                                                     </Link>
                                            </Button>
                                            <Button variant="contained" style={{ marginLeft: 10 }}>
                                                <Link className={classes.ln} to={{
                                                    pathname: '/Admin/Edit',
                                                    // id: `${item.id}`,
                                                }}>
                                                    Edit
                                                     </Link>
                                            </Button>
                                            <Button variant="contained" style={{ marginLeft: 10 }}>
                                                Hapus
                                                </Button>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default withStyles(Styles)(Transaksi);