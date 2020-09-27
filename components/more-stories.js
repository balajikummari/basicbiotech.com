import { Grid } from "@material-ui/core";
import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  // TODO : Home Body Styling
 
  return (
    <section>
      <Grid container spacing={4} >
        {posts.map(({ node }) => (
          <PostPreview singlePost = {node} />
        ))}
        {posts.map(({ node }) => (
          <PostPreview singlePost = {node} />
        ))}
      </Grid>
    </section>
  );
}
