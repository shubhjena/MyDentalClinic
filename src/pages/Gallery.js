import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Typography from "@mui/material/Typography";
import { Breadcrumbs } from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import { Link } from 'react-router-dom';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width:'full'}} className='px-5 md:px-10 py-5'>
      <Toolbar className="flex flex-col pb-5">
        <h2 className='text-3xl font-serif mr-auto'>Gallery</h2>
        <div className=" mr-auto">
          <Breadcrumbs aria-label="breadcrumb" >
            <Link to='/'>
              Home
            </Link>
            <Typography color="text.primary">Gallery</Typography>
          </Breadcrumbs>
        </div>
      </Toolbar>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
    title: 'Drip',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283',
    title: 'Admission Room',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1611587266737-cc128ffe2946',
    title: 'Alley',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1585960691786-a593e76d3847',
    title: 'Drip',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283',
    title: 'Admission Room',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1611587266737-cc128ffe2946',
    title: 'Alley',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1585960691786-a593e76d3847',
    title: 'Drip',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
    title: 'Admission Room',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1611587266737-cc128ffe2946',
    title: 'Alley',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
    title: 'Drip',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283',
    title: 'Admission Room',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1611587266737-cc128ffe2946',
    title: 'Alley',
    author: 'Charles Deluvio',
  },
];