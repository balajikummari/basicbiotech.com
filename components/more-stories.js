import { Box, Grid } from "@material-ui/core";
import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  // TODO : Home Body Styling

  return (
    // <section>
    <Box pt={2} pb={6}>
      <Grid container spacing={5} >
        {posts.map(({ node }) => (
            <PostPreview key={node.slug} singlePost={node} />
        ))}
      </Grid>
    </Box>

    // </section>
  );
}
