import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { styleHome } from './Style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'react-image';
import { Link } from 'react-router-dom';

// footer


class utama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://aplikasigis.000webhostapp.com/api/aksara/list_buku.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
        (error) => {
          console.log(error)
        }
      )

  //   fetch("http://kampustelkom.herokuapp.com/api/slider")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           slides: result.content
  //         });
  //       },
  //       (error) => {
  //         console.log(error)
  //       }
  //     )
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { classes } = this.props;
    // const { slides } = this.state;
    const { items } = this.state;
    // const MyLink = props => <Link to="/detilberita" {...props} />;

    return (
      <div className={classes.wrappers}>
        <div className={classes.bgslider}>
         <Container>
         <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.headers}>
            <Typography className={classes.headersText}>
              Aksara Toko buku online
              Terlengkap
            </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            
              <div className={classes.containerslide}>
                <Slider {...settings}>
                  <div className={classes.slickSlideImg}>
                    <Img className={classes.slider} alt="banner" src={require('../image/slider1.jpg')} />
                  </div>
                  <div>
                    <Img className={classes.slider} alt="banner" src={require('../image/slider2.jpg')} />
                  </div>
                  <div>
                    <Img className={classes.slider} alt="banner" src={require('../image/slider3.jpg')} />
                  </div>
                </Slider>
              </div>
            
          </Grid>
        </Grid>
         </Container>
         </div>
         &nbsp;
         <Container>
           <Typography className={classes.text} component="h4" variant="h4">
             Daftar Buku
           </Typography>
           <hr/><br/>
           <Grid container justify="center" alignItems="center" spacing={3}>
           {/* {items.map((item, i) => ( */}

           
          {/* The Sky Is Everywhere */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image1.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  The Sky Is Everywhere
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Jandy Nelson 
                  </Typography>
                  <Typography>
                   Rp 165.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

             
          {/* Passenger */}
            <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image2.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Passenger
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Alexandra Bracken  
                  </Typography>
                  <Typography>
                   Rp 215.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

          
          {/* The Truth About Forever */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image3.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  The Truth About Forever
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Sarah Dessen  
                  </Typography>
                  <Typography>
                   Rp 120.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>
             
             
          
          {/* Crooked Kingdom */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image4.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  The Truth About Forever
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Leigh Bardugo
                  </Typography>
                  <Typography>
                   Rp 98.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

             
          {/* Two-Way Street */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image5.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Two-Way Street
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Lauren Barnholdt
                  </Typography>
                  <Typography>
                   Rp 110.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

             
          {/* Dreamland */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image6.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Dreamland
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Sarah Dessen
                  </Typography>
                  <Typography>
                   Rp 148.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

              {/* Rekayasa Perangkat Lunak */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image7.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Rekayasa Perangkat Lunak
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Informatika
                  </Typography>
                  <Typography>
                   Rp 47.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

             {/* Buku Sakti Pemrograman Web HTML, CSS, PHP, MySQL dan JavaScript */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image8.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Buku Sakti Pemrograman Web HTML, CSS, PHP, MySQL dan JavaScript
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Didik Setiawan 
                  </Typography>
                  <Typography>
                   Rp 50.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

             {/* Jalan Pintas Menjadi Master ReactJS + CD Tutorial */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image9.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Jalan Pintas Menjadi Master ReactJS + CD Tutorial
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Lukmanul Hakim 
                  </Typography>
                  <Typography>
                   Rp 180.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

              {/* Hacking Password */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image10.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Hacking Password
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Hasnul Arifin
                  </Typography>
                  <Typography>
                   Rp 32.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

                 {/* Analisis dan Perancangan Sistem Basis Data */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image11.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  Analisis dan Perancangan Sistem Basis Data
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Wahyuni Reksoatmodjo
                  </Typography>
                  <Typography>
                   Rp 76.000-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>

             
                 {/* SQL Server 2012 */}
          <Grid item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/image12.jpg')} />
                </CardMedia>
                &nbsp;
                <CardActionArea>
                 <Typography className={classes.imgtext} component="h6" variant="h6">
                  SQL Server 2012
                  </Typography>
                  &nbsp;
                  <Typography component="p" variant="p">
                  Wahana Komputer
                  </Typography>
                  <Typography>
                   Rp 49.200-
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail-produk/"}><Button variant="contained" color="secondary"  className={classes.BtnText}> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>
           
             {/* ))} */}
           </Grid>
           
         </Container>
        {/* <Container>
          <Footer/>
        </Container> */}
      </div>
    );
  }
}

export default withStyles(styleHome)(utama);