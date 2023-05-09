import styles from './layout.module.css'

import { Navbar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export function Layout() {

  return (
    <>
      <Navbar></Navbar>
      <section className={styles.nav_height}>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  )
}