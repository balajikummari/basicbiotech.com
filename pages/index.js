import Head from 'next/head'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPostsForHome,getAllTopics } from '../lib/api'
import Header from '../components/custom/header'
import { Box, Container, IconButton } from '@material-ui/core'

import { useTheme } from '@material-ui/core/styles';

export default function Index({ allPosts: { edges },allTopics }) {
  const postPreviewContent = edges
  const theme = useTheme();

  //TODO : FramerX motion
  return (
    <>
      <Layout allTopics={allTopics}>
        <Head >
          <title>Basic Biotech </title>
        </Head>
  
        <Box  mt={0} pt ={12} >
          <Container >
          
              {postPreviewContent.length > 0 && <MoreStories posts={postPreviewContent} />}
          </Container>
        </Box>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome()
  const allTopics = await getAllTopics()
  return {
    props: { allPosts,allTopics },
    revalidate: 60
  }
}

