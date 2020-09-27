// import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />                                              { /*TODO : Change Meta Data*/}
      <div>
        <main>{children}</main>
      </div>
      <Footer />                                                  { /*TODO : Change Footer*/}
    </>
  )
}
