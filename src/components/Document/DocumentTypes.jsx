import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DocumentTypeCard from "./DocumentTypeCard";

function DocumentTypes() {
  return (
    <div style={{ marginTop: "30px" }}>
      <Container>
        <Card style={{ padding: "15px", borderRadius: "8px" }}>
          <Typography variant="h4" textAlign="center" marginBottom="15px">
            Document Types
          </Typography>
          <Grid container>
            <Grid className="flex-center" item lg={4} md={6} sm={12} xs={12}>
              <DocumentTypeCard />
            </Grid>
            <Grid className="flex-center" item lg={4} md={6} sm={12} xs={12}>
              <DocumentTypeCard />
            </Grid>
            <Grid className="flex-center" item lg={4} md={6} sm={12} xs={12}>
              <DocumentTypeCard />
            </Grid>
            <Grid className="flex-center" item lg={4} md={6} sm={12} xs={12}>
              <DocumentTypeCard />
            </Grid>
            <Grid className="flex-center" item lg={4} md={6} sm={12} xs={12}>
              <DocumentTypeCard />
            </Grid>
            <Grid className="flex-center" item lg={4} md={6} sm={12} xs={12}>
              <DocumentTypeCard />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}

export default DocumentTypes;
