
import { Box, Button, Grid, Link, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({


}));

export default function Categories({
  category
}) {
  const classes = useStyles();

  return (
    <Grid container
      direction="row"
      justify="flex-start"
      spacing={1}>
      {category.map((categ) => {
        return (
          <Grid item >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button size="small" variant="contained" color="primary" className={classes.tag} disableElevation>
                <Link as={`/topics/${categ.name}`} href={`/topics/${categ.name}`} color='inherit' underline='none'>
                  <Typography  variant='caption'>
                    {categ.name}
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Grid>)
      })}
    </Grid>
  )
}
