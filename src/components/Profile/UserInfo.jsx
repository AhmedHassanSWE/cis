import { Grid, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useSelector } from "react-redux";

function UserInfo() {
  const user = useSelector((state) => state.auth?.userData?.presonal_data);

  console.log("USER", user);
  return (
    <div>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography variant="h6">
            {t("Profile.Name")}: {user?.name}
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography variant="h6">
            {t("Profile.Email")}: {user?.email}
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className="flex-center">
          <Typography variant="h6">{t("Auth.PhoneNumber")}: 24</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserInfo;
