import React, { Component } from "react";
import {
  Container,
  Grid,
  Box,
  withStyles,
  Typography,
  Card,
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
          // itemf: {},
          // itemk: this.props.match.params.id
        };
      }
    
      // getData(id) {
      //   fetch(`http://beli.herokuapp.com/products/${id}`)
      //     .then(res => res.json())
      //     .then(
      //       (result) => {
      //         this.setState({
      //           itemf: result.data
      //         });
      //       },
      //       (error) => {
      //         console.log(error)
      //       }
      //     )
      // }
    
      // componentDidMount() {
      //   const { id } = this.props.match.params;
      //   this.getData(id)
      // }

  render() {
    const { classes } = this.props;
    // const { itemf } = this.state;
    // const { itemb } = this.state;
    // const { itemk } = this.state;
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
                <a className={classes.ukuran}>Nama Pembeli</a><a style={{marginLeft:200}}>Surya Diraja</a>
                </Typography>
            &nbsp;
                <Typography>          
                <a className={classes.ukuran}>Alamat</a><a style={{marginLeft:200}}>Jl. Kemerdekaan No. 36, Pucangan, Boyolali </a>
                </Typography>
            &nbsp;
                <Typography>           
                <a className={classes.ukuran}>No Hp</a><a style={{marginLeft:200}}>087876287364</a>
                </Typography>
            &nbsp;
                <Typography>     
                <a className={classes.ukuran}>Email</a><a style={{marginLeft:200}}>suryaD454@gmail.com</a>
                </Typography>
            &nbsp;
                <Typography>     
                <a className={classes.ukuran}>Pilihan Pembayaran</a><a style={{marginLeft:200}}>{}</a>
                <div>
                <Radio style={{marginLeft:200,marginTop:-100}}></Radio>
                <img style={{ height:40,width:80,marginBottom:35}}src={require("../image/logo-bni.jpg")}/>
                </div>
                <div className={classes.md}>
                <Radio style={{marginLeft:300,marginTop:-100}}></Radio>
                <img style={{ height:40,width:80,marginBottom:35}}src={require("../image/logo-bca.jpg")}/>
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
                <a className={classes.ukuran}>Total Harga Barang</a><a style={{marginLeft:211}}>234000</a>
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
                <Typography className={classes.ukuran}><center>Total</center><a style={{marginLeft:357}}>Rp 279000</a></Typography>
            &nbsp; 
                <Button variant="contained" color="secondary" style={{width:300,marginLeft:100,marginTop:15}}>
                <Link to="/konfirmasi" style={{textDecoration: 'none'}}>
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
              <a className={classes.ukuran}>Judul</a> <a className={classes.ukuran}>: The Sky Is Everywhere</a> 
              </Typography>
            &nbsp;
              <Typography>
              <a className={classes.ukuran}>Nama Pengarang</a> <a className={classes.ukuran}>: Jandy Nelson</a>  
              </Typography>
            &nbsp;
            <Typography>
            <a className={classes.ukuran}>Tahun Terbit</a> <a className={classes.ukuran}>: October 05 th 2004</a>
            </Typography>
            &nbsp;
            <Typography component="h4" variant="h4">
               Deskripsi
             </Typography>
             <hr/> 
             &nbsp;
             <Typography style={{textAlign: "justify"}} component="p" variant="p">
             <div>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor felis, ullamcorper sit amet ultrices vitae, iaculis ut enim. Etiam luctus velit non tellus volutpat, et tristique tortor fermentum. Nullam sit amet imperdiet orci. Donec at fermentum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lacinia lectus, ut cursus diam. Vestibulum condimentum sodales arcu, et accumsan ex porta in. Praesent venenatis, diam eget accumsan laoreet, urna nunc fringilla lacus, vitae rutrum dolor ipsum ac nunc. Integer id justo ac quam tincidunt rhoncus. Vestibulum sed tristique diam. Morbi interdum metus dui, vitae posuere est dapibus vel. Ut velit massa, accumsan sit amet nisi non, dictum pulvinar sapien. Morbi libero mauris, suscipit vitae lectus sed, semper rhoncus elit. Curabitur commodo, nunc sit amet ultrices vulputate, eros velit accumsan nulla, quis porta arcu purus et nisi. Nam mollis tincidunt dolor id efficitur.
             </div><br/><br/>
             <div>
              Sed non nisi dolor. Mauris iaculis enim non consectetur commodo. In mollis diam in dolor malesuada, eleifend cursus neque vulputate. Nunc iaculis erat velit, nec semper velit porttitor eget. Aenean at mauris ut metus mattis tristique. Donec ullamcorper, nisl sit amet vestibulum posuere, lorem turpis lobortis erat, sit amet sollicitudin elit neque sed lacus. Donec ac justo dapibus, laoreet tortor quis, varius nisl. Nam malesuada ex vitae faucibus dapibus. Vivamus placerat eros eu dolor dapibus, eu lacinia sem dictum. Ut eget lorem tristique, bibendum mi eget, rhoncus felis.
              </div><br/><br/>
              <div>
              Fusce ut nisi vel felis consectetur interdum accumsan nec eros. Maecenas sollicitudin consequat nunc, a vulputate felis ultricies a. Donec ullamcorper fringilla venenatis. Fusce eu velit ex. Duis egestas pulvinar nisi, vulputate gravida diam hendrerit in. Quisque bibendum orci at sagittis porta. Suspendisse potenti. Ut placerat dignissim ultricies. Praesent porta libero quis arcu ornare, sed ultrices mauris finibus. Pellentesque rhoncus leo non odio aliquet, feugiat molestie orci interdum. In faucibus sem sapien. Ut sed tincidunt nunc, in dapibus massa. In tristique arcu et nisi egestas, eget eleifend quam consectetur. Proin aliquet ultricies massa non gravida. Fusce a venenatis elit.
              </div><br/><br/>
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
