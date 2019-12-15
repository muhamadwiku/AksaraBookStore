import React, { Component } from 'react';
import '../App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
// import { Typography, Link} from '@material-ui/core'; 

// home
// import Akademik from './Akademik/Akademik';
// import DetilAkademik from './Akademik/DetilAkademik';
// import Materi from './Materi/Materi';
// import Berita from './Berita/Berita';
// import DetilBerita from './Berita/DetilBerita';
// import Kontak from './Kontak/Kontak';
// import Login from './Login/Login';
// home

import index from './index';
import MiniDrawer from './Admin/Admin';
// import admin from './SuperAdmin/index';
// import user from './SuperUser/index';
// import Login from './SuperAdmin/Login/Login';
// import indexUnv from './index';




class App extends Component {

  render() {

    return (
      <Router>
        <React.Fragment>

         
            {/* router link */}
           
            {/* <Route path="/Login-admin" component={Login} /> */}
            {/* <Route exact path="/admin" component={admin} /> */}
            <Route path="/admin" component={MiniDrawer} />
            {/* <Route exact path="/users" component={user} /> */}
            <Route path="/" component={index}/>
            {/* end of router link */}
            {/* <Route path="/berita" component={Berita}/> */}
            {/* home */}
              {/* <Route path="/akademik" component={Akademik} />
              <Route path="/detilakademik" component={DetilAkademik} />
              <Route path="/Materi" component={Materi} />
              <Route path="/Berita" component={Berita} />
              <Route path="/Detilberita/:id" component={DetilBerita} />
              <Route path="/Kontak" component={Kontak} /> */}
              {/* <Route path="/Login" component={Login} /> */}
            {/* end of home */}
              
         

        </React.Fragment>
      </Router>
    );
  }
}

export default App;

