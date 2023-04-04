import React, { useState } from "react";
import { Flex, Center, Input, Button, FormLabel, Stack } from "@chakra-ui/react";
import axios from "../axios.js";
import { useNavigate } from "react-router-dom";
import { Alert, AlertIcon } from "@chakra-ui/alert";

function Login() {
  let [email, setEmail] = useState(" ");
  let [password, setPassword] = useState(" ");
  let [alert, setAlert] = useState(null);
  let navigate = useNavigate();

  function handleSubmit() {
    // console.log(email);
    // console.log(password);

    axios({
      method: "post",
      url: "/login",
      data: { email, password },
    })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/dashboard");
        setAlert(
          <Alert status="success">
            <AlertIcon />
            Login Success
          </Alert>
        );
        //   console.log(response.data);
      })
      .catch((err) => {
        setAlert(
          <Alert status="error">
            <AlertIcon />
            Login Failed
          </Alert>
        );
        // console.log(err);
      });
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Center>
        <Stack spacing={3}>
          <FormLabel>Email</FormLabel>
          <Input type="text" onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleSubmit}>Login</Button>
          {alert}
        </Stack>
      </Center>
    </Flex>
  );
}

export default Login;
 