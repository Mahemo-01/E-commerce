import { Link } from 'react-router-dom'
import styles from './navBar.module.css'

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create</Link>
      <Link to='/create'>Create</Link>
      <Link to='/create'>Create</Link>
    </nav>
  )
}