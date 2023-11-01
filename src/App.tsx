import './App.css';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <NavLink to='/createExcel' style={{color: 'inherit'}}><h3>1. Excel sheet creation</h3></NavLink>
      <NavLink to='/pdfCreation' style={{color: 'inherit'}}><h3>2. pdf creation</h3></NavLink>
      <NavLink to='/chart' style={{color: 'inherit'}}><h3>3. Chart rendering</h3></NavLink>
      <NavLink to='/Geolocation' style={{color: 'inherit'}}><h3>4. Get current location</h3></NavLink>
      <NavLink to='/maps' style={{color: 'inherit'}}><h3>5. Maps rendering</h3></NavLink>
    </>
  )
}

export default App
