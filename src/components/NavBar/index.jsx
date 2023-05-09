import { User } from './User'
import { Cart } from './Cart'
import { Link } from 'react-router-dom'
import styles from './navBar.module.css'
import { Home } from '../../pages/Home'

export function Navbar() {
  return (
    <nav className={styles.layout}>
      <div className={styles.logo}>
        <Link to='/' element={<Home></Home>}>
          <h2>Nav bar</h2>
          {/* <img src="" alt="imagen" /> */}
        </Link>
      </div>

      <div className={styles.search}>
        <input type="text" />
        <button>
        </button>
      </div>

      <div className={styles.icons}>
        <Cart></Cart>
        <User></User>
      </div>
    </nav>
  )
}