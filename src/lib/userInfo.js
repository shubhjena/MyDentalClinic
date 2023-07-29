// contact details
export const NAME = "My Dental Clinic";
export const EMAIL = "my.info@gmail.com";
export const PHONE = "123-456-7890";
export const TEXT_MSG = "Hi, I would like to book an appointment with the dentist!";
export const ADDRESS = {
  line1:'Shop No. 7, Sector 3,',
  line2:'Part-II HUDA Complex,',
  line3:'Haryana 123401',
};
export const GOOGLE_MAPS_DIRECTION = () => {
  const latitude = 28.612912; // Replace with the latitude of your desired location
  const longitude = 77.2253895; // Replace with the longitude of your desired location
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  window.open(mapUrl, "_blank");
};

//social media
export const FACEBOOK_ID = '';
export const INSTAGRAM_ID = '';
export const WHATSAPP_ID = `https://api.whatsapp.com/send?phone=91${PHONE}&text=${TEXT_MSG}`;
export const TWITTER_ID = '';

export const clinicStats = [
  { title: "Dental Filling", value: "800", colour: "bg-red-500" },
  { title: "Root Canal Treatment", value: "500", colour: "bg-yellow-500" },
  { title: "Dental Implants", value: "100", colour: "bg-blue-500" },
  { title: "Orthodontic Treatments", value: "100", colour: "bg-green-500" },
];
