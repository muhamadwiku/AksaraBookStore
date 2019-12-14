import React, {Component} from 'react';
import '../App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link, Typography } from "@material-ui/core";


import Navbar from './Appbar/Appbar';
import utama from './Utama/Utama';


import Login from './Login/Login';
import Footer from './Footer/Footer';



  class index extends Component {

    render() {
    const classes = this.props
      return ( 
        <div className={classes.wrapper}>
          <React.Fragment>
  
            <Navbar/>
                    
            {/* router link */}
            <Route path="/" component={utama}/>
            {/* <Route path="/detail/:id" componet={detail}/> */}
           
            <Route path="/Login" component={Login} />
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

