// import Alert from '../components/alert'
import Header from '../components/custom/header'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children,allTopics }) {
  return (
    <>
      <Meta /> 
      <Header allTopics={allTopics}/>                                             { /*TODO : Change Meta Data*/}
      <div>
        <main>{children}</main>
      </div>
     <Footer/>
    </>
  )
}
