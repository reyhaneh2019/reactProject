import React from 'react';
import {withRouter} from 'react-router-dom';
import TopNav from '../Navs/TopNav';
import MainNav from '../Navs/MainNav';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import  LoadingBar  from 'react-redux-loading-bar';


const MainLayout = (props) => {
    const {pathname} = props.location;
    return ( 
        <React.Fragment>
         
        <div className="landing-layer">
        <LoadingBar style={{backgroundColor:"prime", height:"5px"}}/>
            <div className="container">
           <TopNav/>
        
           {pathname === "/" ? <Header/> : null }
             
            </div>
        </div>

       <MainNav />

        <main id="home-page">
            <div className="container">
         {props.children}

              

               
            </div>
        </main>



        <Footer/>
    </React.Fragment>
     );
}
 
export default withRouter(MainLayout) ;