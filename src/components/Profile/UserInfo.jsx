import { Grid, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";

function UserInfo() {
  return (
    <div>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography variant="h6">
            {t("Profile.Name")}: Ahmed Hassan
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography variant="h6">{t("Profile.Age")}: 24</Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography variant="h6">
            {t("Profile.Email")}: Ahmed Hassan
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography variant="h6">
            {t("Profile.MembershipNumber")}: 24
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserInfo;
