import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function DocumentTypeCard() {
  return (
    <Link to="/form">
      <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.fbcd.co/products/resized/resized-750-500/1d83834ba8fa525bbff21a3f201cc93870cf12a7715bd8cf12a426fc71c15005.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Car insurance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
