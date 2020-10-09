// import Alert from '../components/alert'
import Header from '../components/custom/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import { Box, useTheme } from '@material-ui/core'

export default function Layout({ children,allTopics }) {
  const theme = useTheme();
  return (
    <>
      <Meta /> 
      <Header allTopics={allTopics}/>                                             { /*TODO : Change Meta Data*/}
      <Box style={{backgroundColor: theme.palette.background.default}}>
        <main>{children}</main>
      </Box>
     <Footer />
    </>
  )
}
