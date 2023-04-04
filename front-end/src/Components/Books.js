import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";

function Books({ id, title, author, image, publisher, year }) {
  return (
    <Card key={id} my={4} p={4} cursor="pointer">
      <VStack>
        <Heading size={"sm"}>
          {title} ({year})
        </Heading>
        <Text fontSize="sm">{author}</Text>
        <Image w={100} h={150} src={`http://localhost:8000/${image}`} />
        <Text fontSize="sm">
          <span>Publisher: </span>
          {publisher}
        </Text>
      </VStack>
    </Card>
  );
}

export default Books;
