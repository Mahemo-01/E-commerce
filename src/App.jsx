import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Store } from './store/store'

import { Home } from './pages/Home'
import { MyCart } from './pages/MyCart'
import { Account } from './pages/Account'
import { Order } from './pages/Order'
import { Wishlist } from './pages/Wishlist'
import { Layout } from './layout'
import { CreateAccount } from './pages/Create Account'

function App() {
  // const store = useAppContext()

  // console.log(store.users)
  return (
    <>
      <Store>
        {/* {store.users ? <div>hola</div> : <div>adios</div>} */}

        <BrowserRouter>

          <Routes>
            <Route path='/CreateAccount' element={<CreateAccount />}></Route>

            <Route element={<Layout />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/myCart' element={<MyCart />}></Route>
              <Route path='/myAccount' element={<Account />}></Route>
              <Route path='/myOrder' element={<Order />}></Route>
              <Route path='/myWishlist' element={<Wishlist />}></Route>
            </Route>


          </Routes>

        </BrowserRouter>
      </Store>
    </>
  )
}

export default App
