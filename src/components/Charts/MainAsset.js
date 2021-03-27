import { Line } from "react-chartjs-2";
import { useInput } from "../MainStoreProvider";
import React from "react";

import { BlueButton } from "../../buttons";
import { Container, Grid } from "@material-ui/core";
import { PlayCircleFilled } from "@material-ui/icons";
import { BluePaper } from "../../styledComponents";

function MainAsset() {
  const { chartData, dispatch, starter } = useInput();

  return (
    <div className="MainChart">
      <BluePaper>
        <h2>Trading Price</h2>{" "}
      </BluePaper>
      <Container maxWidth={false}>
        <Grid
          container
          lg={12}
          sm={10}
          xl={12}
          xs={12}
          direction="column"
          spacing={2}
        >
          <Grid item xs={12}>
            {/* <BlueButton 
                        className = "btn__start"
                        >Start</BlueButton> */}
            <PlayCircleFilled
              onClick={() => starter()}
              style={{ color: "green", fontSize: "60px", margin: 10 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Line
              className="MainAsset__Chart"
              data={chartData.mainChart.maindata}
              options={{
                legend: false,
                scales: {
                  yAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: "Asset Price",
                      },
                      gridLines: {
                        zeroLineColor: "white",
                      },
                    },
                  ],
                  xAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: "Time (in seconds)",
                      },
                      gridLines: {
                        zeroLineColor: "white",
                      },
                    },
                  ],
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainAsset;
