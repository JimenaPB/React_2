import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardUser.css";
const CardUser = ({ char }) => {
  const { image, title, price, category,} = char;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className = 'product'>
        <CardMedia component="img" image={image} alt="productos"  className="images" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text">
            {price} 
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
