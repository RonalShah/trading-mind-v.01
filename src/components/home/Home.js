import React from 'react';
import '../../App.css';
import MainAsset from '../Charts/MainAsset';
import BuySell from '../Charts/BuySell';
import UserInfo from '../userInfo/UserInfo';
import {FXChart, BondChart, EconNews} from '../Charts/EconCharts'
import NavBar from '../navBar/NavBar';
import Logo from '../../images/logo.png'
import {Container,Grid } from '@material-ui/core';

export default function Home()  {
  
  return (

    <Grid container style={{backgroundColor:"black"}}  xs={12} className="Home">
    
      




          <Container maxWidth style={{margin:2}}>
            <NavBar/>
          </Container>


      


        <Grid container direction="row" >

          <div className=" userinfo">
            <UserInfo/>
          </div>
        
          
          <div className=" mainAsset" >
            <MainAsset/>
          </div>

          <div className=" buysell">
            <BuySell/>
          </div>

        </Grid>

          
    <Grid container direction="row">
        
        <div className=" userinfo">
          <div>

          <h1>Ads</h1>
            <img src={Logo} width="200"/>

          </div>

        </div>

        <div className=" secondarydiv">

          <Grid container direction="row" spacing={1} justify="center">

              <Grid xs={6} item >
                <FXChart/>
              </Grid>


              <Grid xs={6} item> 
                <BondChart/>
              </Grid>

              </Grid>


        </div>

        <div className="EconNews">

          <Grid container >
            <marquee className="marquee" direction="down" scrollamount="2">
              <EconNews/>
            </marquee>
          </Grid>
    
        </div>

        </Grid>
      

      </Grid>





  )
}


