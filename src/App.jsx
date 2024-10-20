
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <h1 classname="App">Simple react router</h1>
    <div className="App">
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </nav>
    </div>
    <Outlet />
    </>
  )
}

export default App
