import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  withStyles,
  Typography,
  Card,
  CardMedia,
  Paper,
  Button,
  Divider,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Styles } from "./Style";
import { Link } from 'react-router-dom';

class DetailPembeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemf: {},
          itemk: this.props.match.params.id
        };
      }
    
      getData(id) {
        fetch(`http://beli.herokuapp.com/products/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                itemf: result.data
              });
            },
            (error) => {
              console.log(error)
            }
          )
      }
    
      componentDidMount() {
        const { id } = this.props.match.params;
        this.getData(id)
      }
  render() {
    const { classes } = this.props;
    const { itemf } = this.state;
    const { itemb } = this.state;
    const { itemk } = this.state;
    return (
      <Container style={{ marginTop: 100 }}>
        <Grid container>
        <Typography className={classes.hubk}>Detail Pembeli</Typography>
          <Typography className={classes.kank}>Pilih Metode Pembayaran</Typography>
        </Grid>
        <Grid container spacing={2}>
        <Grid item md ={5}>
            &nbsp;
            <Paper style={{height:280}}>
            &nbsp;
                <Typography>   
                <a className={classes.ukuran}>Nama Pembeli</a><a style={{marginLeft:200}}>{}</a>
                </Typography>
            &nbsp;
                <Typography>          
                <a className={classes.ukuran}>Alamat</a><a style={{marginLeft:200}}>{}</a>
                </Typography>
            &nbsp;
                <Typography>           
                <a className={classes.ukuran}>No Hp</a><a style={{marginLeft:200}}>{}</a>
                </Typography>
            &nbsp;
                <Typography>     
                <a className={classes.ukuran}>Email</a><a style={{marginLeft:200}}>{}</a>
                </Typography>
            &nbsp;
                <Typography>     
                <a className={classes.ukuran}>Pilihan Pembayaran</a><a style={{marginLeft:200}}>{}</a>
                <Radio style={{marginLeft:200,marginTop:-100}}></Radio>
                <img style={{ height:40,width:80,marginBottom:35}}src={require("../../A&F/Images/logo-bni.jpg")}/>
                <div className={classes.md}>
                <Radio style={{marginLeft:300,marginTop:-100}}></Radio>
                <img style={{ height:40,width:80,marginBottom:35}}src={require("../../A&F/Images/logo-bca.jpg")}/>
                </div>
                </Typography>
                
            </Paper>
        </Grid>
        <Grid item md={2}>
            {/* Kosong */}
        </Grid>
        <Grid item md={5} style={{marginLeft:'auto'}}>
        &nbsp;
        <Card style={{height:280}}>
            &nbsp;
                <Typography>
                <a className={classes.ukuran}>Total Harga Barang</a><a style={{marginLeft:200}}>{itemf.price}</a>
                </Typography>
            &nbsp;
                <Typography>
                <a className={classes.ukuran}>Biaya Kirim</a><a style={{marginLeft:278}}>15000</a>
                </Typography>
            &nbsp;
                <Typography>
                
                <a className={classes.ukuran}>Biaya Asuransi</a><a style={{marginLeft:250}}>30000</a>
                  </Typography>
            &nbsp;
                <Divider/>
            &nbsp;
                <Typography className={classes.ukuran}><center>Total</center><a style={{marginLeft:357}}>Rp 5093000</a></Typography>
            &nbsp; 
                <Button variant="contained" color="primary" style={{width:300,marginLeft:100,marginTop:15}}>
                <Link style={{textDecoration: 'none'}} to={`/KonfirmasiPembayaran/&{itemk}`}>
                    <Typography style={{color:'white'}}>Bayar</Typography>
                </Link>
                </Button>
            </Card>
        </Grid>
        </Grid>
        &nbsp;
        <Grid container>
        <Typography className={classes.hubk}>Informasi Buku</Typography>
        </Grid>
        &nbsp;
        
        <Grid container spacing={2}>
        <Grid item md ={5}>
            &nbsp;
            <Paper style={{height:780}}>
              <Typography>
              <a className={classes.ukuran}>Judul</a>
              </Typography>
            &nbsp;
              <Typography>
              <a className={classes.ukuran}>Nama Pengarang</a>
              </Typography>
            &nbsp;
            <Typography>
            <a className={classes.ukuran}>Tahun Terbit</a>
            </Typography>
            &nbsp;
                <Typography><a className={classes.ukuran}>Deskripsi</a>
                </Typography>
            </Paper>
        </Grid>
        <Grid item md={2}>
            {/* Kosong */}
        </Grid>
        
        </Grid>
      </Container>
    );
  }
}

export default withStyles(Styles)(DetailPembeli);
