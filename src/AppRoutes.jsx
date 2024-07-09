import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { PrimeReactProvider } from "primereact/api";
import Agendamentos from "./pages/PaginaAgendamentos";
import Cadastrar from "./pages/PaginaCadastrar";
import NavBar from "./components/NavBar";

const AppRoutes = () => (
  <BrowserRouter>
    <ChakraProvider>
      <PrimeReactProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cadastrar />} />
          <Route path="/agendamento" element={<Agendamentos />} />
        </Routes>
      </PrimeReactProvider>
    </ChakraProvider>
  </BrowserRouter>
);

export default AppRoutes;
