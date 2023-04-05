import { Box, Flex, Heading, Image, Skeleton, Text, Card, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import { getBookDetailById } from "../apiService";

function Detail() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <Box>
      <Dashboard />
      <VStack>
        <Box>
          {isLoading ? (
            <Skeleton height="300px" my="6" />
          ) : (
            <Flex>
              <Card>
                <Heading as="h1" size="lg">
                  {book.title}
                </Heading>
                <Box w="280px">
                  <Image src={`http://localhost:8000/${book.image}`} alt={book.title} />
                </Box>
                <Box ml="8">
                  <Text fontSize="lg" fontWeight="semibold" color="gray.500">
                    {book.author}
                  </Text>
                  <Text fontSize="md" fontWeight="semibold" color="gray.500">
                    {book.publisher}
                  </Text>
                  <Text fontSize="md" fontWeight="semibold" color="gray.500" mb="4">
                    {book.year} | {book.pages} pages
                  </Text>
                </Box>
              </Card>
            </Flex>
          )}
        </Box>
      </VStack>
    </Box>
  );
}

export default Detail;
