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
    SimpleGrid,
    Button,
    Wrap,
    WrapItem,
    Center
  } from "@chakra-ui/react";
  import { FaChevronLeft } from "react-icons/fa";

const Completion = {
  PLANNING: "Planning",
	INPROGRESS: "In Development",
	COMPLETE: "Complete",
  SUPPORTED: "Complete and Supported"
}

const ProjectList = [
  { name: "First", description: "Hey! My name is Dennis and I'm a student who pivoted to studying Computer Science aftering finishing an Honours in Biology. Right now, I'm absorbed with computer hardware, mobile app development, and front-end design",
  technologies: "java", image: "d.png", completion: Completion.COMPLETE, link: "/"},
  { name: "Second", description: "Desc", technologies: "Java, Java, Java, Java", image: "d.png", completion: Completion.PLANNING, link: "/"},
  { name: "Third", description: "Desc", technologies: "Java, Java, Java, Java", image: "d.png", completion: Completion.INPROGRESS, link: "/"},
  { name: "Fourth", description: "Desc", technologies: "Java, Java, Java, Java", image: "d.png", completion: Completion.SUPPORTED, link: "/"},
];



const StatusIndicator = ( {completion} ) => {
  const { colorMode } = useColorMode();
  let colour = (colorMode === "light" ? "gray.300" : "gray.600"); // default
  let text = completion; // default

  switch(text) {
    case Completion.COMPLETE:
      colour = (colorMode === "light" ? "gray.300" : "gray.600");
      break;
    case Completion.INPROGRESS:
      colour = (colorMode === "light" ? "yellow.300" : "yellow.600");
      break;
    case Completion.PLANNING:
      colour = (colorMode === "light" ? "blue.300" : "blue.600");
      break;
    case Completion.SUPPORTED:
      colour = (colorMode === "light" ? "green.300" : "green.600");
      break;
    default:
      text = "Unknown";
      break;
  }

  return (
    <Wrap >
      <WrapItem
        bg={colour}
        m={1}
        marginTop={4}
        borderRadius={12}
        >
        <Center
          paddingTop={1.5}
          paddingBottom={1.5}
          paddingLeft={4}
          paddingRight={4}
          >
          <Text fontSize={14}>{text}</Text>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

const Projects = () => {
  const { colorMode } = useColorMode();
    return (
      <SimpleGrid columns={1} spacing={10} marginTop={30}>
          {/* {Links.map((link) => (
                <LinkItem key={link.name} href={link.to} path={asPath}>
                  {link.name}
                </LinkItem> */}
            {ProjectList.map(( project ) => (
              <Box
                bg={(colorMode === "light" ? "gray.100" : "whiteAlpha.100")}
                boxShadow={"xl"}

                _hover={{bg: (colorMode === "light" ? "gray.50" : "whiteAlpha.200"),
                boxShadow: "2xl"}}

                border="0px"
                borderRadius={12}
              >
              <a href="">
              <Box padding={5}>
                <Heading size={"lg"}>{project.name}</Heading>

                <Text>{project.description}</Text>
                <br />
                <Text as="i">Skills: {project.technologies}</Text>
                <br />
                <Image
                  minW={"100%"}
                  borderRadius={12}

                  src={`/images/${project.image}`}
                  alt="Project Image"
                />
                <StatusIndicator completion={project.completion}></StatusIndicator>
                </Box>
                </a>
              </Box>
            ))}
    </SimpleGrid>
  );
};

export default Projects;