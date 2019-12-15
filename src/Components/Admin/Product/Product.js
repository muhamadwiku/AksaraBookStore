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

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemt: [],
      itemNo: 1,
    };
  }

  componentDidMount() {
    fetch("http://beli.herokuapp.com/all-products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemt: result.data
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
            Daftar Data Produk
              </Typography>
          <hr />
          <Box display="flex" justifyContent="flex-end" m={1}>
            <Button style={{ background: '#757575', marginBottom: 8 }}
              startIcon={<AddCircleOutlineIcon style={{ color: 'white' }} />}>
              <Link className={classes.ft} to='/Admin/AddProduct'>
                Tambah Data
            </Link>
            </Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {itemt.map((card, i) => (
            <Grid item key={card._id} xs={12}>
              <Paper className={classes.boxitem}>
                <Grid container spacing={3}>
                  <Grid>
                    <CardMedia
                      className={classes.cardMedia}
                      title="Image title"
                    >
                      <img style={{ width: 200 }} className={classes.img}
                        src={`http://beli.herokuapp.com/image/${card.imageId}`} />
                    </CardMedia>
                  </Grid>

                  <Grid style={{ marginTop: 20 }}>
                    <Box style={{ height: 80, marginLeft: 10 }}>
                      <Typography style={{ fontSize: 18, color: "white", fontWeight: 'bold' }}>
                        {card.name}
                      </Typography>
                    </Box>

                    &nbsp;
                  <Box style={{ marginLeft: 10 }}>
                      <Typography style={{ marginTop: -50, color: "white", fontWeight: 'bold' }}>Rp {card.price}</Typography>
                      &nbsp;
                    <Typography style={{ color: "white", fontWeight: 'bold' }}>Stock ({card.stock})</Typography>
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
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(Styles)(Product);