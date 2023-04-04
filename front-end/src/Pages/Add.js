import { FormControl, FormLabel, Input, Button, VStack, Box, Text } from "@chakra-ui/react";
import { createBook } from "../apiService";

export default function Add() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await createBook(formData);
      event.target.reset();
      console.log("Book created successfully!");
    } catch (error) {
      console.error(error.response.data.message || "Something went wrong");
    }
  }

  return (
    <Box  w="50%" py={4} px={24} mx="auto" mt={8}>
      <Text></Text>
      <Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name="title" required />
            </FormControl>
            <FormControl>
              <FormLabel>Author</FormLabel>
              <Input name="author" required />
            </FormControl>
            <FormControl>
              <FormLabel>Publisher</FormLabel>
              <Input name="publisher" required />
            </FormControl>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input name="year" type="number" required />
            </FormControl>
            <FormControl>
              <FormLabel>Pages</FormLabel>
              <Input name="pages" type="number" required />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input name="image" type="file" accept="image/*" required />
            </FormControl>
            <Button type="submit">Create Book</Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
