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
            <Typography>
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

         <Container>
           <Typography component="h4" variant="h4">
             Daftar Buku
           </Typography>
           <hr/><br/>
           <Grid container>
           {items.map((item, i) => (
             <Grid key={item.id_listbuku} item xs={12} md={3}>
              <Card>
              <Container>
                <CardMedia className={classes.cardBook}>
                  <img className={classes.cardBookIMG} alt="catatan seorang em ainun nadjib" src={require('../image/bnr_sinau_bareng_markesot__w414_hauto.jpg')} />
                </CardMedia>
                <CardActionArea>
                  <Typography component="h6" variant="h6">
                   {item.judul}
                  </Typography>
                  <Typography component="p" variant="p">
                    {item.pengarang}
                  </Typography>
                  <Typography>
                    {item.harga}
                  </Typography>
                </CardActionArea>
                <CardActions>
                   <Link to={"/detail/"+item.id_listbuku}><Button> Beli Sekarang </Button></Link>
                </CardActions>
                </Container>
              </Card>
             </Grid>
             ))}
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