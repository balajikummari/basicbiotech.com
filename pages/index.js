import Head from 'next/head'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Header from '../components/custom/header'
import { Box, Container } from '@material-ui/core'

export default function Index({ allPosts: { edges }, preview }) {

  const postPreviewContent = edges

  return (
    <>
      <Layout preview={preview}> 
        <Head>
          <title>Basic Biotech </title>
        </Head>
        <Header />
        <Box style={{backgroundColor:'black'}}>
        <Container >
          {postPreviewContent.length > 0 && <MoreStories posts={postPreviewContent} />}
        </Container>
        </Box>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate : 60
  }
}
