import React, { Component } from "react";
import {
  Container,
  Grid,
  Typography,
  CardMedia,
  Paper
} from "@material-ui/core";
import { Styles } from "./Style";
import { withStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

class KonfirmasiPembayaran extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container style={{ marginTop: 100 }}>
        <Paper>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <CardMedia
                style={{ width: 64, height: 64 }}
                className={classes.cardMedia}
                image={require("../image/jaminan.png")}
                title="Image title"
              />
            </Grid>
            <Grid item md={8}>
              <Typography style={{ fontSize: 16,fontWeight:'bold'}}>
              Selalu waspada terhadap pihak tidak bertanggung jawab
              </Typography>
              &nbsp;
              <Typography>
              Jangan lakukan pembayaran dengan nominal yang berbeda dengan yang tertera pada tagihan kamu.
              Jangan lakukan transfer di luar nomor rekening atas nama Bukalapak.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        &nbsp;
        <Grid container spacing={2} className={classes.urutanText}>
          <Typography className={classes.bar}>
            <h4 align="center" className={classes.font}>
              Pembayaran Via Transfer Bca
            </h4>
          </Typography>
        </Grid>
        <Grid container spacing={2}>
            <Grid item md={3}>
                {/* Kosong */}
            </Grid>
            <Paper>
            <center>
            <Grid item md={6} style={{width:800,height:450}}>
                <Typography>
                <a style={{fontSize:18,fontWeight:'bold'}}>Batas pembayaran 10jam 20 menit 30 detik</a>
                </Typography>
                &nbsp;
                <Typography style={{marginTop:50,}}><a style={{fontSize:18}}>Jumlah Tagihan</a></Typography>
                &nbsp;
                <Typography>
                <a style={{fontSize:18,fontWeight:'bold'}}>Rp  279000</a> 
                </Typography>
                &nbsp;
                <Typography>
                <a style={{fontSize:18,fontWeight:'bold'}}>Nomor Rekening BCA</a> 
                </Typography>
                &nbsp;
                <Typography>
                <a style={{fontSize:18}}>5120468213</a> 
                </Typography>
                &nbsp;
                <img style={{ height:50,width:150,marginTop:20 }}src={require("../image/logo-bca.jpg")}/>
            </Grid>
            </center>
            </Paper>
            <Grid item md={3}>
                {/* Kosong */}
            </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(Styles)(KonfirmasiPembayaran);
