import {
  Box,
  Flex,
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Image,
  Stack,
  Link,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import Image from "next/image";
import Profile from "../pages/tabs/profile"
import Projects from "../pages/tabs/projects"

function ProfileTab({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tab
      borderRadius="12px"
      _selected={{
        bg: "teal.400",
      }}
      _hover={{
        bg: colorMode === "light" ? "teal.300" : "teal.600",
      }}
    >
      {children}
    </Tab>
  );
}

export default function Home() {
  return (
    <Box>
      <Header></Header>
      <Flex
        alignItems="center"
        direction="column"
        minH="100vh"
      >
        <Image
          p={10}
          boxSize="lg"
          borderRadius="full"
          src="/images/d.png"
          alt="profile"
        />
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="top"
        >
          <Heading size={"2xl"} mb={6}>Dennis Truong</Heading>

          <Text mb={6}>
            Student with experience in JavaScript, Java, C++, and Python.
          </Text>

          <Tabs
            variant="none"
            colorScheme="teal"
            defaultIndex={0}
            align="center"
            bg={"BlackAlpha.50"}
            maxW={"610px"}
          >
            <TabList>
              <ProfileTab>Profile</ProfileTab>
              <ProfileTab>Projects</ProfileTab>
              <ProfileTab>Hobbies</ProfileTab>
            </TabList>
            <TabPanels>
              <TabPanel align="left">
                <Profile></Profile>
              </TabPanel>
              <TabPanel align="left">
                <Projects></Projects>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Footer></Footer>
    </Box>
  );
}
