import React from "react";
import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">BooksOnline App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button onClick={(e) => navigate('/register')} colorScheme="teal" size='sm'>Sign Up</Button>
        <Button onClick={(e) => navigate('/login')} colorScheme="teal" size='sm'>Log in</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
