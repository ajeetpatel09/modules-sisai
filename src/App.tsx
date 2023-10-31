import './App.css';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <NavLink to='/' style={{color: 'inherit'}}><h3>1. Authentication</h3></NavLink>
      <NavLink to='/' style={{color: 'inherit'}}><h3>2. Web socket</h3></NavLink>
      <NavLink to='/' style={{color: 'inherit'}}><h3>3. Cron jobs- send mails</h3></NavLink>
      <NavLink to='/' style={{color: 'inherit'}}><h3>4. Cron jobs- update device status</h3></NavLink>
      <NavLink to='/createExcel' style={{color: 'inherit'}}><h3>5. Excel sheet creation from backend and frontend</h3></NavLink>
      <NavLink to='/pdfCreation' style={{color: 'inherit'}}><h3>6. pdf creation at frontend</h3></NavLink>
      <NavLink to='/chart' style={{color: 'inherit'}}><h3>7. Chart rendering</h3></NavLink>
      <NavLink to='/Geocoding' style={{color: 'inherit'}}><h3>8. Geocoding</h3></NavLink>
      <NavLink to='/' style={{color: 'inherit'}}><h3>9. Link based reset/create password</h3></NavLink>
      <NavLink to='/' style={{color: 'inherit'}}><h3>10. MQTT connection</h3></NavLink>
      <NavLink to='/maps' style={{color: 'inherit'}}><h3>11. Maps rendering</h3></NavLink>
    </>
  )
}

export default App
