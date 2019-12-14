import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Container,
  Link,
  Paper
} from "@material-ui/core";

function Socialmedias() {
  return (
    <div>
      <Grid container align="center" style={{marginTop:100}}>
          <Grid item md={2}><img style={{ width: 100 ,height: "auto" }}
                src={require("../image/logo-primary.png")}
              />
            </Grid>
            <Grid item md={3}>
              <Typography><a style={{ fontSize: 16, fontWeight: 800 }}>Situs jual beli online mudah & terpercaya</a></Typography></Grid>
        {/* Kosong */}
        <Grid item md={3}></Grid>
        {/* Text */}
        <Grid item md={4}>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <div>
                <Typography style={{ textAlign: "right" }}>
                  Temukan kami di:
                </Typography>
              </div>
            </Grid>
        {/* Logo */}
            <Grid item md={6}>
              <Typography
                variant="body2"
                align="center"
                style={{ marginBottom: 5, textAlign: "left" }}
              >
                <img
                  className="footer-icon"
                  alt="telkom social medias"
                  src={require("../image/default_facebook.png")}
                  style={{ width: 25, height: 25,marginRight:15}}
                />
                <img
                  className="footer-icon"
                  alt="telkom social medias"
                  src={require("../image/default_instagram.png")}
                  style={{ width: 25, height: 25,marginRight:15 }}
                />
                <img
                  className="footer-icon"
                  alt="telkom social medias"
                  src={require("../image/default_twitter.png")}
                  style={{ width: 25, height: 25,marginRight:15 }}
                />
                <img
                  className="footer-icon"
                  alt="telkom social medias"
                  src={require("../image/default_youtube.png")}
                  style={{ width: 25, height: 25,marginRight:15 }}
                />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* CopyRight */}
      <div style={{ backgroundColor: "#A93092", marginTop: 40,height:40}}>
        <Typography variant="body2" align="center">
          <a style={{ color: "white",marginTop:10, display:"inline-block" }}>
            Copyright 2019 © Aksara Foundation. All Rights Reserved. |
            support@Aaksarabookstrore.com
          </a>{" "}
        </Typography>
      </div>
    </div>
  );
}

class Footer extends Component {
  render() {
    return (
      <div>
          <hr  style={{marginTop:150}}/>

        <Container style={{ marginTop: 100 }}>
          <Grid container spacing={2}>
              {/* Jaminan */}
            <Grid item md={2} xs={2} lg={2}>
              <img
                style={{ width: 64, height: 64 }}
                src={require("../image/jaminan.png")}
              />
              <Typography style={{ marginBottom: 6 }}>
                <a style={{ fontSize: 12, fontWeight: 800 }}>
                  Jaminan 100% Aman
                </a>{" "}
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                Payment system Toko Buku Aksara menjamin keamanan uang Anda dalam
                bertransaksi. Pelajari amannya Blanja 
              </Typography>
            </Grid>
            {/* Buka Dompet */}
            <Grid item md={2} xs={2} lg={2}>
              <img
                style={{ width: 64, height: 64 }}
                src={require("../image/bukadompet.png")}
              />
              <Typography style={{ marginBottom: 6 }}>
                <a style={{ fontSize: 12, fontWeight: 800 }}>
                  {" "}
                  Kemudahan Pembayaran
                </a>{" "}
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                toko Buku aksara menyediakan berbagai metode pembayaran untuk
                bertransaksi
              </Typography>
            </Grid>
            {/* Cs */}
            <Grid item md={2} xs={2} lg={2}>
              <img
                style={{ width: 64, height: 64 }}
                src={require("../image/cs.png")}
              />
              <Typography style={{ marginBottom: 6 }}>
                <a style={{ fontSize: 12, fontWeight: 800 }}>
                  {" "}
                  Customer Support yang Responsif
                </a>{" "}
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                CS Toko Buku Aksara siap membantu Anda melalui e-mail, media sosial dan
                call center (021-80863539)
              </Typography>
            </Grid>
            {/* Pengiriman */}
            <Grid item md={2} xs={2} lg={2}>
              <img
                style={{ width: 64, height: 64 }}
                src={require("../image/pengiriman.png")}
              />
              <Typography style={{ marginBottom: 6 }}>
                <a style={{ fontSize: 12, fontWeight: 800 }}>
                  {" "}
                  Berbagai Jasa Pengiriman
                </a>{" "}
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                Toko Buku Aksara menyediakan berbagai pilihan jasa pengiriman dengan
                jangkauan nasional
              </Typography>
            </Grid>
            {/* Komunitas */}
            <Grid item md={2} xs={2} lg={2}>
              <img
                style={{ width: 64, height: 64 }}
                src={require("../image/komunitas.png")}
              />
              <Typography style={{ marginBottom: 6 }}>
                <a style={{ fontSize: 12, fontWeight: 800 }}>
                  {" "}
                  6 Manfaat untuk Pelapak
                </a>{" "}
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                Dapatkan keuntungan seperti akses ke komunitas Toko Buku Aksara serta
                tips dan trik berjualan online
              </Typography>
            </Grid>
            {/* Mobile */}
            <Grid item md={2} xs={2} lg={2}>
              <img
                style={{ marginTop: "20" }}
                src={require("../image/apps.png")}
              />
              <Typography style={{ marginBottom: 6 }}>
                <a style={{ fontSize: 12, fontWeight: 800 }}>
                  {" "}
                  Kemudahan Akses Mobile
                </a>{" "}
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                Download aplikasi Aksara Book Store di Android dan iOS. Nikmati
                kemudahan jual beli dari gadget Anda
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Socialmedias />
      </div>
    );
  }
}

export default Footer;
