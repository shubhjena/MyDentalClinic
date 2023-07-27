import React from "react";
import Button from "@mui/material/Button";
import DirectionsIcon from "@mui/icons-material/Directions";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ReportGmailerrorred } from "@mui/icons-material";

function Contacts() {
  const email = "my.info@gmail.com";
  const phone = "123-456-7890";
  const text = "Hi, I would like to book an appointment with the dentist!";

  const handleButtonClick = () => {
    const latitude = 28.612912; // Replace with the latitude of your desired location
    const longitude = 77.2253895; // Replace with the longitude of your desired location
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapUrl, "_blank");
  };

  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-wrap gap-5 justify-center">
        <Button
          style={{ textTransform: "none" }}
          onClick={`mailto:${email}`}
          variant="contained"
          size="large"
          className=""
        >
          <EmailIcon />
          &nbsp;{email}
        </Button>
        <a
          href={`https://api.whatsapp.com/send?phone=91${phone}&text=${text}`}
          target="blank"
        >
          <Button variant="contained" size="large">
            <WhatsAppIcon />
            &nbsp;{phone}
          </Button>
        </a>
        <Button onClick={handleButtonClick} variant="contained" size="large">
          <DirectionsIcon />
          &nbsp;Directions
        </Button>
      </div>
      <p className='text-lg m-5 font-light mx-auto'>We are available from 10:00 AM to 7:00 PM</p>
      <div className="flex flex-wrap gap-10 justify-center font-sans">
        <div>
            <h2 className='text-xl font-bold'>Contact Address</h2>
            <h2 className='text-lg font-semibold font-sans'>My Dental Clinic</h2>
            <p>Shop No. 7, Sector 3,<br/>Part-II HUDA Complex,<br/> Haryana - 123401</p>
        </div>
        <div>
            <h4 className='font-semibold'>Reach us at:</h4>
            <p><EmailIcon/>&nbsp;{email}</p>
            <p><PhoneIcon/>&nbsp;{phone}</p>
            <Button style={{ marginTop: "12px", padding:"5px 30px" }} onClick={handleButtonClick} variant="contained" color="success">
                <DirectionsIcon />&nbsp;Directions
            </Button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
