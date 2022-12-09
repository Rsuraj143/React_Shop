
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path="/cartitem" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
