import { Avatar, Box, Card, Container, Grid, Link, Paper, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

export default function Footer() {
  const theme = useTheme();

  return (
  
    <Card  style={{backgroundColor:theme.palette.background.default}} elevation={20}>
      <Container>
      
        <Box py={5}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} md={12} lg={3}  >
              <Box display="flex" padding='20px'>
                <Link as href='/' variant='inherit' underline="none">
                  <Avatar aria-label="author" variant="square" src="/favicon/android-icon-192x192.png" />
                </Link>
                <Link variant='h6' href='/' underline="none" variant='inherit'>
                  <Typography
                    variant="h5" >
                    <Box fontWeight={700} pt='0.3rem' pl='1rem'>
                      Basic Biotech
                    </Box>
                  </Typography>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Box padding='20px'>
                <Typography variant="h5" color="primary">About</Typography>
                <Box display="flex" pt='1rem'>
                  <Box pr='1.5rem' >
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

            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Box padding='20px'>
                <Typography variant="h5" color="primary">Subcribe</Typography>
                <Box pt='1rem'>
                  <Typography variant="body1" color="initial">Basic Biotech Newsletter</Typography>
                  <Typography variant="body1" color="initial">Basic Biotech Podcast</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Box padding='20px'>
                <Typography variant="h5" color="primary">Connect</Typography>
                <Box display="flex" pt='1rem'>
                  <IconButton aria-label="share to Facebook" style={{ padding: '0.3rem' }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="share to Instagram" style={{ padding: '0.3rem' }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton aria-label="share to LinkedIn" style={{ padding: '0.3rem' }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton aria-label="share to YouTube" style={{ padding: '0.3rem' }}>
                    <YouTubeIcon />
                  </IconButton>

                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </Card>
      
  )
}
