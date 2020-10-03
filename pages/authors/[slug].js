import Head from 'next/head'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllAuthors, getAllPostsForHome, getAllPostsForTopic,getAllTopics } from '../../lib/api'
import Header from '../../components/custom/header'
import { Box, Container, IconButton } from '@material-ui/core'

export default function Topic(props) {
  const postPreviewContent = props.filteredPosts

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
   const allPosts = await getAllPostsForHome()
   const postPreviewContent = allPosts?.edges

  const filteredPosts = postPreviewContent?.map((node) => 
  node.node.postdata.customauthor.slug == params.slug? node :null)

  //console.log( 'filteredPosts data ::' , filteredPosts)

   const allTopics = await getAllTopics()
  return {
    props: { filteredPosts, allTopics},
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const authors = await getAllAuthors()
  return {
    paths: authors.map(( author ) => `/authors/${author.slug}`) || [],
    fallback: true,
  }
}