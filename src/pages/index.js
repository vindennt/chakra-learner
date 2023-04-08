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
import Layout from "../../components/layout";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function ProfileTab({ children }) {
  return (
    <Tab
      _selected={{
        borderBottom: "2px",
        mb: "2px",
        borderColor: "teal.400",
      }}
      _hover={{
        borderBottom: "2px",
        borderColor: "gray.300",
      }}
    >
      {children}
    </Tab>
  );
}

export default function Home() {
  return (
    <Box>
      <Layout></Layout>
      <Flex //</Box>height="20vh"
        alignItems="center"
        direction="column"
      >
      <Image
          borderRadius="full"
          boxSize="30vh"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80"
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
            Web developer and artist with experience in JavaScript, Java, C++,
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
              <ProfileTab>Skills</ProfileTab>
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
              <TabPanel>
                <Flex
                  direction="column"
                  p={5}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>Yes </Text>
                </Flex>
              </TabPanel>
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
      <Flex direction="column" p={5} alignItems="center" background="grey.100">
        <Link p={4} href="mailto:vindennt@gmail.com">
          vindennt@gmail.com
        </Link>
        <Flex gap="3.5">
          <a href="https://www.github.com/vindennt" target="blank">
            <IconButton aria-label="Github" icon={<FaGithub />} />
          </a>
          <a
            href="https://www.linkedin.com/in/dennis-truong-111291264/"
            target="blank"
          >
            <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} />
          </a>
          <a href="https://twitter.com/vindennt" target="blank">
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </a>
        </Flex>
      </Flex>
    </Box>
  );
}
