import { Card, Container, Grid, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import LoaderPage from "../../pages/LoadPage";
import DocumentTypeCard from "./DocumentTypeCard";

function DocumentTypes() {
  const data = useFetch("get-all-document");
  const locale = localStorage.getItem("i18nextLng");
  const currentLocale = locale !== "ar" ? "en" : "ar";
  return (
    <div style={{ marginTop: "30px" }}>
      <Container>
        <Card style={{ padding: "15px", borderRadius: "8px" }}>
          <Typography variant="h4" textAlign="center" marginBottom="15px">
            {t("Document.DocumentTypes")}
          </Typography>
          {data === null ? (
            <LoaderPage />
          ) : (
            <Grid container>
              {data?.map((item, index) => {
                return (
                  <Grid
                    className="flex-center"
                    item
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                  >
                    <DocumentTypeCard
                      title={item?.title?.[currentLocale]}
                      description={item?.description?.[currentLocale]}
                      image={item?.image}
                      id={item?.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Card>
      </Container>
    </div>
  );
}

export default DocumentTypes;
