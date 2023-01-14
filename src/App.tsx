import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeUser from './pages/HomeUser';
import Jadwal from './pages/Jadwal';
import Absen from './pages/Absen';

function App() {
  return (
    <div>
      <Routes>
        {/* general */}
        <Route path='/' element={<Login/>}/>

        {/* admin */}
        <Route path='/admin/home' element={<Home/>}/>
        <Route path='/admin/jadwal' element={<Jadwal/>}/>
        <Route path='/admin/absen' element={<Absen/>}/>

        {/* User */}
        <Route path='/user/home' element={<HomeUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
