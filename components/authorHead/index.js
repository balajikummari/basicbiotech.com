import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Categories from '../categories';

const useStyles = makeStyles((theme) => ({

}));

export default function AuthorHead({
  customauthor, dateGmt, category
}) {
  const cdnAuthor = "https://mldspy5by2vi.i.optimole.com/w:50/h:auto/q:auto/";
  const classes = useStyles();
  const date = parseISO(dateGmt)

  return (
    customauthor ? 
      <Box display='flex' justifyContent="space-between" alignItems="center">
      <CardActionArea style={{ width: 'fit-content' }} as={`/authors/${customauthor?.customauthor?.slug}`} href={`/authors/${customauthor?.slug}`} >
        {/** Author Photo Name and Date */}
        <CardHeader avatar={
          <Link as={`/authors/${customauthor?.customauthor?.slug}`} href="/authors/[slug]" variant='inherit'>
            <Avatar aria-label="author"
              className={classes.large}
              alt={customauthor?.customauthor?.fullName}
              src={cdnAuthor + customauthor?.customauthor?.profilePhoto?.mediaItemUrl}
            />
          </Link>
        }
          title={customauthor?.customauthor?.fullName}
          subheader={format(date, 'LLLL	d, yyyy')}
        />
      </CardActionArea>
      <Box pr='1rem'>
        <Categories category={category} />
      </Box>
    </Box>
  :
  <div></div>  

  )
}
