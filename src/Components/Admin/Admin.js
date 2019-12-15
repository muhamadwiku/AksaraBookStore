import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuList from '@material-ui/core/MenuList';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import User from './User';
import Add from './Add';
import Detail from './Detail';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ChatIcon from '@material-ui/icons/Chat';
import News from './News/News';
import AddNews from './News/AddNews';
import FlashSale from './FlashSale/FlashSale';
import CompanyProfil from './CompanyProfil/CompanyProfil';
import AddCompanyProfil from './CompanyProfil/AddCompanyProfil';
import AddProduct from './Product/AddProduct';
import Product from './Product/Product';
import AddBank from './Bank/AddBank';
import Bank from './Bank/Bank';
import AddBrands from './Brands/AddBrands';
import Transaksi from './Brands/Transaksi';
import AddPromo from "./Promo/AddPromo";
import Promo from "./Promo/Promo";
import Sliders from "./Sliders/Sliders";
import AddSliders from "./Sliders/AddSliders";
import Transaction from './Transaction/Transaction';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#A93092',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  ln: {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: "none"
    }
  },
  ld: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: "none"
    }
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>

          {/* ikon user & nama */}
          <center>
            <AccountCircleIcon style={{ fontSize: 80 }}>
            </AccountCircleIcon>
          </center>
          <center>
            <Typography><h4>Wanto</h4></Typography>
          </center>
          <Divider />

          {/* List Menu */}
          <div className={classes.paper}>
            <MenuList>
              <MenuItem>
                {/* <PeopleIcon>
                  <MailIcon fontSize="small" />
                </PeopleIcon> */}
                <Link style={{ marginLeft: 20 }} className={classes.ln} to="/admin" ><Button>Data Buku</Button></Link>
              </MenuItem>
              <MenuItem>
                {/* <PeopleIcon>
                  <MailIcon fontSize="small" />
                </PeopleIcon> */}
                <Link style={{ marginLeft: 20 }} className={classes.ln} to="/admin/transaksi" ><Button>Data Transaksi</Button></Link>
              </MenuItem>

              
              <Divider />
              <div align='center' style={{ marginTop: 20 }}>
                <Button
                  style={{ background: '#A93092' }}
                  variant="contained"
                  color="primary"
                  startIcon={<ExitToAppIcon />}
                >
                  <NavLink className={classes.ld} to="/" >Keluar</NavLink>
                </Button>
              </div>
            </MenuList>
          </div>
        </div>
      </Drawer>

      {/* Pindah Halaman */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Route path="/admin" exact  component={Bank} />
        <Route path="/admin/transaksi" component={Transaksi} />
        <Route path="/admin/User" component={User} />
        <Route path="/admin/Add" component={Add} />
        <Route path="/admin/Detail" component={Detail} />
        <Route path="/admin/AddBank" component={AddBank} />
        <Route path="/admin/AddBrands" component={AddBrands} />
        <Route path="/admin/Product" component={Product} />
        <Route path="/admin/AddProduct" component={AddProduct} />
        <Route path="/admin/AddPromo" component={AddPromo} />
        <Route path="/admin/Promo" component={Promo} />
        <Route path="/admin/Sliders" component={Sliders} />
        <Route path="/admin/AddSliders" component={AddSliders} />
        <Route path="/admin/News" component={News} />
        <Route path="/admin/AddNews" component={AddNews} />
        <Route path="/admin/FlashSale" component={FlashSale} />
        <Route path="/admin/CompanyProfil" component={CompanyProfil} />
        <Route path="/admin/AddCompanyProfil" component={AddCompanyProfil} />
        <Route path="/admin/Transaction" component={Transaction} />

      </main>
    </div>
  );
}