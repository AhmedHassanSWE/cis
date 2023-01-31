import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginSchiema, registerSchiema } from "../utils/authSchiemas";

export default function LoginPage({ setAuth }) {
  const [login, setLogin] = React.useState(true);
  const schiema = login ? loginSchiema : registerSchiema;
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ maxHeight: "80px" }} src="./logo.png" />
          <Typography component="h1" variant="h5">
            {login ? "Sign in" : "Sign Up"}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
                    <TextField
                      autoFocus={index === 0 ? true : false}
                      color="secondary"
                      margin="normal"
                      required
                      fullWidth
                      id={item.name}
                      label={item.placeholder}
                      name={item.name}
                      type={item.type}
                    />
                  </Grid>
                );
              })}
            </Grid>
            {login ? (
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setAuth(true)}
            >
              {login ? "Sign In" : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item xs>
                {login ? (
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                ) : null}
              </Grid>
              <Grid item>
                {login ? (
                  <Link
                    onClick={() => setLogin(false)}
                    href="#"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                ) : (
                  <Link onClick={() => setLogin(true)} href="#" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
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
