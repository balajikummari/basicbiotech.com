import { Box, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Modal from '@material-ui/core/Modal';
import AudioPlayer from 'material-ui-audio-player';



const useStyles = makeStyles((theme) => ({
  audioButton: {
    width: "100%",
    justifyContent: "right",
    textTransform: 'none',
  },

  audioPlayer: {
    top: '5%',
    position: 'relative',
   
  }

}));

export default function AudioButton({
  postdata
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    (
      (postdata.audiolength != null)
      &&
      (postdata.audiolength > 0)
    ) ?

      <Box>
        <Button className={classes.audioButton}
          onClick={handleOpen}
          startIcon={<YouTubeIcon style={{ fontSize: '2rem' }} />}
          size="small"
          variant="contained"
          color="primary"
          disableElevation>
          {postdata.audiolength + ' - Minute Listen'}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          style={{padding : '2rem'}}
        >
             
        <AudioPlayer
         rounded = {true}
          elevation={0}
          width="100%"
          // variation="default"
          spacing={3}
          autoplay={true}
          order="standart"
          preload="auto"
          src={postdata.audioFile?.mediaItemUrl} />
        </Modal>
      </Box>

      : <span></span>
  )
}
