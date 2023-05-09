import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/NavBar'
import { MyCart } from './pages/MyCart'
import { Footer } from './components/Footer'



function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar></Navbar>

        <section>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<MyCart />}></Route>
          </Routes>
        </section>
        <Footer></Footer>


      </BrowserRouter>
    </>
  )
}

export default App
