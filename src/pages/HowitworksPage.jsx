import { LoadingButton } from "@mui/lab";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { t } from "i18next";
import { useSelector } from "react-redux";
import FadedHeader from "../ui/FadedHeader";

function Form() {
  const mode = useSelector((state) => state.theme.mode);
  const [fields, setFields] = React.useState({});
  const [value, setValue] = React.useState(0);

  const locale = localStorage.getItem("i18nextLng");
  return (
    <div>
      <FadedHeader text={t("Navbar.Howitworks")} img="insurance.webp" />
      <Container className={mode === "dark" ? "dark" : "light"}>
        <Card style={{ marginTop: "15px", padding: "15px" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {t("Navbar.Howitworks")}
          </Typography>
          <TabContext value={value}>
            <div className="flex-center tabs-container">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={() => {}}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab onClick={() => setValue(0)} label="1- Step One" />
                  <Tab onClick={() => setValue(1)} label="2- Step two" />
                  <Tab onClick={() => setValue(2)} label="3- Step Three" />
                  <Tab onClick={() => setValue(3)} label="4- Step four" />
                </Tabs>
              </Box>
            </div>
            <TabPanel value={0} index={0}></TabPanel>
            <TabPanel value={1} index={1}></TabPanel>
            <TabPanel value={2} index={2}></TabPanel>
            <TabPanel value={3} index={3}></TabPanel>
          </TabContext>
        </Card>
      </Container>
    </div>
  );
}

export default Form;
