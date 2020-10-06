
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthorHead from './authorHead';
import Categories from './categories';
import SocialLinks from './socialLinks';
import AudioPlayer from 'material-ui-audio-player';


const useStyles = makeStyles((theme) => ({
  tag: {
    fontSize: '0.8rem',
    height: '1.3rem',
  }

}));



export default function PostHeader({
  post,
}) {
  // console.log('post img:', post.postdata.thumbnail.mediaItemUrl)

  const ThumbNail = "https://mldspy5by2vi.i.optimole.com/w:400/h:auto/q:auto/";
  return (
    <Container maxWidth="md">
    <Box mt ={12}>

    <Typography variant="h2" color="primary">{post.title}</Typography>

    <Box>

    <AuthorHead dateGmt={post.dateGmt} customauthor={post.postdata.customauthor} />

     <Box py='1rem' display='flex' >
    <Categories  category={post.postdata.category} />
    <SocialLinks socialLinks={post.socialLinks} />
    </Box>
    </Box>
    
    <Box mb ={4} style={{marginLeft:'12px',marginRight:'-12px'}}>
    {             (
      (post.postdata.audiolength != null)
      &&
      (post.postdata.audiolength > 0)
    ) ? <AudioPlayer
         rounded = {true}
          variation="default"
          spacing={3}
          autoplay={false}
          order="standart"
          preload="auto"
          src={post.postdata?.audioFile?.mediaItemUrl} /> :''}
          </Box>
          <Box >
    <img width='100%' src= {post.postdata.thumbnail.mediaItemUrl} />
    </Box>
    </Box>
    </Container>
  )
}
