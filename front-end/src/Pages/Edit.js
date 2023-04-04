import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormControl, FormLabel, Input, Button, VStack, Box, Text } from "@chakra-ui/react";
import { editBook, getBookDetailById } from "../apiService";

export default function Edit() {
  const { id } = useParams();
  const [book, setBook] = useState({});


  useEffect(() => {
    async function fetchBook() {
      const book = await getBookDetailById(id);
      setBook(book);
      console.log(book);
    }
    fetchBook();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.set("id", id); 
    console.log(formData)

    try {
      await editBook(formData);
      event.target.reset();
      console.log("Edited successfully!");
    } catch (error) {
      console.error(error.message || "Something went wrong");
    }
  }

  return (
    <Box w="50%" py={4} px={24} mx="auto" mt={8}>
      <Text>Edit Book</Text>
      <Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name="title" defaultValue={book.title || ""} />
            </FormControl>
            <FormControl>
              <FormLabel>Author</FormLabel>
              <Input name="author" defaultValue={book.author} />
            </FormControl>
            <FormControl>
              <FormLabel>Publisher</FormLabel>
              <Input name="publisher" defaultValue={book.publisher} />
            </FormControl>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input name="year" type="number" defaultValue={book.year} />
            </FormControl>
            <FormControl>
              <FormLabel>Pages</FormLabel>
              <Input name="pages" type="number" defaultValue={book.pages} />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input name="image" type="file" accept="image/*" />
            </FormControl>
            <Button type="submit">Edit Book</Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
