import { Facebook, Twitter } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
  const pages = [
    {
      title: "Profile",
      path: "/",
    },
    {
      title: "AboutUs",
      path: "/about",
    },
    {
      title: "Howitworks",
      path: "/how",
    },
    {
      title: "Support",
      path: "/support",
    },
    {
      title: "Forms",
      path: "/form",
    },
    {
      title: "ContactUs",
      path: "/contact",
    },
  ];
  const mode = useSelector((state) => state.theme.mode);
  return (
    <Box
      style={{
        padding: "40px",
        marginTop: "20px",
        background: mode === "dark" ? "#222" : "#eee",
      }}
    >
      <Container>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} className="flex-center">
            <div>
              <img src="/logo.png" />
              <Box marginLeft="20px">
                <Facebook className="social-icon" />
                <Twitter className="social-icon" />
              </Box>
            </div>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" marginBottom="10px">
                {t("Navbar.QuickLinks")}
              </Typography>
              {pages.map((item, index) => {
                return (
                  <Link
                    style={{ color: mode === "dark" ? "#fff" : "#333" }}
                    to={item.path}
                  >
                    <Typography display="block" variant="p">
                      {t(`Navbar.${item.title}`)}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
