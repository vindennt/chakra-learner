import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Art() {
  return (
    <Box minH={"100vh"} display={"flex"} flexDirection={"column"}>
      <Header />
      <Flex
        direction="column"
        p={12}
        background="grey.100"
        rounded={6}
        flexGrow={2}
      >
        <Image
          borderRadius="10px"
          boxSize="md"
          objectFit="fill"
          src="https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80"
          alt="Ninh Binh, Vietnam"
        />
      </Flex>
      <Footer></Footer>
    </Box>
  );
}
