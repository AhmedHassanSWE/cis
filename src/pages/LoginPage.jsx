import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginSchiema, registerSchiema } from "../utils/authSchiemas";
import { IconButton } from "@mui/material";
import {
  Brightness4Outlined,
  Brightness7Outlined,
  LightMode,
} from "@mui/icons-material";
import i18n from "../i18next";
import { emptyAction, reduxPost } from "../redux/actions/reusableActions";
import { CHANGE_THEME_MODE, USER_LOGIN } from "../redux/actions/types";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { LoadingButton } from "@mui/lab";
import AppModal from "../ui/AppModal";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import { toast } from "react-hot-toast";
import PasswordInput from "../ui/PasswordInput";

export default function LoginPage() {
  const [login, setLogin] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const formRef = React.useRef();
  const schiema = login ? loginSchiema : registerSchiema;
  const locale = localStorage.getItem("i18nextLng");
  const mode = useSelector((state) => state.theme.mode);
  const [reChecked, setReChecked] = React.useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [inputs, setInputs] = React.useState({});
  const [err, setErr] = React.useState({});
  const [loginError, setLoginError] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  function handleRecaptchaChange(value) {
    setReChecked(value);
    console.log("RE VALUE", value);
  }

  console.log("RECHECKED", reChecked);

  React.useEffect(() => {
    setInputs({});
    formRef.current.reset();
  }, [login]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Login
  const loginFunc = () => {
    dispatch(
      reduxPost(
        "login",
        inputs,
        () => {
          toast.success(t("Auth.LoggedSuccessfully"));
        },
        setLoginError,
        setLoading,
        USER_LOGIN
      )
    );
  };

  // Register
  const registerFunc = () => {
    dispatch(
      reduxPost(
        "create-account",
        inputs,
        () => {
          toast.success(t("Auth.CreatedSuccessfully"));
          setLogin(true);
        },
        setErr,
        setLoading,
        ""
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login) {
      loginFunc();
    } else {
      registerFunc();
    }
  };
  return (
    <Grid
      style={{ position: "relative" }}
      container
      component="main"
      sx={{ height: "100vh" }}
    >
      <AppModal
        open={open}
        setOpen={setOpen}
        title={t("Auth.ResetPassword")}
        body={<ForgetPassword setOpen={setOpen} />}
      />
      <div
        style={
          locale === "ar"
            ? {
                position: "absolute",
                top: " 10px",
                right: "10px",
                display: "flex",
                alignItems: "center",
              }
            : {
                position: "absolute",
                top: " 10px",
                left: "10px",
                display: "flex",
                alignItems: "center",
              }
        }
      >
        {locale !== "ar" ? (
          <div
            className="pointer"
            onClick={() => {
              i18n.changeLanguage("ar");
              window.location.reload();
            }}
          >
            <Typography>العربية</Typography>
          </div>
        ) : (
          <div
            className="pointer"
            onClick={() => {
              i18n.changeLanguage("en");
              window.location.reload();
            }}
          >
            <Typography>English</Typography>
          </div>
        )}
        <IconButton
          style={{ margin: "0px 10px" }}
          sx={{ ml: 1 }}
          color="inherit"
          onClick={() => dispatch(emptyAction(CHANGE_THEME_MODE))}
        >
          {mode === "dark" ? <LightMode /> : <Brightness4Outlined />}
        </IconButton>
      </div>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ maxHeight: "80px" }} src="./logo.png" />
          <Typography component="h1" variant="h5">
            {login ? t("Auth.SignIn") : t("Auth.SignUp")}
          </Typography>
          <Box>
            <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
              <Grid container>
                {schiema.map((item, index) => {
                  return (
                    <Grid
                      style={{ padding: "5px" }}
                      item
                      lg={login ? 12 : 6}
                      md={login ? 12 : 6}
                      sm={12}
                      xs={12}
                      key={index}
                    >
                      {item.type === "password" ? (
                        <PasswordInput
                          placeholder={item.placeholder}
                          name={item.name}
                          error={err?.data?.errors?.[item.name]?.[0]}
                          helperText={err?.data?.errors?.[item.name]?.[0]}
                          onChange={handleChange}
                        />
                      ) : (
                        <TextField
                          autoFocus={index === 0 ? true : false}
                          color="secondary"
                          required
                          aria-required
                          margin="normal"
                          fullWidth
                          // id={item.name}
                          label={t(`Auth.${item.placeholder}`)}
                          placeholder={t(`Auth.${item.placeholder}`)}
                          name={item.name}
                          type={item.type}
                          onChange={handleChange}
                          error={err?.data?.errors?.[item.name]?.[0]}
                          id="filled-password-input"
                          helperText={err?.data?.errors?.[item.name]?.[0]}
                        />
                      )}
                    </Grid>
                  );
                })}

                <Grid
                  style={{ padding: "5px" }}
                  item
                  lg={login ? 12 : 6}
                  md={login ? 12 : 6}
                  sm={12}
                  xs={12}
                ></Grid>

                <div className="flex-center">
                  <ReCAPTCHA
                    sitekey="6Lch5UMkAAAAAGKEDbehOJsqZnI64-rT-p_rX6ef"
                    onChange={handleRecaptchaChange}
                  />
                </div>

                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={reChecked !== null ? false : true}
                  loading={loading ? true : false}
                >
                  {login ? t("Auth.SignIn") : t("Auth.SignUp")}
                </LoadingButton>
              </Grid>
            </form>
            <Grid container>
              <Grid item xs>
                {login ? (
                  <Typography
                    onClick={() => setOpen(true)}
                    href="#"
                    variant="body2"
                    className="pointer"
                  >
                    {t("Auth.ForgotPassword")}
                  </Typography>
                ) : null}
              </Grid>
              <Grid item>
                {login ? (
                  <Typography
                    className="pointer"
                    onClick={() => setLogin(false)}
                    href="#"
                    variant="body2"
                  >
                    {t("Auth.Dont")} {t("Auth.SignUp")}
                  </Typography>
                ) : (
                  <Typography
                    className="pointer"
                    onClick={() => setLogin(true)}
                    variant="body2"
                  >
                    {t("Auth.Already")} {t("Auth.SignIn")}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{
          backgroundImage: "url(./insurance.webp)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
