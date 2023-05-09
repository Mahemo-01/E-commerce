import { BsFillBagFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { MyCart } from '../../../pages/MyCart'
// import styles from './cart.module.css'

export function Cart() {
  return (
    <button>
      <Link to='/myCart'>
        <BsFillBagFill></BsFillBagFill>
      </Link>
    </button>
  )
}