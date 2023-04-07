import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.tsx';
import About from './components/About.tsx';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/About' element={<About/>}/>
</Routes>
</BrowserRouter>
</>
    );
}

export default App;
