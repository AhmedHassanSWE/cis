import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function DocumentTypeCard({ title, description, image, id }) {
  return (
    <Link to={`/form/${id}`}>
      <Card sx={{ width: 345 }} style={{ marginBottom: "20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://mahalatmasr.com/cis/public/${image}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              style={{ height: 70 }}
              variant="body2"
              color="text.secondary"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
