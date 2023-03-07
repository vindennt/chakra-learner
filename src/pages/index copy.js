import { Flex, Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="grey.100" p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder="vindennt@gmail.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="******" variant="filled" mb={6} type="password" />
        <Button mb="6" colorScheme="teal">
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle color</Button>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
