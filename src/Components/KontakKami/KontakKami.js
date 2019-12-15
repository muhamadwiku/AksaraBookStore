import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  withStyles,
  Typography,
  Card
} from "@material-ui/core";
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import { Styles } from "./Style";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class KontakKami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemf: [],
    };
  }

  componentDidMount() {
    fetch(" http://www.json-generator.com/api/json/get/cpOlwQPYGG?indent=2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemf: result
          });
          console.log(this.state.itemf)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    const { itemf } = this.state
    const { classes } = this.props;
    console.log(this.state)
    return (
      <Container style={{ marginTop: 100 }}>
        {/* Logo */}
        <Grid container >
          <Grid item md={6} xs={12}>
            <img
              style={{ width: 500, height: "auto" }}
              src={require("../image/cs.jpg")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Bantuan */}
            <Grid container className={classes.urutanText}>
              <Typography className={classes.text}>Bantuan</Typography>
              <Typography className={classes.sem}>Lihat Semua</Typography>
            </Grid>
            {/* Pertayaan */}
            <Grid container spacing={2}>
              <Grid item md={12} >
                <Card>Email</Card>
              </Grid>
            </Grid>
            {/* Jawaban */}
            <Grid container spacing={2}>
              <Grid item md={12} >
                <Card>Pertanyaan</Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        &nbsp;

        &nbsp;
        {/* Hubungi Dan Kantor */}
        <Grid container>
          <Typography className={classes.hubk}>Hubungi Kami</Typography>
          <Typography className={classes.kank}>Kantor Kami</Typography>
        </Grid>
        &nbsp;
        {/* Ukuran Hubungi */}
        <Grid container spacing={2}>
          <Grid item md={5} xs={5}>
            <Card style={{ height: 315 }}>
              {itemf.map((item, i) => {
                return (
                  <div>
                    <Typography style={{ marginBottom: 20 }}>Anda memiliki pertanyaan lebih
                    lanjut seputar blanja.com ?
                 </Typography>
                    &nbsp;
                 <Typography>Alamat : {item.alamat}</Typography>
                    &nbsp;
                 <Typography>Phone : {item.phone}</Typography>
                    &nbsp;
                 <Typography>Fax : {item.fax}</Typography>
                    &nbsp;
                 <Typography>Email : {item.email}</Typography>
                    &nbsp;
                 <Typography>Website : {item.website}</Typography>
                  </div>
                )
              })}

            </Card>
          </Grid>
          {/* Ukuran Kantor */}
          <Grid item md={5} xs={5}>
            <iframe style={{ marginLeft: 140 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1066802897376!2d106.82177231476987!3d-6.380228995383299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebe164ac8d37%3A0xd9fcca05561df698!2sDigital%20Innovation%20Lounge!5e0!3m2!1sid!2sid!4v1576328726518!5m2!1sid!2sid" width="560" height="315" frameborder="0" ></iframe>

          </Grid>
        </Grid>
      </Container>
    );
  }
}


export default withStyles(Styles)(KontakKami);
