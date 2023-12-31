import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div className='bg-black text-white'>
          <Navbar/>
          <div className='min-h-screen relative top-16 text-white border-t-orange-300' >
            <Home />
          </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
