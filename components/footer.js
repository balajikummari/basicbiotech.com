import { Avatar, Box, Container, Grid, Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

export default function Footer() {
  return (
    <footer >
      <Container>
      <Box py ={5}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
        <Grid item lg={3}  >
        <Box display="flex">
        <Link as href='/' variant='inherit' underline="none">
          <Avatar aria-label="author" variant="square" src="/favicon/android-icon-192x192.png" />
          </Link>
          <Typography
            variant="h6"
            
          >
            <Link variant='h6' href='/' underline="none">
              Basic Biotech
           </Link>
          </Typography>
          </Box>
        </Grid>
       
        <Grid item lg={4} >
        <Box>
        <Typography variant="h5" color="initial">About</Typography>
        <Box display ="flex">
          <Box  mx={2}>
          <Typography variant="body1" color="initial">About basic Biotech</Typography>
          <Typography variant="body1" color="initial">Advertise With us</Typography>
          <Typography variant="body1" color="initial">Contact us</Typography>
          </Box>
          <Box>
          <Typography variant="body1" color="initial">Meet our team</Typography>
          <Typography variant="body1" color="initial">Careers</Typography>
          <Typography variant="body1" color="initial">Privacy and Term</Typography>
          </Box>
        </Box>
        </Box>
        </Grid>

        <Grid item lg={3} >
        <Typography variant="h5" color="initial">Subcribe</Typography>
        <Box>
          <Typography variant="body1" color="initial">Basic Biotech Newsletter</Typography>
          <Typography variant="body1" color="initial">Basic Biotech Podcast</Typography>
          </Box>
        </Grid>
        <Grid item lg={2}  >
        <Box>
        <Typography variant="h5" color="initial">Connect</Typography>
          <Box display="flex">
          <IconButton aria-label="share to Facebook" style={{padding:'0.3rem'}}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="share to Instagram" style={{padding:'0.3rem'}}>
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="share to LinkedIn" style={{padding:'0.3rem'}}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="share to YouTube" style={{padding:'0.3rem'}}>
            <YouTubeIcon />
          </IconButton>

          </Box>
        </Box>
        </Grid>
        </Grid>
        </Box>
      </Container>
    </footer>
  )
}
