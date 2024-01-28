import { useEffect } from "react";
import useRickAndMorty from "../hooks/useRickAndMorty";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const EpisodeCard = ({ urlEpisode }) => {
  const { episode, getEpisode } = useRickAndMorty();

  useEffect(() => {
    getEpisode(urlEpisode);
  }, []);

  return (
    <Card sx={{ width: 300 }}>
      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'10px', padding:'10px'}}>
        <Typography variant="body2" component="div" fontWeight={"bold"}>{episode.name} - {episode.episode}</Typography>
        <Typography variant="body2" color="text.primary">
            {episode.air_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
