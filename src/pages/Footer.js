import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

function footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className='bg-slate-300 p-5 md:p-10'>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <div>
            <h2 className='text-2xl font-extrabold font-sans'>ABC Dental Clinic</h2>
            <h4 className='mt-2 font-semibold'>Contact Address</h4>
            <p>Shop No. 7, Sector 3,<br/>Part-II HUDA Complex,<br/> Haryana 123401</p>
            <h4 className='mt-2 font-semibold'>Reach Us</h4>
            <p>abc.info@gmail.com</p>
            <p>+123-456-7890</p>
          </div>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <div>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            <div>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            <div>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            <div>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          aligndivs="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <div>© Copyright 2023</div>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <div><a href='https://shubhjena.github.io/' target='blank'>by shubhjena</a></div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default footer
