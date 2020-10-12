
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({


}));

export default function SocialLinksFlex({
  socialLinks, personalWebsite
}) {
  //console.log('post :', post)
  const classes = useStyles();

  return (

    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 'auto', marginTop: 'auto' }}>

      {
        socialLinks?.instagram ?
          <a href={socialLinks?.instagram} target="_blank">
            <IconButton aria-label="share to instagram" style={{ padding: '0.3rem' }}>
              <InstagramIcon />
            </IconButton>
          </a>
          : <span />
      }


      {
        socialLinks?.twitter ?
          <a href={socialLinks?.twitter} target="_blank">
            <IconButton aria-label="share to Facebook" style={{ padding: '0.3rem' }}>
              <TwitterIcon />
            </IconButton>
          </a>
          : <span />
      }

      {
        socialLinks?.linkedin ?
          <a href={socialLinks?.linkedin} target="_blank">
            <IconButton aria-label="share to instagram" style={{ padding: '0.3rem' }}>
              <LinkedInIcon />
            </IconButton>
          </a>
          : <span />
      }


      {
        socialLinks?.facebook ?
          <a href={socialLinks?.facebook} target="_blank">
            <IconButton aria-label="share to linkedin" style={{ padding: '0.3rem' }}>
              <FacebookIcon />
            </IconButton>
          </a>
          : <span />
      }

      {
        socialLinks?.youtube ?
          <a href={socialLinks?.youtube} target="_blank">
            <IconButton aria-label="share to youtube" style={{ padding: '0.3rem' }}>
              <YouTubeIcon />
            </IconButton>
          </a>
          : <span />
      }
      {
        personalWebsite ?
          <a href={personalWebsite} target="_blank">
            <IconButton aria-label="share to instagram" style={{ padding: '0.3rem' }}>
              <LanguageIcon />
            </IconButton>
          </a>
          : <span />
      }

    </Box>
  )
}
