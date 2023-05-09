import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './user.module.css'

import { FaUserCircle } from 'react-icons/fa'
import { BsBagCheck, BsHeart } from 'react-icons/bs'
import { IoLogOutOutline, IoHelpOutline, IoSettingsOutline } from 'react-icons/io5'

export function User() {

  const [profileOpen, setProfileOpen] = useState(false)

  function logoutHandler() {

  }

  return (
    <>
      <button className={styles.profile} onClick={() => setProfileOpen(!profileOpen)}>
        <FaUserCircle></FaUserCircle>
      </button>

      {profileOpen ?
        <div className={styles.open}>

          <div className={styles.me}>
            <Link to='/account'>
              <div className={styles.img}>
                <FaUserCircle size={40} ></FaUserCircle>
                {/* <img src='/' alt='' /> */}
              </div>
            </Link>

            <div className={styles.text}>
              <span>Mario Hernandez</span>
              <label>Mexico city, Mexico</label>
            </div>

          </div>

          <Link to='/myAccount'>
            <button className={styles.box}>
              <IoSettingsOutline />
              <span>My Account</span>
            </button>
          </Link>

          <Link to='/myOrder'>
            <button className={styles.box}>
              <BsBagCheck />
              <span>My Order</span>
            </button>
          </Link>

          <Link to='/myWishList'>
            <button className={styles.box}>
              <BsHeart />
              <span>My Wishlist</span>
            </button>
          </Link>

          <Link to='/help'>
            <button className={styles.box}>
              <IoHelpOutline />
              <span>Help</span>
            </button>
          </Link>

          {/* <Link to='/myAccount'> */}
          <Link to='/CreateAccount'>
            <button className={styles.box} onClick={logoutHandler}>
              <IoLogOutOutline />
              <span>Log Out</span>
            </button>
          </Link>

        </div > : ''
      }
    </>
  )
}