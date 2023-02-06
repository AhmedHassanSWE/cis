import {
  RemoveRedEye,
  RemoveRedEyeSharp,
  VisibilityOff,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

function PasswordInput({ placeholder, name, error, helperText, onChange }) {
  const [showPassword, setShowPassord] = React.useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        color="secondary"
        label={placeholder}
        placeholder={placeholder}
        fullWidth
        type={showPassword ? "text" : "password"}
        required
        name={name}
        error={error}
        helperText={helperText}
        onChange={onChange}
      />
      <div
        style={{
          zIndex: "2000",
          cursor: "pointer",
          marginTop: "6px",
          marginLeft: "-40px",
        }}
        onClick={() => setShowPassord(!showPassword)}
      >
        {showPassword ? <VisibilityOff /> : <RemoveRedEye />}
      </div>
    </div>
  );
}

export default PasswordInput;
