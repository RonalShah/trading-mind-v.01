import React from "react";
import "../../App.css";
import MainAsset from "../Charts/MainAsset";
import BuySell from "../Charts/BuySell";
import UserInfo from "../userInfo/UserInfo";
import { FXChart, BondChart, EconNews } from "../Charts/EconCharts";
import NavBar from "../navBar/NavBar";
import Logo from "../../images/logo.png";
import { Container, Grid } from "@material-ui/core";
import { BluePaper } from "../../styledComponents";
import AdBox from "../ads/AdBox";

export default function Home() {
  return (
    <Grid
      container
      style={{ backgroundColor: "black" }}
      xs={12}
      className="Home"
    >
      <Container maxWidth>
        <NavBar />
      </Container>

      <Grid container direction="row">
        <div className=" userinfo">
          <UserInfo />
        </div>

        <div className=" mainAsset">
          <MainAsset />
        </div>

        <div className=" buysell">
          <BuySell />
        </div>
      </Grid>

      <Grid container direction="row">
        <div className=" userinfo">
          <AdBox />
        </div>

        <div className=" secondarydiv">
          <Grid container direction="row" spacing={1} justify="center">
            <Grid xs={6} item>
              <FXChart />
            </Grid>

            <Grid xs={6} item>
              <BondChart />
            </Grid>
          </Grid>
        </div>

        <div className="EconNews">
          <BluePaper>
            <h2>News</h2>
          </BluePaper>
          <Grid container>
            <marquee className="marquee" direction="down" scrollamount="2">
              <EconNews />
            </marquee>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
