import { useEffect, useState } from "react";
import { Box, Center, SimpleGrid, VStack, StackDivider } from "@chakra-ui/react";
import Books from "../Components/Books";
import Dashboard from "./Dashboard";
import { getAllBooks } from "../apiService";

function All() {
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
        <Dashboard />
      </Box>
      <Box>
        <Center>
          <SimpleGrid columns={2} spacingX="40px" spacingY="10px">
            {books?.books?.map((book) => (
              <Books key={`${book.id} ${book.title}`} {...book} />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </VStack>
  );
}

export default All;
