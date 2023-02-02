import { Container, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import FadedHeader from "../ui/FadedHeader";

function AboutPage() {
  return (
    <div>
      <FadedHeader text={t("Navbar.AboutUs")} img="./insurance.webp" />
      <Container>
        <Typography
          color="grey"
          textAlign="center"
          marginTop="20px"
          variant="h5"
        >
          CIS The Society is registered under No. (1) For the year 1998 in the
          Register of Cooperative Insurance Societies and is subject to the
          provisions of Law No. 10 of 1981 on supervision and control of
          insurance in Egypt. CIS is the first insurance Authority in Egypt
          operating in accordance with the general provisions of cooperation and
          provide insurance service to customers who are automatically granted
          membership shares.
        </Typography>
        <Grid marginBottom="40px" marginTop="40px" container>
          <Grid item lg={4} className="flex-center">
            <Typography style={{ maxWidth: "300px" }} variant="p">
              CIS The Society is registered under No. (1) For the year 1998 in
              the Register of Cooperative Insurance Societies and is subject to
              the provisions of Law No. 10 of 1981 on supervision and control of
              insurance in Egypt. CIS is the first insurance Authority in Egypt
              operating in accordance with the general provisions of cooperation
              and provide insurance service to customers who are automatically
              granted membership shares.
            </Typography>
          </Grid>
          <Grid item lg={4} className="flex-center">
            <Typography color="gray" style={{ maxWidth: "300px" }} variant="p">
              CIS The Society is registered under No. (1) For the year 1998 in
              the Register of Cooperative Insurance Societies and is subject to
              the provisions of Law No. 10 of 1981 on supervision and control of
              insurance in Egypt. CIS is the first insurance Authority in Egypt
              operating in accordance with the general provisions of cooperation
              and provide insurance service to customers who are automatically
              granted membership shares.
            </Typography>
          </Grid>
          <Grid item lg={4} className="flex-center">
            <Typography color="gray" style={{ maxWidth: "300px" }} variant="p">
              CIS The Society is registered under No. (1) For the year 1998 in
              the Register of Cooperative Insurance Societies and is subject to
              the provisions of Law No. 10 of 1981 on supervision and control of
              insurance in Egypt. CIS is the first insurance Authority in Egypt
              operating in accordance with the general provisions of cooperation
              and provide insurance service to customers who are automatically
              granted membership shares.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutPage;
