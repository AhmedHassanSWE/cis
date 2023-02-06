import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import FadedHeader from "../ui/FadedHeader";
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";
import { t } from "i18next";
import { useSelector } from "react-redux";
import { postRequest } from "../postRequest";
import { toast } from "react-hot-toast";

function ContactUsPage() {
  const mode = useSelector((state) => state.theme.mode);
  const token = useSelector((state) => state?.auth?.user?.token);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState({});
  const contactCallBack = () => {
    setMessage("");
    toast.success("Your message has been sent successfully");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("AHMED");
    postRequest(
      "contact-us",
      { message },
      contactCallBack,
      setErr,
      setLoading,
      token
    );
  };
  const locale = localStorage.getItem("i18nextLng");
  return (
    <div>
      <FadedHeader text={t("Navbar.ContactUs")} img="./support.avif" />
      <Container style={{ marginBottom: "30px" }}>
        <Typography textAlign="center" marginTop="20px" variant="h5">
          {t("Support.Header")}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box style={{ margin: "20px" }}>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ color: mode === "dark" ? "#fff" : "#000" }}
              placeholder={t("Support.Write")}
              rows={6}
            ></textarea>
          </Box>
          <div className="flex-center">
            <LoadingButton
              type="submit"
              style={{ margin: "0px 20px" }}
              size="large"
              fullWidth
              variant="contained"
              loading={loading ? true : false}
              endIcon={
                <Send
                  style={{
                    transform: locale !== "ar" ? "scaleX(1)" : "scaleX(-1)",
                  }}
                />
              }
            >
              {t("Support.Send")}
            </LoadingButton>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default ContactUsPage;
