import {fade} from '@material-ui/core'


export const styleAppbar = theme => ({
  // nav \\
  Paper: {
    width: 1200,
  },
  logo: {
    width: 100,
    height: "auto",
  },
  nav: {
    alignContent: "right",
  },
  link: {
    display: "inline-block",
    marginLeft: 20,
    textDecoration: "none",
    '&:hover': {

      backgroundColor: "#D9A0A0",
      padding: 10,
    },
  },

  navBody: {
    backgroundColor: "white",
    boxShadow: "0px",
  },

  Navbar: {
    width: 1200,
    backgroundColor: "white",
    border: "none",
    background: "none",
  },

  navborder: {
    border: "none",
    boxShadow: "none",
  },

  linkText: {
    color: "black",
    textDecoration: "none",
  },


  //search style
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: "grey",
    },
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "black",
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  //end of search style

  // ed of nav
});