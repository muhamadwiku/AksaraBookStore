import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { detail } from './Style';

import Img from 'react-image';
import { Link } from 'react-router-dom';

class DetailProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }



  render() {
  
    const { classes } = this.props;
    
    // const MyLink = props => <Link to="/detilberita" {...props} />;

    return (
      <div className={classes.wraper}>
       <Container>
       &nbsp;
         <Grid container>
           <Grid item xs={12} md={12}>
             
           
             <Container>
             <Grid container>
               <Grid item md={5}>
                 <Typography className={classes.detailBox}>
                   <img className={classes.detailImg} alt="detail dari buku" src={require('../image/image1.jpg')} />
                 </Typography>
               </Grid>
               
               <Grid item md={7}>
                 <Grid container>
                   <Grid item md={6}>
                   <Typography component="h6" variant="h6">
                    Judul
                   </Typography>
                    <Typography component="h6" variant="h6">
                    Pengarang
                   </Typography>
                   <Typography component="h6" variant="h6">
                    Terbitan
                   </Typography>
                   <Typography component="h6" variant="h6">
                    Harga
                   </Typography>
                   </Grid>
                   <Grid item md={6}>
                   <Typography component="h6" variant="h6">
                   : The Sky Is Everywhere
                   </Typography>
                    <Typography component="h6" variant="h6">
                    : Jandy Nelson 
                   </Typography>
                   <Typography component="h6" variant="h6">
                   : October 05 th 2004
                   </Typography>
                   <Typography component="h6" variant="h6">
                   Rp. 234.000,-
                   </Typography>
                   <Link to="/detail-pembelian" className={classes.BtnText} > <Button variant="contained" color="secondary"  className={classes.BtnText} >Beli Sekarang</Button> </Link>
                   </Grid>
                 </Grid>
               </Grid>

             </Grid>
             </Container>  
            

           </Grid>
           &nbsp;

           <Grid item md={12}>
             <Typography className={classes.text} component="h4" variant="h4">
               Deskripsi
             </Typography>
             <hr/> <br/><br/>
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
           </Grid>


         </Grid>
       </Container>
      </div>
    );
  }
}

export default withStyles(detail)(DetailProduk);