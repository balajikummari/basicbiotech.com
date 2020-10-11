import { Box, Button, Container, Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { parseISO } from 'date-fns'
import Link from 'next/link'
import AudioButton from './audioButton'
import AuthorHead from './authorHead'
import Categories from './categories'
import SocialLinks from './socialLinks'
import { motion } from 'framer-motion';


import { useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  media: {
    height: 0,
    borderRadius: '0.3rem',
    paddingTop: '56.25%', // 16:9
  },



  title: {
    margin: '0.5rem 0px 0.7rem 0px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '3.8rem'
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

  tag: {
    fontSize: '0.8rem',
    height: '1.3rem',
  }

}));

export default function PostPreview({ singlePost }) {
  const theme = useTheme();
  const classes = useStyles();
  const date = parseISO(singlePost.dateGmt)
  const cdnAuthor = "https://mldspy5by2vi.i.optimole.com/w:50/h:auto/q:auto/";
  const ThumbNail = "https://mldspy5by2vi.i.optimole.com/w:400/h:auto/q:auto/";





  return (

      <Grid item xs={12} sm={6} md={4} lg={4}>
          <motion.div

initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .3
    }
  },
}}
whileHover={{
  scale: 1.05,
  transition: {
    duration: .2
  }
}}
>
        <Card className={classes.root} elevation={6} >


          <AuthorHead dateGmt={singlePost.dateGmt} customauthor={singlePost.postdata.customauthor} />

          <Container >
            <Box py='0.1rem'>
              <Categories category={singlePost.postdata.category} />
            </Box>
          </Container>



          {/** Title  */}
          <Container>
            <Typography variant="h6" color="initial" className={classes.title} >
              <Box fontWeight={600} className={classes.twoLinetext} lineHeight={1.2} > {singlePost.title}</Box>
            </Typography>
          </Container>

          {/** Thubnail Image*/}
          <Container>
            <CardMedia
              className={classes.media}
              image={ThumbNail + singlePost.postdata.thumbnail.mediaItemUrl}
              title={singlePost.title}
            />
          </Container>



          <CardContent style={{ padding: '1rem 1.5rem' }}>

            <AudioButton postdata={singlePost.postdata} />

            <Typography variant="body2">
              <Box className={classes.threeLinetext}  >
                {singlePost.postdata.shortdescription}
              </Box>
            </Typography>

          </CardContent>

          <CardActions style={{ padding: '1rem 1.5rem', color: 'white', justify: 'space-between' }} disableSpacing>

            <Box>
              {
                singlePost.postdata.sourcename ?
                  <Link target="_blank" href={singlePost.postdata.sourcelink} variant='inherit'
                    color='inherit'
                    underline='none' >
                    <Button variant="outlined" color="primary" >
                      <Typography variant="body2" style={{ textTransform: 'none' }} >
                        <Box fontWeight={600} >
                          Continue Reading  {" at "} <br /> {singlePost.postdata.sourcename}
                        </Box>
                      </Typography>
                    </Button>
                  </Link>
                  :
                  <Link target="_blank" as={`/posts/${singlePost.slug}`} href="/posts/[slug]">
                    <Button variant="outlined" color="primary" >
                      <Typography variant="body2" style={{ textTransform: 'none' }} >
                        <Box fontWeight={600} >
                          Continue Reading
                      </Box>
                      </Typography>
                    </Button>
                  </Link>
              }
            </Box>

            <Box style={{ marginLeft: 'auto' }}>
              <SocialLinks socialLinks={singlePost.socialLinks} />
            </Box>
          </CardActions>
        </Card>
        </motion.div>
      </Grid >
   

  )
}
