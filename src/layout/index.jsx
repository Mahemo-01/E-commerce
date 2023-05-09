import { Navbar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export function Layout({ children }) {

  return (
    <>
      <Navbar></Navbar>

      <section>
        {children}
      </section>

      <Footer></Footer>
    </>
  )
}