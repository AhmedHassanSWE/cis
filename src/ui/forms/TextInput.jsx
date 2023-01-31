import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function TextInput({
  placeholder,
  name,
  type,
  min,
  max,
  required,
  onChange,
  fieldError,
  lg,
  md,
  sm,
  xs,
}) {
  const locale = localStorage.getItem("i18nextLng");
  return (
    <Grid
      item
      lg={lg ? lg : 6}
      md={md ? md : 6}
      sm={sm ? sm : 12}
      xs={xs ? xs : 12}
    >
      <Box className="app-input-wrapper">
        <Typography style={{ marginBottom: "5px" }}>
          {placeholder}{" "}
          {required ? <span style={{ color: "red" }}>*</span> : null}
        </Typography>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          placeholder={placeholder}
          name={name}
          min={min}
          max={max}
          required={required}
          type={type}
          className="app-input"
          color="secondary"
          error={fieldError ? true : false}
          helperText={fieldError ? fieldError : null}
          onChange={onChange}
        />
      </Box>
    </Grid>
  );
}

export default TextInput;
