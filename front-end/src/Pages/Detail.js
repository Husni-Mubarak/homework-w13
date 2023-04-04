import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Center, SimpleGrid, VStack, StackDivider } from "@chakra-ui/react";
import Books from "../Components/Books";
import Dashboard from "./Dashboard";
import { getBookDetailById } from "../apiService";

function Detail() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBookDetailById(id);
      setBooks(books);
      console.log(books);
    };
    fetchBooks();
  }, [id]);

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

export default Detail;
