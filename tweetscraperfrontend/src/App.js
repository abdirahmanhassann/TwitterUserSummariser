import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.tsx';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}/>
</Routes>
</BrowserRouter>
</>
    );
}

export default App;
