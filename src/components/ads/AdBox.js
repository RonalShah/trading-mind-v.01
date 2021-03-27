import React from "react";
import Logo from "../../images/logo.png";
import { Box } from "@material-ui/core";
import { BluePaper } from "../../styledComponents";

function AdBox() {
  return (
    <Box>
      <BluePaper>
        <h2>Sponsors</h2>
      </BluePaper>

      <br />
      <a href="https://fintexec.coach/trader-psychology">
        <img src={Logo} width="200" />
      </a>
    </Box>
  );
}

export default AdBox;
