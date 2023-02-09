import {
  RemoveRedEye,
  RemoveRedEyeSharp,
  VisibilityOff,
} from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";

function PasswordInput({ placeholder, name, error, helperText, onChange }) {
  const [showPassword, setShowPassord] = React.useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        color="secondary"
        label={t(`Auth.${placeholder}`)}
        placeholder={t(`Auth.${placeholder}`)}
        fullWidth
        type={showPassword ? "text" : "password"}
        required
        name={name}
        error={error}
        helperText={helperText}
        onChange={onChange}
      />
      <Box
        style={{
          zIndex: "2000",
          cursor: "pointer",
          marginTop: "6px",
        }}
        onClick={() => setShowPassord(!showPassword)}
        marginLeft="-40px"
      >
        {showPassword ? <VisibilityOff /> : <RemoveRedEye />}
      </Box>
    </div>
  );
}

export default PasswordInput;
