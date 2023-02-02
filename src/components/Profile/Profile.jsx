import { Edit } from "@mui/icons-material";
import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import React from "react";
import "./profile.css";
import ProfileInvoices from "./ProfileInvoices";
import ProfilePayments from "./ProfilePayments";
import UserInfo from "./UserInfo";
import { t } from "i18next";

function Profile() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <div className="flex-center">
        <div className="profile-avatar">A</div>
      </div>
      <div className="flex-center">
        <Typography variant="h5">Ahmed Hassan</Typography>
      </div>
      <div className="flex-center">
        <Button variant="contained">
          {t("Profile.EditProfile")}{" "}
          <Edit fontSize="20" style={{ marginLeft: "5px" }} />
        </Button>
      </div>
      <Container>
        <TabContext value={value}>
          <div className="flex-center tabs-container">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} aria-label="basic tabs example">
                <Tab
                  onClick={() => setValue(0)}
                  label={t("Profile.PersonalInfo")}
                />
                <Tab
                  onClick={() => setValue(1)}
                  label={t("Profile.Documents")}
                />
                <Tab
                  onClick={() => setValue(2)}
                  label={t("Profile.PaymentHistory")}
                />
              </Tabs>
            </Box>
          </div>
          <TabPanel value={0} index={0}>
            <UserInfo />
          </TabPanel>
          <TabPanel value={1} index={1}>
            <ProfileInvoices />
          </TabPanel>
          <TabPanel value={2} index={2}>
            <ProfilePayments />
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}

export default Profile;
