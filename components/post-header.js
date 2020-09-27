import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'
import { Box, Container, Typography } from '@material-ui/core'
import Image from 'material-ui-image'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <Container>
    <Box mt ={10}>
    <Typography variant="h2" color="primary">{title}</Typography>
    <Box maxHeight ='25%'>
    {/* <Image height="100px" src={coverImage} /> */}
    </Box>
    </Box>
    </Container>
  )
}
