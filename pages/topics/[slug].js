import Head from 'next/head'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllPostsForTopic,getAllTopics } from '../../lib/api'
import Header from '../../components/custom/header'
import { Box, Container, IconButton } from '@material-ui/core'

export default function Topic(props) {
  const postPreviewContent = props?.allPosts?.edges

  //console.log(postPreviewContent)

  return (
    <>
      <Layout >
        <Head>
          <title>Basic Biotech </title>
        </Head>
        <Header allTopics={props.allTopics}/>

        <Box  mt={0} pt ={12} style={{ backgroundColor: 'black' }}>
          <Container >
              {postPreviewContent?.length > 0 && <MoreStories posts={postPreviewContent} />}
          </Container>
        </Box>
      </Layout>
    </>
  )
}


export async  function getStaticProps({ params}) {
   const allPosts = await getAllPostsForTopic(params.slug)
  // console.log(topico)
   const allTopics = await getAllTopics()
  return {
    props: { allPosts, allTopics},
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const topics = await getAllTopics()
  return {
    paths: topics.map(( topic ) => `/topics/${topic.node.name}`) || [],
    fallback: true,
  }
}