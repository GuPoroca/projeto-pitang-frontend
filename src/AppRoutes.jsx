import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import Agendamentos from './pages/Agendamentos';
import Cadastrar from './pages/Cadastrar'

const AppRoutes = () => <BrowserRouter>
<ChakraProvider>
    <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/agendamento' element = {<Agendamentos />}/>
        <Route path='/cadastrar' element = {<Cadastrar />}/>
    </Routes>
</ChakraProvider>
</BrowserRouter>

export default AppRoutes;