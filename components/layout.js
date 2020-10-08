// import Alert from '../components/alert'
import Header from '../components/custom/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import { Box } from '@material-ui/core'

export default function Layout({ children,allTopics }) {
  return (
    <>
      <Meta /> 
      <Header allTopics={allTopics}/>                                             { /*TODO : Change Meta Data*/}
      <Box>
        <main>{children}</main>
      </Box>
     <Footer />
    </>
  )
}
