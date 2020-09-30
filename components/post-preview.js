import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Box, Grid, Paper, Button, Container } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';


import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  media: {
    height: 0,
    borderRadius: '0.3rem',
    paddingTop: '56.25%', // 16:9
  },

  large: {
    // width: theme.spacing(6),
    // height: theme.spacing(6),
  },

  title: {
    margin: '0.5rem 0px 0.7rem 0px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '3.8rem'
  },

  audioButton: {
    height: '1.6rem',
    width: "100%",
    justifyContent: "right",
    margin: '-0.5rem 0rem 0.7rem 0rem',
    textTransform: 'lowercase',
  },

  twoLinetext: {
    overflow: "hidden",
    texOverflow: "ellipsis",
    display: "-webkit-box",
    '-webkit-line-clamp': 2, /* number of lines to show */
    '-webkit-box-orient': 'vertical'
  },

  threeLinetext: {
    overflow: "hidden",
    texOverflow: "ellipsis",
    display: "-webkit-box",
    '-webkit-line-clamp': 5, /* number of lines to show */
    '-webkit-box-orient': 'vertical'
  },

  tag:{
    fontSize : '0.8rem',
    height: '1.3rem',
    }

}));

export default function PostPreview({ singlePost }) {
  const classes = useStyles();
  const cdnAuthor = "https://mldspy5by2vi.i.optimole.com/w:50/h:auto/q:auto/";
  const ThumbNail = "https://mldspy5by2vi.i.optimole.com/w:400/h:auto/q:auto/";


  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.root} style={{ backgroundColor  : '#1E1F20'}}>

        {/** Author Photo Name and Date */}
        <CardHeader  style={{ padding: '1rem 0rem 0.5rem 1.5rem' }} avatar={
            <Avatar aria-label="author"
              className={classes.large}
              alt={singlePost.postdata.authorname}
              src={cdnAuthor + singlePost.postdata.authorimage.mediaItemUrl} />}
          title={singlePost.postdata.authorname}
          subheader="September 14, 2016"
        />

        {/** Tags  */}
        <Container style={{ padding: '0.3rem 0rem 0.5rem 1.5rem' }}>
          <Grid container
            direction="row"
            justify="flex-start"
            spacing={1}>
            {singlePost.postdata.category.map((categ) => {
              return (
                <Grid item >
                  <Button size="small" variant="contained" color="primary" className={classes.tag} disableElevation>
                    {categ.name}
                  </Button>
                </Grid>)
            })}
          </Grid>
        </Container>

        {/** Title  */}
        <Container>
          <Typography variant="h5" color="initial" className={classes.title} >
            <Box className={classes.twoLinetext} lineHeight={1.2} > {singlePost.title}</Box>
          </Typography>
        </Container>

        {/** Thubnail Image*/}
        <Container>
          <CardMedia
            className={classes.media}
            image={ThumbNail + singlePost.postdata.thumbnail.mediaItemUrl}
            title={singlePost.title}
            style={{height: '320px' }}
          />
        </Container>


       
        <CardContent style={{ padding: '1rem 1.5rem' }}>

          { (
            (singlePost.postdata.audiolength != null)
            && 
            (singlePost.postdata.audiolength > 0)
          )? 
          <Button className={classes.audioButton}
           startIcon={<YouTubeIcon style={{ fontSize: '2rem' }} />} 
           size="small" 
           variant="contained"
           color="primary" 
           disableElevation>
            {singlePost.postdata.audiolength + ' Minutes Listen'}
          </Button>:<span></span>
          }

          <Typography variant="body2">
            <Box className={classes.threeLinetext}  >
              {singlePost.postdata.shortdescription}
            </Box>
          </Typography>
        </CardContent>

        <CardActions style={{ padding: '1rem 1.5rem', color : 'white',justify:'space-between' }} disableSpacing>
          
          <Box>
          {
          singlePost.postdata.sourcename?
          <Link  href={ singlePost.postdata.sourcelink}>
          <Button variant="outlined" color="primary" >
          <Typography variant="body2"  style={{textTransform: 'none'}} >
          Continue Reading {" at "+singlePost.postdata.sourcename}
          </Typography>
          </Button>
          </Link> 
          :
          <Link as={`/posts/${singlePost.slug}`} href="/posts/[slug]">
          <Button variant="outlined" color="primary" >
          <Typography variant="body2"  style={{textTransform: 'none'}} >
          Continue Reading 
          </Typography>
          </Button>
          </Link> 
          } 
          </Box>

          <Box style={{marginLeft:'auto'}}>

          {
          singlePost.socialLinks.facebook?
          <a href = {singlePost.socialLinks.facebook} target="_blank">
          <IconButton aria-label="share to Facebook" style={{padding:'0.3rem'}}>
            <FacebookIcon />
          </IconButton>
          </a>
          :<span/>
          }

          {
          singlePost.socialLinks.facebook?
          <a href = {singlePost.socialLinks.instagram} target="_blank">
          <IconButton aria-label="share to instagram" style={{padding:'0.3rem'}}>
            <InstagramIcon />
          </IconButton>
          </a>
          :<span/>
          }


          
          {
          singlePost.socialLinks.linkedin?
          <a href = {singlePost.socialLinks.linkedin} target="_blank">
          <IconButton aria-label="share to linkedin" style={{padding:'0.3rem'}}>
            <LinkedInIcon />
          </IconButton>
          </a>
          :<span/>
          }
          
          {
          singlePost.socialLinks.youtube?
          <a href = {singlePost.socialLinks.youtube} target="_blank">
          <IconButton aria-label="share to youtube" style={{padding:'0.3rem'}}>
            <YouTubeIcon />
          </IconButton>
          </a>
          :<span/>
          }
          
          </Box>
        </CardActions>
      </Card>
    </Grid >


  )
}
