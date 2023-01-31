import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import FadedHeader from "../ui/FadedHeader";
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";
import { t } from "i18next";
import { useSelector } from "react-redux";

function ContactUsPage() {
  const mode = useSelector((state) => state.theme.mode);
  return (
    <div>
      <FadedHeader text={t("Navbar.ContactUs")} img="./support.avif" />
      <Container style={{ marginBottom: "30px" }}>
        <Typography textAlign="center" marginTop="20px" variant="h5">
          {t("Support.Header")}
        </Typography>
        <Box style={{ margin: "20px" }}>
          <textarea
            style={{ color: mode === "dark" ? "#fff" : "#000" }}
            placeholder={t("Support.Write")}
            rows={6}
          ></textarea>
        </Box>
        <div className="flex-center">
          <LoadingButton
            style={{ margin: "0px 20px" }}
            size="large"
            fullWidth
            variant="contained"
            endIcon={<Send />}
          >
            {t("Support.Send")}
          </LoadingButton>
        </div>
      </Container>
    </div>
  );
}

export default ContactUsPage;
