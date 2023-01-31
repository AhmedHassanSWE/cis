import { LoadingButton } from "@mui/lab";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import FileInput from "../../ui/forms/FileInput";
import MultipleFilesInput from "../../ui/forms/MultipleFilesInput";
import SelectInput from "../../ui/forms/SelectInput";
import TextInput from "../../ui/forms/TextInput";
import { firstForm, formErrors, formSchiema } from "../../utils/FormSchiema";
import { Edit } from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import BasicInformation from "./BasicInformation";
import AdditionalInformation from "./AdditionalInformation";
import AdditionalDangers from "./AdditionalDangers";
import { t } from "i18next";
import UsersInfo from "./UsersInfo";

function Form() {
  const numbersArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [fields, setFields] = React.useState({});
  const [value, setValue] = React.useState(0);
  const handleChange = (e) => {
    if (e.target.type === "text" || e.target.type === "select") {
      // Text & Select Fields Case
      setFields((prevState) => ({
        ...prevState,
        [e.target.name]: [e.target.value],
      }));
    } else if (e.target.type === "file") {
      if (e.target.multiple === true) {
        // Multiple Files Field
        setFields((prevState) => ({
          ...prevState,
          [e.target.name]: Array.from(e.target.files),
        }));
      } else {
        // Single File Field
        setFields((prevState) => ({
          ...prevState,
          [e.target.name]: [e.target.files[0]],
        }));
      }
    }
  };

  // Convert fields Objet to Form Data
  const formData = new FormData();

  formSchiema.map((parentItem, parentIndex) => {
    fields[parentItem.name]?.map((childItem, childIndex) => {
      formData.append(`${parentItem.name}`, childItem);
    });
  });

  formData.append("Key", "Value");

  console.log("FORM DATTA", formData);

  React.useEffect(() => {
    axios.post(`to-link`, formData).catch((err) => console.log(err));
  }, [fields]);

  // formSchiema.map((parentItem, levelOneIndex) => {
  //   if (Array.isArray(fields[parentItem.name])) {
  //     fields[parentItem.name].map((childItem, levelTwoIndex) => {
  //       formData.append(
  //         `${fields[parentItem.name]}${levelTwoIndex}`,
  //         childItem
  //       );
  //     });
  //   }
  // });
  const locale = localStorage.getItem("i18nextLng");
  return (
    <div>
      <Container>
        <Card style={{ margin: "20px", padding: "15px" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {t("Navbar.Forms")}
          </Typography>
          <TabContext value={value}>
            <div className="flex-center tabs-container">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} aria-label="basic tabs example">
                  <Tab
                    onClick={() => setValue(0)}
                    label={t("Document.Basic")}
                  />
                  <Tab
                    onClick={() => setValue(1)}
                    label={t("Document.AdditionalInfo")}
                  />
                  <Tab
                    onClick={() => setValue(2)}
                    label={t("Document.AdditionalDangers")}
                  />
                  <Tab
                    onClick={() => setValue(3)}
                    label={t("Document.Users")}
                  />
                </Tabs>
              </Box>
            </div>
            <TabPanel value={0} index={0}>
              <BasicInformation />
            </TabPanel>
            <TabPanel value={1} index={1}>
              <AdditionalInformation />
            </TabPanel>
            <TabPanel value={2} index={2}>
              <AdditionalDangers />
            </TabPanel>
            <TabPanel value={3} index={3}>
              <UsersInfo />
            </TabPanel>
          </TabContext>
        </Card>
      </Container>
    </div>
  );
}

export default Form;
