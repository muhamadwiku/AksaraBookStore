import Background from '../image/bg-2.jpg';

export const styleHome = theme => ({
  //  home 
  bannerRoot:{
    width: 'auto',
    height: 670,
  },
  bannerImage:{
    width: 'auto',
    height: 475,
  },
  banner: {
    width: 1200,
    height: "auto",
  },
  cardM: {
    width: 600,
  },
  cardMedia: {
    width: 'auto',
    height :400,
  },
  cardMediaImage: {
    width: "100%",
    height :"100%",
  },

  containerslide: {
    width: 'auto',
    height: 'auto',
    marginTop: '3%',
    borderRadius: 10,
  },
  
  slickSlideImg : {
    height: '100%',
    width: '100%',
    border: '2.5 solidwhite',
    boxSizing: 'borderbox',
    borderRadius: 10,
  },

  slideImg: {
    width: 1200,
    height: "100%",
  },

  slider: {
    width: 700,
    height: "auto",
  },

  // 
  headers: {
    height: 600,
  },
  // 

  //card home
  bgslider: {
    minHeight: 500,
    backgroundAttachment: "fixed",
    backgrondPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${Background})`,
    objectFit: "cover",
  },

  cardBook: {
    width: 200,
    height: 300,
  },

  cardBookIMG: {
    width: "100%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  // endof card home

  // end of home
   });