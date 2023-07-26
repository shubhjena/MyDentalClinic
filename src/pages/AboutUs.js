import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Toolbar from "@mui/material/Toolbar";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import BiotechIcon from '@mui/icons-material/Biotech';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function AboutUs() {
  return (
    <div className="py-5">
      <Toolbar className="flex flex-col pb-5">
          <h2 className='text-3xl font-serif mr-auto'>About Us</h2>
      </Toolbar>
      <div className="flex">
        <div id="left-nav-section" className="px-5 min-w-2xl sticky top-0">
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <a href="#about-us">
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="About Us" />
              </ListItemButton>
              </a>
            </ListItem>
            <ListItem disablePadding>
              <a href='#technology'>
              <ListItemButton>
              <ListItemIcon>
                  <BiotechIcon />
                </ListItemIcon>
                <ListItemText primary="Technology" />
              </ListItemButton>
              </a>
            </ListItem>
            <ListItem disablePadding>
              <a href="#the-expert">
              <ListItemButton>
              <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="The Expert" />
              </ListItemButton>
              </a>
            </ListItem>
          </List>
        </div>
        <Box className="px-5 w-4/5 ">
          <div id='about-us' className="px-5 mx-5">
            <h3 className="text-3xl ">ABC Dental Clinic</h3>
            <div className="md:flex gap-5">
              <p className="text-justify my-auto">
                Deserunt sunt laborum laboris tempor enim nulla id excepteur
                aliquip nisi. Laboris do id esse proident duis. Exercitation Lorem
                labore dolor ullamco ad nulla elit ut. Velit sit proident duis
                officia.Ipsum qui incididunt in aute fugiat nisi veniam cupidatat.
                Qui qui incididunt officia minim proident voluptate dolor ad quis
                id. Voluptate fugiat commodo nisi nostrud sint. Esse ex nostrud
                magna laboris ad labore consequat consequat amet in dolore do non
                cupidatat. Anim cillum cillum Lorem anim reprehenderit commodo ea
                consequat enim consequat proident.
              </p>
              <img
                src="https://source.unsplash.com/random/250x250/?clinic"
                className="mx-auto"
              />
            </div>
          </div>
          <div id='technology' className="p-5 m-5">
            <h3 className=" text-2xl ">Technology at ABC</h3>
            <ImageList sx={{ width: "fill", height: 450 }}>
              <ImageListItem key="Subheader" cols={3}>
                <ListSubheader component="div">
                  We use the latest and best in class equipments in the industry.
                </ListSubheader>
              </ImageListItem>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div id="the-expert" className="p-5 m-5">
            <h3 className="text-2xl ">Meet the Expert</h3>
            <div className="md:flex gap-5">
              <div className="text-justify my-auto w-2/3">
                <p>
                  Dr. Emily, a highly skilled and compassionate dentist committed
                  to optimizing your oral health and creating beautiful smiles.
                  With over a decade of experience in the field, Dr. Johnson has
                  earned a reputation for her exceptional patient care and
                  expertise in cosmetic dentistry and dental implants.
                </p>

                <h5 className="text-lg font-semibold mt-1">Expertise</h5>
                <p>
                  Dental Fillings, Root Canal Treatment(RCT), Crowns, Teeth
                  Whitening, Smile Design, Mouth Ulcers, Gum Treatments, General
                  Dentistry, Tooth Extraction, Scaling & Polishing, Veneer,
                  Preventive Dentistry
                </p>

                <h5 className="text-lg font-semibold mt-1">Experience</h5>
                <ul>
                  <li>1000+ RCT Done</li>
                  <li>Multiple Full Mouth Rehabilitation</li>
                </ul>
              </div>
              <div className="flex flex-col w-1/3">
                <img
                  src="https://source.unsplash.com/random/250x250/?doctor,potrait"
                  className="mx-auto mb-auto"
                />
                <p className="text-lg font-semibold mx-auto mt-1">
                  Dr. Emily Johnson
                </p>
                <p className="mx-auto">MDS (Endodontics)</p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default AboutUs;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 3,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
