import Button from "@mui/material/Button";
import DirectionsIcon from "@mui/icons-material/Directions";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from "@mui/material/Typography";
import { Breadcrumbs } from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import { Link } from 'react-router-dom';
import { PHONE, EMAIL, TEXT_MSG,ADDRESS, GOOGLE_MAPS_DIRECTION, NAME } from "../lib/userInfo";


function Contacts() {

  return (
    <div className="flex flex-col p-5">
      <Toolbar className="flex flex-col pb-5">
        <h2 className="text-3xl font-serif mr-auto">Contact</h2>
        <div className=" mr-auto">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <Typography color="text.primary">Contact</Typography>
          </Breadcrumbs>
        </div>
      </Toolbar>
      <div className="flex flex-wrap gap-5 justify-center">
        <Button
          style={{ textTransform: "none" }}
          variant="contained"
          size="large"
          className=""
        ><a href={`mailto:${EMAIL}`}>
          <EmailIcon />
          &nbsp;{EMAIL}</a>
        </Button>
        <a
          href={`https://api.whatsapp.com/send?phone=91${PHONE}&text=${TEXT_MSG}`}
          target="blank"
        >
          <Button variant="contained" size="large">
            <WhatsAppIcon />
            &nbsp;{PHONE}
          </Button>
        </a>
        <Button onClick={GOOGLE_MAPS_DIRECTION} variant="contained" size="large">
          <DirectionsIcon />
          &nbsp;Directions
        </Button>
      </div>
      <p className='text-lg m-5 font-light mx-auto'>We are available from 10:00 AM to 7:00 PM</p>
      <div className="flex flex-wrap gap-10 justify-center font-sans">
        <div>
            <h2 className='text-xl font-bold'>Contact Address</h2>
            <h2 className='text-lg font-semibold font-sans'>{NAME}</h2>
            <div>
              {Object.values(ADDRESS).map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
        </div>
        <div>
            <h4 className='font-semibold'>Reach us at:</h4>
            <p><EmailIcon/>&nbsp;{EMAIL}</p>
            <p><PhoneIcon/>&nbsp;{PHONE}</p>
            <Button style={{ marginTop: "12px", padding:"5px 30px" }} onClick={GOOGLE_MAPS_DIRECTION} variant="contained" color="success">
                <DirectionsIcon />&nbsp;Directions
            </Button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
