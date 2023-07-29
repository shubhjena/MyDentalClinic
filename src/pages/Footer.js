import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {
  EMAIL,
  NAME,
  PHONE,
  ADDRESS,
  GOOGLE_MAPS_DIRECTION,
  FACEBOOK_ID,
  INSTAGRAM_ID,
  TWITTER_ID,
  WHATSAPP_ID,
} from "../lib/userInfo";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

function footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className="bg-slate-300 p-5 md:p-10">
      <Grid container spacing={2}>
        <Grid xs={12} md={3} lg={3}>
          <div className="pt-3">
            <h2 className="text-2xl font-extrabold font-sans"><Link to='/'>{NAME}</Link></h2>
            <div>© Copyright 2023</div>
          </div>
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <div>
            <h4 className="font-bold">Contact Address</h4>
            <div>
              {Object.values(ADDRESS).map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <h4 className="mt-2 font-bold">Reach Us</h4>
            <p>{EMAIL}</p>
            <p>{PHONE}</p>
          </div>
        </Grid>
        <Grid container xs={12} md={5} lg={6} spacing={4}>
          <Grid xs={6} lg={3}>
            <div className="text-center">
              <h2 className="font-bold">Quick Links</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="treatments">Treatments</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            <div className="text-center">
              <h2 className="font-bold">About Us</h2>
              <ul>
                <li>
                  <Link to="about#about-us">The Clinic</Link>
                </li>
                <li>
                  <Link to="about#the-expert">Our Doctors</Link>
                </li>
                <li>
                  <Link to="about#technology">Equipments</Link>
                </li>
                <li>
                  <Link to="gallery">Photographs</Link>
                </li>
                <li>
                  <Link to="/#our-expertise">Our Expertise</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            <div className="text-center">
              <h2 className="font-bold">Help & Contact</h2>
              <ul>
                <li>
                  <a href={`mailto:${EMAIL}`}>Email</a>
                </li>
                <li>
                  <a href="tel:5551234567">Call us</a>
                </li>
                <li onClick={GOOGLE_MAPS_DIRECTION} className="cursor-pointer">Location</li>
                <li>
                  <a href={WHATSAPP_ID} target="blank">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          aligndivs="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <div className="flex gap-5 text-blue-500">
              <a target="blank" href={FACEBOOK_ID} className="hover:text-white">
                <FacebookIcon sx={{ fontSize: 30 }}/>
              </a>
              <a target="blank" href={TWITTER_ID} className="hover:text-white">
                <TwitterIcon sx={{ fontSize: 30 }}/>
              </a>
              <a target="blank" href={INSTAGRAM_ID} className="hover:text-white">
                <InstagramIcon sx={{ fontSize: 30 }}/>
              </a>
              <a target="blank" href={WHATSAPP_ID} className="hover:text-white">
                <WhatsAppIcon sx={{ fontSize: 30 }}/>
              </a>
            </div>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <div>
                <a href="https://shubhjena.github.io/" target="blank">
                  👽 by shubhjena
                </a>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default footer;
