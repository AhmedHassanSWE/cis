import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: "10px 15px 20px 15px",
};

export default function AppModal({ open, setOpen, title, body }) {
  const handleClose = () => setOpen(false);
  const locale = localStorage.getItem("i18nextLng");

  return (
    <div style={{ direction: "rtl" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ direction: locale !== "ar" ? "ltr" : "rtl" }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
