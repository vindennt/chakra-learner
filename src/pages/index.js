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
import Profile from "../pages/tabs/profile";
import Projects from "../pages/tabs/projects";

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
    <Box minH={"100vh"} display={"flex"} flexDirection={"column"} flexGrow={1}>
      <Header></Header>
      <Flex alignItems="center" direction="column" minH="100vh">
        {/* <Box boxSize="sm" alignItems="center" justifyContent={"center"}> */}
        <Image
          p={10}
          objectFit="cover"
          boxSize="400px"
          borderRadius="full"
          src="/images/d.png"
          alt="profile"
        />
        {/* </Box> */}
        <Flex direction="column" alignItems="center" justifyContent="top">
          <Heading size={"2xl"} paddingX={10}>
            Dennis Truong
          </Heading>

          <Text mb={6} p={10}>
            Student with experience in Typescript, Java, C++, and Python.
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
              {/* <ProfileTab>Hobbies</ProfileTab> */}
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
