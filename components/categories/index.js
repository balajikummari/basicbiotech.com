
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
      justify="flex-end"
      spacing={1}>

          <Grid item >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button size="small" variant="contained" color="primary" className={classes.tag} disableElevation>
                <Link as={`/topics/${category? category[0]?.name : ''}`} href={`/topics/${category? category[0]?.name : ''}`} color='inherit' underline='none'>
                  <Typography  variant='caption'>
                    {category? category[0]?.name : ''}
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Grid>
     
    </Grid>
  )
}
