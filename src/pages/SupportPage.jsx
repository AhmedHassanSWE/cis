import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import FadedHeader from "../ui/FadedHeader";
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";
import { t } from "i18next";
import { useSelector } from "react-redux";

function SupportPage() {
  const mode = useSelector((state) => state.theme.mode);
  const locale = localStorage.getItem("i18nextLng");
  return (
    <div>
      <FadedHeader text={t("Navbar.Support")} img="./support.avif" />
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
        <Paper style={{ padding: "15px", marginTop: "20px" }}>
          <Typography textAlign="center" margin="20px" variant="h5">
            {t("Support.RecentMessages")}
          </Typography>
          <div className="flex-start">
            <Typography
              style={{
                background: "#212121",
                padding: "10px",
                borderRadius: "4px",
                maxWidth: "80%",
                color: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
              variant="p"
            >
              يمكن لجهة اتصال الدعم فقط فتح طلب دعم. لمزيد من المعلومات حول جهات
              اتصال الدعم، يرجى الاطلاع على مقالة أدوار جهات الاتصال والتسجيل .
              للحصول على ملاحظات عامة حول مركز الموارد أو المحتوى، يرجى إرسال
              ملاحظاتك إلى ممثل Microsoft. للحصول على طلبات محددة وتحديثات
              المحتوى المتعلقة بـ "مركز الخدمات"، اتصل بفريق الدعم لدينا لإرسال
              حالة.
            </Typography>
          </div>
          <br />
          <div className="flex-end">
            <Typography
              style={{
                background: "#fff",
                padding: "10px",
                borderRadius: "4px",
                color: "#212121",
                maxWidth: "80%",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
              variant="p"
            >
              يمكن لجهة اتصال الدعم فقط فتح طلب دعم. لمزيد من المعلومات حول جهات
              اتصال الدعم، يرجى الاطلاع على مقالة أدوار جهات الاتصال والتسجيل .
              للحصول على ملاحظات عامة حول مركز الموارد أو المحتوى، يرجى إرسال
              ملاحظاتك إلى ممثل Microsoft. للحصول على طلبات محددة وتحديثات
              المحتوى المتعلقة بـ "مركز الخدمات"، اتصل بفريق الدعم لدينا لإرسال
              حالة.
            </Typography>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default SupportPage;
