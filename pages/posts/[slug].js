import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/custom/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts,getAllTopics } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Tags from '../../components/tags'
import { Box } from '@material-ui/core'

export default function Post({ post, posts, preview,allTopics }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header allTopics={allTopics} />
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
                title={post.title}
                coverImage='https://vercel.wpengine.com/wp-content/uploads/2020/05/cover5.jpg'
                date={post.date}
                // author={post.author.node}
                // categories={post.categories}
              />

              <Box>
              <PostBody content={post.content} />
              </Box>

              <footer>
                {/* {post.tags.edges.length > 0 && <Tags tags={post.tags} />} */}
              </footer>
            </article>

            <SectionSeparator />
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
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
    },
    revalidate: 8
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}