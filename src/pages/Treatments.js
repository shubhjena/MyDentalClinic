import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { treatments } from "../lib/TreatmentList";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WHATSAPP_ID } from "../lib/userInfo";
import { Breadcrumbs } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Treatments() {
  const [expanded, setExpanded] = React.useState(-1);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <div className="px-5 md:px-10 py-5">
      <Toolbar className="flex flex-col pb-5">
        <h2 className="text-3xl font-serif mr-auto">Treatments</h2>
        <div className=" mr-auto">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <Typography color="text.primary">Treatments</Typography>
          </Breadcrumbs>
        </div>
      </Toolbar>
      <div className="p-5 flex flex-wrap gap-5 justify-center bg-sky-100">
        {treatments.map((treatment, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className="mb-auto ">
            <CardMedia
              component="img"
              image={treatment.image}
              alt={treatment.name}
              className="h-56"
            />
            <CardContent>
              <Typography variant="body2">{treatment.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {treatment.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a href={WHATSAPP_ID} target="blank">
                <Button>
                  Consult Now &nbsp;
                  <WhatsAppIcon />
                </Button>
              </a>
              <ExpandMore
                expand={index === expanded}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={index === expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {treatment.detailedDescription}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Treatments;
