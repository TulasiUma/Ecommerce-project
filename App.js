import Ecommerce from './Components/Ecommerce';
import './App.css';
import Home from './Components/Home';
import Watches from './Components/Watches';
import EarBuds from './Components/EarBuds';
import NeckBands from './Components/NeckBands';
import DailyDeals from './Components/DailyDeals';
import GiftWithBoat from './Components/GiftWithBoat';

import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Categories from './Components/Categories';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Ecommerce/>}/>
        <Route path='/Home' element={<Ecommerce/>}/>
        <Route path='/EarBuds' element={<EarBuds/>}/>
        <Route path='/Watches' element={<Watches />}/>\
        <Route path='/NeckBands' element={<NeckBands />}/>
        <Route path='/DailyDeals' element={<DailyDeals/>}/>
<Route path='/GiftWithBoat' element={<GiftWithBoat/>}/>
      </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
