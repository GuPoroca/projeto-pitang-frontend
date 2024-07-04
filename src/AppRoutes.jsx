import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Agendamentos from './pages/Agendamentos';

const AppRoutes = () => <BrowserRouter>
    <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/agendamento' element = {<Agendamentos />}/>
    </Routes>
</BrowserRouter>

export default AppRoutes;