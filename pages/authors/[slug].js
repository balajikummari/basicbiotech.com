import Head from 'next/head'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllAuthors, getAllPostsForHome, getAllPostsForTopic, getAllTopics } from '../../lib/api'
import Header from '../../components/custom/header'
import { Box, Container, Grid, IconButton, Paper, Typography } from '@material-ui/core'

export default function Author(props) {
  const postPreviewContent = props.filteredPosts
  const customAuthor = postPreviewContent? postPreviewContent[0]?.node?.postdata.customauthor.customauthor : null
 // console.log('postPreviewContent :::', postPreviewContent)
  return (
    <>
      <Layout allTopics={props.allTopics} >
        <Head>
          <title>Basic Biotech </title>
        </Head>

        <Box mt={0} pt={12} >

          <Container >

            <Container disableGutters maxWidth='sm' >
            <Paper>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ 
                  margin: '1rem 0rem 2rem 0rem' ,
                  padding: '1rem 1rem'
                  }}
              >

                <Grid item sm={12} md={6} lg={6}  >
                  <img style={{ height: '30vh' }} src={customAuthor?.profilePhoto.mediaItemUrl} />
                </Grid>

                <Grid item sm={12} md={6} lg={6} >
                  <Typography variant='h2' color='primary'  >
                    {customAuthor?.fullName}
                  </Typography>
                </Grid>

                <Grid item sm={12} md={12} lg={12} >
                  <Typography variant='subtitle1' style={{textAlign: 'justify'}}>
                    {customAuthor?.bio}
                  </Typography>
                </Grid>
              </Grid>
              </Paper>
            </Container>

            {postPreviewContent?.length > 0 && <MoreStories posts={postPreviewContent} />}

          </Container>
        </Box>
      </Layout>
    </>
  )
}


export async function getStaticProps({ params }) {
  const allPosts = await getAllPostsForHome()
  const postPreviewContent = allPosts?.edges

  const filteredPosts = postPreviewContent?.filter((node) =>{
    if(node.node.postdata.customauthor.slug == params.slug){
      return(node)
    }
  })
    // node.node.postdata.customauthor.slug == params.slug ? node : null)

  console.log( 'filteredPosts data ::' , filteredPosts)

  const allTopics = await getAllTopics()
  return {
    props: { filteredPosts, allTopics },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const authors = await getAllAuthors()
  return {
    paths: authors.map((author) => `/authors/${author.slug}`) || [],
    fallback: true,
  }
}