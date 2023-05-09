import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/NavBar'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
