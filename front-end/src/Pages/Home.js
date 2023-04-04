import { useEffect, useState } from "react";
import { VStack, StackDivider, Box, Center, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Books from "../Components/Books";
import { getAllBooks } from "../apiService";

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={2} align="stretch">
      <Box h="40px">
        <Navbar />
      </Box>
      <Center>
      <SimpleGrid columns={2} spacingX='40px' spacingY='10px'>
          {books?.books?.map((book) => (
            <Books key={`${book.id} ${book.title}`} {...book} />
          ))}
        </SimpleGrid>
      </Center>
    </VStack>
  );
}

export default Home;
