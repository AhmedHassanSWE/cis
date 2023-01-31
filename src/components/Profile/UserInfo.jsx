import { Grid, Typography } from "@mui/material";
import React from "react";

function UserInfo() {
  return (
    <div>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography style={{ fontWeight: "bold" }} variant="h6">
            Name: Ahmed Hassan
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography style={{ fontWeight: "bold" }} variant="h6">
            Age: 24
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserInfo;
