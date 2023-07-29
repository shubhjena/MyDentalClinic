import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import BiotechIcon from "@mui/icons-material/Biotech";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Breadcrumbs } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { NAME } from "../lib/userInfo";

function AboutUs() {
  return (
    <div className="px-5 md:px-10 py-5">
      {/* Toolbar section */}
      <Toolbar className="flex flex-col pb-5">
        <h2 className="text-3xl font-serif mr-auto">About Us</h2>
        <div className=" mr-auto">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <Typography color="text.primary">About Us</Typography>
          </Breadcrumbs>
        </div>
      </Toolbar>

      {/* Page body */}
      <div className="flex flex-wrap gap-3 md:gap-10">
        {/* Side nav section */}
        <div id="left-nav-section" className="">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
              <a href="#technology">
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

        {/* Intro section */}
        <div className=" md:w-4/6 ">
          <div id="about-us" className="">
            <h3 className="text-3xl mb-3 ">{NAME}</h3>
            <div className="h-fit">
              <div className="float-right mb-2 ml-2">
                <div className="">
                  <img src="./images/Clinic.jpg" className="object-cover h-52 w-96"/>
                </div>
              </div>
              <p className="text-justify">
                Deserunt sunt laborum laboris tempor enim nulla id excepteur
                aliquip nisi. Laboris do id esse proident duis. Exercitation
                Lorem labore dolor ullamco ad nulla elit ut. Velit sit proident
                duis officia.Ipsum qui incididunt in aute fugiat nisi veniam
                cupidatat. Qui qui incididunt officia minim proident voluptate
                dolor ad quis id. Voluptate fugiat commodo nisi nostrud sint.
                Esse ex nostrud magna laboris ad labore consequat consequat amet
                in dolore do non cupidatat. Anim cillum cillum Lorem anim
                reprehenderit commodo ea consequat enim consequat proident.
              </p>
            </div>
          </div>

          {/* Technology section */}
          <div id="technology" className="py-5">
            <h3 className=" text-2xl pb-3 ">Technology</h3>
            <ImageList sx={{ width: "fill", height: 450 }}>
              <ImageListItem key="Subheader" cols={3}>
                <ListSubheader component="div">
                  We use the latest and best in class equipments in the
                  industry.
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
                    subtitle={item.specification}
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

          {/* Dentist info section */}
          <div id="the-expert" className="">
            <h3 className="text-2xl pb-3">Meet the Expert</h3>
            <div>
              <div className="text-center w-full sm:w-1/2  sm:max-w-xs float-right mb-2 ml-2">
                <div className=" mx-auto max-w-xs">
                  <img src="./images/Dentist-Profile.jpg" />
                </div>
                <p className="text-lg font-semibold mt-1">
                  Dr. Emily Johnson
                </p>
                <p>MDS (Endodontics)</p>
              </div>
              <p>
                Dr. Emily, a highly skilled and compassionate dentist
                committed to optimizing your oral health and creating
                beautiful smiles. With over a decade of experience in the
                field, Dr. Johnson has earned a reputation for her exceptional
                patient care and expertise in cosmetic dentistry and dental
                implants.
              </p>

              <h5 className="text-lg font-semibold mt-1">Expertise</h5>
              <p className="text-justify">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1642844744022-d76a9af3711a",
    title: "Stomatology Kit",
    specification: "@bkristastucchio",
    rows: 2,
    cols: 3,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe6",
    title: "Dentist Chair",
    specification: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1598531228433-d9f0cb960816",
    title: "Intraoral Scanner",
    specification: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1561328165-f0b762a9508e",
    title: "Dental Supplies",
    specification: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1590424693420-634a0b0b782c",
    title: "Tooth Drill",
    specification: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1642844808996-f61389364b51",
    title: "Orthodontology Kit",
    specification: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe6",
    title: "Dentist Chair",
    specification: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1598531228433-d9f0cb960816",
    title: "Intraoral Scanner",
    specification: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1642844808996-f61389364b51",
    title: "Orthodontology Kit",
    specification: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1642844808996-f61389364b51",
    title: "Orthodontology Kit",
    specification: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1590424693420-634a0b0b782c",
    title: "Tooth Drill",
    specification: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe6",
    title: "Dentist Chair",
    specification: "@rollelflex_graphy726",
  },
];
