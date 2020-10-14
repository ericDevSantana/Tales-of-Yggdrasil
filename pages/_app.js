import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Partials/Navbar'
import Footer from './Partials/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
      </>

  )
}

export default MyApp
