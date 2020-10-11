import { Box } from '@material-ui/core'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import Layout from '../../components/layout'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import SectionSeparator from '../../components/section-separator'
import { getAllPostsWithSlug, getAllTopics, getPostAndMorePosts } from '../../lib/api'

export default function Post({ post, posts, preview, allTopics,slug }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  //console.log('slug from static  ::', slug)
  return (
    <Layout preview={preview} allTopics={allTopics}>
      <Head>

      </Head>
      <Box bgcolor="background.default">
      <Container>
        {/* <Header allTopics={allTopics} /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
            <>
              <article>
                <Head>
                  <title>
                    {post.title} | Basic Biotech
                </title>
                  <meta
                    property="og:image"
                    content={post.featuredImage?.node?.sourceUrl}
                  />
                </Head>

                <PostHeader
                  post={post}
                  title={post.title}
                  date={post.date}
                  category={post.postdata.category}
                />

                <Box>


                  <PostBody slug={slug} category={post.postdata.category} socialLinks={post.socialLinks} content={post.content} />
                </Box>

                {/* <footer> */}
                {/* {post.tags.edges.length > 0 && <Tags tags={post.tags} />} */}
                {/* </footer> */}
              </article>

              {/* <SectionSeparator /> */}
             

              {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
            </>
          )}
      </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const allTopics = await getAllTopics()

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      allTopics,
      slug : params.slug
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}