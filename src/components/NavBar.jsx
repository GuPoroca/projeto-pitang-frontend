// src/components/NavBar.js
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex as="nav" p={4} bg="teal.500" color="white" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.700" }}>
          Marcar Vacina
        </Link>
        <Link as={RouterLink} to="/agendamento" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.700" }}>
          Agendamentos
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
