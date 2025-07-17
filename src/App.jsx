import { useState } from 'react'
import Header from './layouts/Header.jsx'
import Container from './layouts/Container.jsx'
import Footer from './layouts/Footer.jsx'

import './App.css'

function App() {
  const [isCashier, setIsCashier] = useState(true);
  
  const handleRole = (role) => {
      setIsCashier(role);
  };

  return (
    <div>
      <Header isCashier= {isCashier} onUpdate={handleRole} />
      <Container isCashier= {isCashier} />
      <Footer />
    </div>
  )
}

export default App
