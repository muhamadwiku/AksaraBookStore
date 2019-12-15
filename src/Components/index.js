import React, {Component} from 'react';
import '../App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link, Typography } from "@material-ui/core";


import Navbar from './Appbar/Appbar';
import utama from './Utama/Utama';
import DetailProduk from './DetailProduk/DetailProduk';
import DetailPembeli from './DetailPembeli/DetailPembeli';
import KonfirmasiPembayaran from './KonfirmasiPembayaran/KonfirmasiPembayaran';
import KontakKami from './KontakKami/KontakKami';

import LupaPass from './LupaPass/LupaPass';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer';





  class index extends Component {

    render() {
    const classes = this.props
      return ( 
        <div className={classes.wrapper}>
          <React.Fragment>
  
            <Navbar/>
                    
            {/* router link */}
            <Route path="/" exact component={utama}/>
            {/* <Route path="/detail/:id" componet={detail}/> */}
           
            <Route path="/detail-produk" component={DetailProduk} />
            <Route path="/detail-pembelian" component={DetailPembeli} />
            <Route path="/kontak-kami" component={KontakKami} />
            <Route path="/konfirmasi" component={KonfirmasiPembayaran} />

            <Route path="/lupa-password" component={LupaPass} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            {/* end of router link */}

            <div>
            <Footer/>
            </div>
          </React.Fragment>
          </div>
       );
    }
  }

  export default index;

