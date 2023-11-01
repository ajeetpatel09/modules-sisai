import './App.css';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <NavLink to='/' style={{color: 'inherit'}}><h3>1. Authentication</h3></NavLink>
      <NavLink to='/createExcel' style={{color: 'inherit'}}><h3>2. Excel sheet creation from backend and frontend</h3></NavLink>
      <NavLink to='/pdfCreation' style={{color: 'inherit'}}><h3>3. pdf creation at frontend</h3></NavLink>
      <NavLink to='/chart' style={{color: 'inherit'}}><h3>4. Chart rendering</h3></NavLink>
      <NavLink to='/Geolocation' style={{color: 'inherit'}}><h3>5. Get current location</h3></NavLink>
      <NavLink to='/maps' style={{color: 'inherit'}}><h3>6. Maps rendering</h3></NavLink>
    </>
  )
}

export default App
