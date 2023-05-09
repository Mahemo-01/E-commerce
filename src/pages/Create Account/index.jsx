import { Link } from "react-router-dom"
import styles from './create_account.module.css'
// import { img } from '../../assets/img/cool_img'

export function CreateAccount() {
  return (
    <>
      <div className={styles.backContainer}>

        <div className={styles.image}>
          <img src='src/assets/img/cool_img.png' />
        </div>

        <section className={styles.container}>
          <div>
            <span>English-USA</span>
            {/* // icon */}
          </div>

          <h1>Create Account</h1>

          <button>
            {/* // icon */}
            <span>Sing up with google</span>
          </button>

          <button>
            {/* // icon */}
            <span>Sing up with google</span>
          </button>

          <button>
            {/* // icon */}
            <span>Sing up with google</span>
          </button>

          <form>

            <span>Email : </span>
            <input type='text' required />
            <span>Username : </span>
            <input type='text' required />
            <span>Password : </span>
            <input type='text' required />
            <span>Confirm Password : </span>
            <input type='text' required />
            <button>Create Account</button>

          </form>
          <Link to='/'>
            <div>Already have an account? Log in</div>
          </Link>

        </section>
      </div>
    </>
  )
}