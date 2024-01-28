import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardList = ({ name, image, species, id }) => {
  return (
    <Card sx={{ width: 300 }}>
      <Link to={`/character/${id}`} className="link">
        <CardMedia
          sx={{ height: 300, objectFit: "cover" }}
          image={image}
          title={name}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.primary" fontWeight={"bold"}>
          Especie:{" "}
          <Typography variant="span" color="text.secondary" fontWeight={400}>
            {species}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/character/${id}`}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardList;
