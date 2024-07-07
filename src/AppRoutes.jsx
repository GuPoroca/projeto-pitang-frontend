import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { PrimeReactProvider } from "primereact/api";
import Home from './pages/Home';
import Agendamentos from './pages/PaginaAgendamentos';
import Cadastrar from './pages/PaginaCadastrar'

const AppRoutes = () => <BrowserRouter>
<ChakraProvider>
<PrimeReactProvider>
    <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/agendamento' element = {<Agendamentos />}/>
        <Route path='/cadastrar' element = {<Cadastrar />}/>
    </Routes>
</PrimeReactProvider>
</ChakraProvider>
</BrowserRouter>

export default AppRoutes;