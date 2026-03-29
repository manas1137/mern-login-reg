import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Loginpage from './Loginpage';
import Registartionpage from './Registartionpage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/registration' element={<Registartionpage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App