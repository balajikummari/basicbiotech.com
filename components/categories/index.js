
import { Box, Button, Container, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';




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
                  <Button style={{maxHeight: '70%'}} size="small" variant="contained" color="primary" className={classes.tag} disableElevation>
                    <Typography variant='body2'>
                      <Box fontWeight={600} >
                        {categ.name}
                      </Box>
                    </Typography>
                  </Button>
                </Grid>)
            })}
          </Grid>
            )
}
