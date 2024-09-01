import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Mens from './components/Mens';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Mens/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
