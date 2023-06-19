import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/createGame' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
