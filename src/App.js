
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './componentes/Home';
import './componentes/index.css';


function App() {
  return (
    <BrowserRouter>
      <div >
      <Routes>
        <Route exact path ='/' element={<Home/>} />
      </Routes> 
    </div>
    </BrowserRouter>
    
  );
}

export default App;