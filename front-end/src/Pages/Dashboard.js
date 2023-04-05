import React from "react";
import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Dashboard</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button onClick={(e) => navigate("/all")} colorScheme="teal" variant="link">
          All
        </Button>
        <Button onClick={(e) => navigate("/add")} colorScheme="teal" variant="link">
          Add
        </Button>
        <Button onClick={(e) => navigate("/detail/:id")} colorScheme="teal" variant="link">
          Detail
        </Button>
        <Button onClick={(e) => navigate("/edit/:id")} colorScheme="teal" variant="link">
          Edit
        </Button>
      </ButtonGroup>
      <Spacer />
      <Box p="2">
        <Button onClick={(e) => navigate("/")} colorScheme="teal" size="sm">
          Logout
        </Button>
      </Box>
    </Flex>
  );
}

export default Dashboard;
