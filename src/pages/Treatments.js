import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Treatments() {
  return (
    <div className='p-5 flex flex-wrap gap-5 justify-center'>
        {treatments.map((treatment) => (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={treatment.image}
                    alt={treatment.name}
                    className='h-48'
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {treatment.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {treatment.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Consult a doctor
                    </Button>
                </CardActions>
            </Card>
        ))}
    </div>
  )
}

export default Treatments

const treatments = [
      {
        "name": "Teeth Cleaning",
        "description": "Regular dental cleaning to remove plaque and tartar buildup for healthier teeth and gums.",
        "image": "https://source.unsplash.com/random/250x250/?teeth_cleaning"
      },
      {
        "name": "Teeth Whitening",
        "description": "Professional teeth whitening to brighten your smile and remove stains.",
        "image": "https://source.unsplash.com/random/250x250/?teeth_whitening"
      },
      {
        "name": "Dental Fillings",
        "description": "Restoration of cavities with dental fillings to prevent further decay.",
        "image": "https://source.unsplash.com/random/250x250/?teeth_decay"
      },
      {
        "name": "Dental Implants",
        "description": "Permanent replacement for missing teeth that look and function like natural teeth.",
        "image": "https://source.unsplash.com/random/250x250/?implants"
      },
      {
        "name": "Dental Crowns",
        "description": "Custom-made tooth-shaped caps to restore damaged or weak teeth.",
        "image": "https://source.unsplash.com/random/250x250/?dentalcrown"
      },
      {
        "name": "Root Canal Therapy",
        "description": "Treatment to save and repair an infected or decayed tooth, avoiding extraction.",
        "image": "https://source.unsplash.com/random/250x250/?rootcanal"
      },
      {
        "name": "Dental Bridges",
        "description": "Fixed prosthetic to replace missing teeth and restore your smile's appearance.",
        "image": "https://source.unsplash.com/random/250x250/?dental"
      },
      {
        "name": "Orthodontic Treatment",
        "description": "Alignment of teeth using braces or aligners to improve the bite and aesthetics.",
        "image": "https://source.unsplash.com/random/250x250/?Orthodontics"
      }
    ]
  