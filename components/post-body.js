import { Box, Container, Paper, Typography } from '@material-ui/core';
import styles from './post-body.module.css'
import { DiscussionEmbed } from "disqus-react"
import SocialLinks from './socialLinks';
import Categories from './categories';
import { useTheme } from '@material-ui/core/styles';


export default function PostBody({ content, slug, socialLinks, category }) {
  const theme = useTheme();
  //console.log('PostBody slug ::', slug);
  const disqusShortname = "basic-biotech"
  const disqusConfig = {
    url: "http://basicbiotech.com/posts/" + slug,
    identifier: slug, // Single post id
    title: slug // Single post title
  }

  return (
    <Container maxWidth="md">

      <Box style={{ textAlign: "justify" }}>
        <Typography>
          <Paper style={{ marginTop: '1rem' }}>
            <Box px={5} py={3}>

              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Box>
          </Paper>
        </Typography> 
      </Box>

      <Box py='1.5rem' display='flex' >
        <Categories category={category} />
        <SocialLinks socialLinks={socialLinks} />
      </Box>
      <Box py={5}  >
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Box>
    </Container>
  )
}