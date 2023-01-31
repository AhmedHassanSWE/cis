import React from "react";
import Navbar from "./layouts/Navbar";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import TextInput from "./ui/forms/TextInput";
import "./ui/forms/forms-ui.css";
import { Button, Card, Grid, Typography } from "@mui/material";
import MyRouter from "./router";
import LoginPage from "./pages/LoginPage";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#d62a33",
        contrastText: "#fff",
        light: "#ffa726",
        dark: "#941e24",
      },
      secondary: {
        light: "#1c407b",
        main: "#1c407b",
        contrastText: "#fff",
      },
      custom: {
        main: "#fff",
        contrastText: "#d62a33",
        light: "#d62a33",
        dark: "#d62a33",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#d62a33",
        contrastText: "#fff",
        light: "#ffa726",
        dark: "#941e24",
      },
      direction: "rtl",
      secondary: {
        light: "#1c407b",
        main: "#1c407b",
        contrastText: "#fff",
      },
      custom: {
        main: "#fff",
        contrastText: "#d62a33",
        light: "#d62a33",
        dark: "#d62a33",
      },
    },
  });

  const [auth, setAuth] = React.useState(true);

  React.useEffect(() => {
    localStorage.setItem("NEXT", "EN");
  }, []);

  console.log("VITE LOCAL", localStorage.getItem("i18nextLng"));
  const locale = localStorage.getItem("i18nextLng");
  return locale !== "ar" ? (
    <div className="App">
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        {auth ? (
          <div>
            {" "}
            <Navbar setAuth={setAuth} />
            <MyRouter />
            <CssBaseline />{" "}
          </div>
        ) : (
          <div>
            <LoginPage setAuth={setAuth}></LoginPage>
            <CssBaseline />
          </div>
        )}
      </ThemeProvider>
    </div>
  ) : (
    <div dir="rtl" className="App">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
          {auth ? (
            <div>
              {" "}
              <Navbar setAuth={setAuth} />
              <MyRouter />
              <CssBaseline />{" "}
            </div>
          ) : (
            <div>
              <LoginPage setAuth={setAuth}></LoginPage>
              <CssBaseline />
            </div>
          )}
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
