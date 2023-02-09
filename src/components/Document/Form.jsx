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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import LoaderPage from "../../pages/LoadPage";

function Form() {
  const mode = useSelector((state) => state.theme.mode);
  const [fields, setFields] = React.useState({});
  const [value, setValue] = React.useState(0);
  const { id } = useParams();
  const data = useFetch(`get-specific-doc-type/${id}`);
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
  const currentLocale = locale !== "ar" ? "en" : "ar";

  return data === null ? (
    <LoaderPage />
  ) : (
    <div>
      <Container className={mode === "dark" ? "dark" : "light"}>
        <Card style={{ marginTop: "15px", padding: "15px" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {t("Navbar.Forms")}
          </Typography>
          <TabContext value={value}>
            <div className="flex-center tabs-container">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={() => {}}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {/* <Tab
                    onClick={() => setValue(0)}
                    label={t("Document.Basic")}
                  /> */}
                  {data?.sub_documents?.map((item, index) => {
                    return (
                      <Tab
                        onClick={() => setValue(1)}
                        label={`${index + 1}- ${item?.title?.[currentLocale]}`}
                      />
                    );
                  })}
                </Tabs>
              </Box>
            </div>
            {/* <TabPanel value={0} index={0}>
              <BasicInformation />
            </TabPanel> */}
            {data?.sub_documents?.map((item, index) => {
              return (
                <TabPanel value={index} index={index}>
                  <AdditionalInformation item={item} />
                </TabPanel>
              );
            })}
          </TabContext>
        </Card>
      </Container>
    </div>
  );
}

export default Form;
