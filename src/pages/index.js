import {
  Box,
  Flex,
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

function ProfileTab({ children }) {
  return (
    <Tab
      borderRadius= "12px"
      _selected={{
        bg: "teal.400",
        mb: "2px",
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
          boxSize="30vh"
          width={500}
          height={500}
          // objectFit="cover"
          src="/images/d.png"
          alt="profile"
        />
        <Flex
          direction="column"
          background="grey.100"
          p={12}
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
              {/* <ProfileTab>Skills</ProfileTab> */}
              <ProfileTab>Projects</ProfileTab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex
                  direction="column"
                  p={5}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>Hi im denis </Text>
                </Flex>
              </TabPanel>
              {/* <TabPanel>
                <Flex
                  direction="column"
                  p={5}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>Yes </Text>
                </Flex>
              </TabPanel> */}
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
