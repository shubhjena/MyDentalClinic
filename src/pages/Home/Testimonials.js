import React from "react";
import { Avatar } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NAME } from "../../lib/userInfo";

const Testimonials = () => {
  // Sample data for text cards (you can customize this as needed)
  const textCards = [
    {
      id: 1,
      title: "Preeti Singh",
      content:
        `I had an outstanding experience at ${NAME}. From the moment I stepped into the clinic, the staff made me feel comfortable and welcomed. The dentist was extremely professional and took the time to explain the treatment process thoroughly. I underwent a root canal procedure, and I must say it was surprisingly painless and efficient. The state-of-the-art equipment and the dentist's expertise truly impressed me. I couldn't be happier with the results. My tooth feels as good as new! Thank you to the entire team at ${NAME} for providing top-notch care. I highly recommend their services to anyone in need of dental treatment.`,
      image: "./images/patients/Preeti-Singh.jpg",
    },
    {
      id: 2,
      title: "Lakshay Yadav",
      content:
        `I am beyond grateful to ${NAME} for the exceptional care I received during my recent dental implant procedure. From the start, the team was warm and compassionate, addressing all my concerns and easing any anxieties I had. The dentist's skill and precision throughout the implant process were remarkable. The clinic's modern facilities and hygienic environment reassured me that I was in good hands. I am thrilled with the final results; my new implant looks and feels incredibly natural. I am finally able to smile with confidence again. I cannot thank ${NAME} enough for their professionalism and dedication to their patients' well-being.`,
        image: "./images/patients/Lakshay-Yadav.jpg",
    },
    {
      id: 3,
      title: "Himanshi Sharma",
      content:
        `I've been a patient at ${NAME} for several years now, and the care I have received has been consistently outstanding. The entire team, from the receptionists to the dental hygienists and dentists, is friendly, knowledgeable, and attentive. They truly go above and beyond to make every visit comfortable and stress-free. Whether it's a routine cleaning or a more complex procedure, I trust ${NAME} completely with my dental health. The clinic's commitment to using the latest technology and evidence-based practices is evident in the quality of care they provide. I highly recommend ${NAME} to anyone seeking a reliable and caring dental clinic.`,
        image: "./images/patients/Himanshi-Sharma.jpg",
    },
    // Add more cards as needed
  ];

  return (
    <Carousel showArrows showThumbs={false} className="max-w-5xl rounded-2xl bg-sky-600 text-white mx-5 min-w-0">
      {textCards.map((card) => (
        <div key={card.id} className="py-10 md:p-10 text-center ">
          <Avatar
            alt="Remy Sharp"
            src={card.image}
            sx={{ width: 56, height: 56 }}
            className="mx-auto"
          />
          <p className="p-2 font-light text-lg italic tracking-wider">{card.content}</p>
          <h3 className="font-thin text-xl">{card.title}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
