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
} from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import Image from "next/image";

function ProfileTab({ children }) {
  return (
    <Tab
      borderRadius= "12px"
      _selected={{
        bg: "teal.400",
      }}
      _hover={{
        bg: "teal.200",
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
      <Flex //</Box>height="20vh"
        alignItems="center"
        direction="column"
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
          background="grey.100"

          rounded={6}
          alignItems="center"
          justifyContent="top"
        >
          <Heading mb={6}>Dennis Truong</Heading>

          <Text mb={6}>
            Developer with experience in JavaScript, Java, C++,
            and Python.
          </Text>

          <Tabs
            variant="none"
            colorScheme="cyan"
            defaultIndex={0}
            align="center"
          >
            <TabList>
              <ProfileTab>Bio</ProfileTab>
              <ProfileTab>Projects</ProfileTab>
            </TabList>
            <TabPanels>
            {/* Bio tab contents */}
              <TabPanel> 
                <Stack
                  p={5}
                  background="grey.100"
                  maxW="lg"
                >
                  <Text>Hey! My name is Dennis and I'm a computer science student with a background in biological research. </Text>
                  <Heading size={"md"} >Education</Heading>
                  <Heading size={"sm"}>The University of British Columbia </Heading>
                  <Text>Bachelor of Computer Science (2022 - Present)</Text>
                  <Text>Bachelor of Science, Honours in Animal Biology (2018 - 2022)</Text>
                </Stack>
              </TabPanel>
              {/* Projects tab contents */}
              <TabPanel>
                <Flex
                  direction="column"
                  p={5}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>NLGDP</Text>
                  <Text>Nathan Lu Genomic Duplication Project</Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Footer></Footer>
    </Box>
  );
}
