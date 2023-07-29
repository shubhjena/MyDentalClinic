import React from 'react';
import Typography from "@mui/material/Typography";
import { Breadcrumbs } from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import { Link } from 'react-router-dom';

// Import the images
// import dentalHygieneImage from './images/dental-hygiene.jpg';
// import dentistImage from './images/dentist.jpg';

const Article = () => {
  return (
    <div className='px-5 md:px-10 py-5'>
      <Toolbar className="flex flex-col pb-5">
        <h2 className='text-3xl font-serif mr-auto'>Dental Hygiene</h2>
        <div className=" mr-auto">
          <Breadcrumbs aria-label="breadcrumb" >
            <Link to='/'>
              Home
            </Link>
            <Typography color="text.primary">Dental Hygiene</Typography>
          </Breadcrumbs>
        </div>
      </Toolbar>
      <div className="container mx-auto md:w-4/6">
        {/* Title */}
        <h1 className="text-3xl font-semibold pb-2">The Importance of Dental Hygiene and Regular Dental Check-ups</h1>

        {/* Introduction */}
        <p className="mb-4">
          Maintaining good dental hygiene is crucial for our overall health and well-being. A healthy mouth not only allows us to enjoy the pleasure of eating but also contributes to our self-confidence and social interactions. Dental hygiene is not just about having a bright smile; it plays a significant role in preventing various dental issues and even systemic health problems.
        </p>

        {/* Image */}
        <div className="float-right mb-2 ml-2 flex flex-col gap-5">
          <div className="sm:w-96">
            <img src="./images/article/Dental-Hygiene.jpg" alt="Dental-Hygiene"/>
          </div>
          <div className="sm:w-96">
            <img src="./images/article/Dental-Hygiene-2.jpg" alt="Dentist"/>
          </div>
        </div>

        {/* Importance of Regular Dental Check-ups */}
        <h2 className="text-2xl font-semibold mb-4">Importance of Regular Dental Check-ups</h2>

        {/* Content */}
        <p className="mb-4">
          Despite maintaining good oral hygiene practices at home, it is equally important to visit the dentist regularly. Dental check-ups typically involve professional cleanings and comprehensive examinations.
        </p>

        <p className="mb-4">
          <strong>1. Early Detection and Prevention:</strong> Regular dental check-ups allow dentists to identify potential issues in their early stages. Detecting problems early on enables more straightforward and less invasive treatments, saving you from discomfort and potential complications.
        </p>


        <p className="mb-4">
          <strong>2. Gum Disease Prevention:</strong> Gum disease is a common oral health issue that can lead to serious consequences if left untreated. During dental check-ups, dentists can assess the health of your gums, identify signs of gum disease, and provide appropriate treatments to prevent its progression.
        </p>

        <p className="mb-4">
          <strong>3. Oral Cancer Screening:</strong> Oral cancer can be life-threatening if not caught early. During dental check-ups, dentists perform oral cancer screenings, looking for signs of abnormalities in your mouth, throat, and neck. Early detection can significantly improve the chances of successful treatment.
        </p>

        <p className="mb-4">
          <strong>4. Cleaning and Tartar Removal: </strong> Professional dental cleanings help remove plaque and tartar buildup that cannot be eliminated through regular brushing and flossing alone. Tartar, if left untreated, can lead to gum disease and cavities.
        </p>

        <p className="mb-4">
          <strong>5. Personalized Oral Care Advice:</strong> Dentists can provide personalized advice on maintaining proper oral hygiene, including brushing and flossing techniques and dietary recommendations to improve your dental health.
        </p>

        <p className="mb-4">
          <strong>6. Preserving Natural Teeth:</strong> With regular dental check-ups, potential dental problems can be identified and treated promptly. This proactive approach helps preserve your natural teeth and prevents the need for more invasive and costly treatments in the future.
        </p>

        <p className="mb-4">
          <strong>7. Overall Health Connection:</strong> Poor dental health has been linked to several systemic health conditions, including cardiovascular disease, diabetes, respiratory infections, and pregnancy complications. By taking care of our oral health, we can positively impact our overall well-being.
        </p>

        {/* Conclusion */}
        <p className="mb-4">
          In conclusion, dental hygiene and regular dental check-ups are essential for maintaining a healthy and radiant smile while preventing dental problems and potential health complications. By investing in our dental health and seeking professional dental care regularly, we can enjoy the benefits of a confident smile and improved overall well-being for years to come. Remember, prevention is always better than cure, so don't skip your dental check-ups!
        </p>

        {/* Author Info */}
        <div className="border-t pt-4">
          <p className="font-semibold">About the Author</p>
          <p>
            John Doe is a licensed dentist with over 10 years of experience in oral health care. He is passionate about promoting dental hygiene and educating people on the importance of regular dental check-ups. When not working, John enjoys outdoor activities and spending time with his family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
