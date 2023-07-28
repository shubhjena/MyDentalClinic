import SpecialityTabs from "./SpecialityTabs";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import { clinicStats } from "../../lib/userInfo";


function Home() {
  const phone = "123-456-7890";
  const text = "Hi, I would like to book an appointment with the dentist!";
  const divStyle = {
    backgroundImage: 'url("/images/Hero.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 30%",
    /* You can add more background properties here if needed */
  };
  return (
    <div>
      {/* Hero Section */}
      <div style={divStyle} className="flex justify-end px-5 py-20">
        <div className="flex flex-col p-5 gap-5 text-end ">
          <h1 className="text-5xl font-extrabold bg-sky-600 bg-opacity-40 p-3 shadow-xl">
            Your Smile, Our Priority
          </h1>
          <h2 className="text-3xl font-semibold bg-sky-600 bg-opacity-40 p-2 ml-auto shadow-xl">
            {" "}
            Where Dental Care Shines Bright!
          </h2>
          <a
            href={`https://api.whatsapp.com/send?phone=91${phone}&text=${text}`}
            target="blank"
            className="mx-auto pt-3"
          >
            <button className="py-3.5 px-7 shadow-xl bg-rose-500 text-xl font-semibold tracking-wide text-white rounded border-2 hover:bg-pink-500 transition">
              Consult Now
            </button>
          </a>
        </div>
      </div>
      {/* Clinic Stats Section */}
      <div className="text-center p-5">
        <h2 className="font-bold text-4xl">Welcome to My Dental Clinic</h2>
        <h3 className="font-extralight p-2 text-xl">
          a dental clinic based out of Rewadi, Haryana
        </h3>
        <p className="text-xl">
          With 5+ years of experience in the field our team has restored the
          smiles of more than 1000+ happy patients.
        </p>
        <p className="text-xl">All together our team has achieved:</p>
        <div className="flex flex-wrap justify-center gap-7 py-5">
          {clinicStats.map((stat)=>(
              <div key={stat.title} className={`w-36 rounded-lg p-5 text-center text-white ${stat.colour} shadow-xl hover:scale-110 transition duration-300`}>
                  <h1 className="text-4xl font-bold">{stat.value}+</h1>
                  <p className="text-xl font-light">{stat.title}</p>
              </div>
          ))}
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="bg-fuchsia-200 flex justify-center p-5">
        <div className="w-4/6 text-center">
          <h2 className="text-3xl font-semibold pb-2">Our Expertise</h2>
          <SpecialityTabs />
        </div>
      </div>

      {/* importance of dental checkup Section */}
      <div id="about-us" className="flex justify-center p-5">
        <div className="text-center">
          <h2 className="text-3xl font-semibold pb-2">
            The Importance of Dental Hygiene and Regular Dental Check-ups
          </h2>
          <div className="md:flex gap-5 max-w-6xl">
            <div>
              <p className="text-justify my-auto pb-2">
                Maintaining good dental hygiene and attending regular dental
                check-ups are essential practices for ensuring overall health and
                well-being. Beyond achieving a bright smile, these habits play a
                vital role in preventing dental issues and potential systemic
                health problems. Through early detection and prevention, dental
                check-ups enable less invasive treatments, preserving natural
                teeth and avoiding costly procedures in the future. Furthermore,
                these visits aid in the prevention of gum disease and its
                associated risks. Understanding the link between oral health and
                overall well-being emphasizes the profound impact that dental care
                can have on cardiovascular health, diabetes, respiratory
                infections, and pregnancy outcomes. Embracing preventive dental
                care, we can enjoy the benefits of increased self-confidence,
                better social interactions, and improved long-term health, making
                regular dental check-ups an indispensable aspect of a well-rounded
                healthcare routine.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="article">
                  <Button variant="contained" endIcon={<EastIcon />}>
                    Know More
                  </Button>
                </Link>
                <a
                  href={`https://api.whatsapp.com/send?phone=91${phone}&text=${text}`}
                  target="blank"
                >
                  <Button variant="contained">Consult Now</Button>
                </a>
              </div>
            </div>
            <img
              src="https://source.unsplash.com/random/250x250/?clinic"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex justify-center py-5">
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
