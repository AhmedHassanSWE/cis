import { LoadingButton } from "@mui/lab";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { t } from "i18next";
import React from "react";
import { useSelector } from "react-redux";
import api from "../../redux/api";
import FileInput from "../../ui/forms/FileInput";
import MultipleFilesInput from "../../ui/forms/MultipleFilesInput";
import SelectInput from "../../ui/forms/SelectInput";
import TextInput from "../../ui/forms/TextInput";
import {
  additionalInfo,
  firstForm,
  formErrors,
  formSchiema,
} from "../../utils/FormSchiema";

function AdditionalInformation({ item }) {
  const [fields, setFields] = React.useState({});
  const [value, setValue] = React.useState(0);
  const [err, setErr] = React.useState();
  const token = useSelector((state) => state.auth?.user?.token);
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    if (e.target.type === "file") {
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
          [e.target.name]: e.target.files[0],
        }));
      }
    } else {
      // Text & Select Fields Case
      setFields((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const formData = new FormData();

  // formSchiema.map((parentItem, parentIndex) => {
  //   fields[parentItem.name]?.map((childItem, childIndex) => {
  //     formData.append(`${parentItem.name}`, childItem);
  //   });
  // });

  const locale = localStorage.getItem("i18nextLng");
  const currentLocale = locale !== "ar" ? "en" : "ar";
  formData.append("sub_doc_id", item?.id);
  formData.append("answer_locale", currentLocale);
  formData.append("answer", JSON.stringify(fields));

  React.useEffect(() => {}, [fields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post(`getting-replied-document`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setErr({});
      })
      .catch((err) => {
        setErr(err?.response);
        setLoading(false);
      });
  };

  console.log("ERR", err);
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <Grid container>
            {item?.questions.map((item, index) => {
              return item.type === "input_text" ||
                item.type === "input_number" ||
                item.type === "input_date" ||
                item.type === "input_email" ? (
                // Text Input
                <TextInput
                  key={index}
                  placeholder={item?.title?.[currentLocale]}
                  type={item.type.replace("input_", "")}
                  // required={true}
                  name={item?.title?.[currentLocale]}
                  onChange={handleChange}
                  fieldError={err?.data?.msg?.[item?.title?.[currentLocale]]}
                />
              ) : item.type === "select_box" ? (
                // Selectt Input
                <SelectInput
                  key={index}
                  placeholder={item?.title?.[currentLocale]}
                  required={item.required}
                  name={item?.title?.[currentLocale]}
                  options={item?.details}
                  onChange={handleChange}
                  fieldError={formErrors.age}
                />
              ) : item.type === "image" ? (
                // Single File Input
                <FileInput
                  key={index}
                  placeholder={item.placeholder}
                  name={item.name}
                  required={item.required}
                  type="file"
                  onChange={handleChange}
                  fieldError={formErrors.name}
                />
              ) : item.type === "multiple-files" ? (
                // Multiple Files Input
                <MultipleFilesInput
                  key={index}
                  placeholder={item.placeholder}
                  name={item.name}
                  required={item.required}
                  type="file"
                  onChange={handleChange}
                  fieldError={formErrors.name}
                />
              ) : null;
            })}
          </Grid>
          <div className="flex-center">
            <LoadingButton
              // loading
              size="medium"
              style={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
              type="submit"
              loading={loading ? true : false}
            >
              {t("Document.Submit")}
            </LoadingButton>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default AdditionalInformation;
