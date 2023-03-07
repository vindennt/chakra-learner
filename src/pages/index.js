import { useColorMode } from "@chakra-ui/react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
const Links = ["About me", "Projects", "Blog", "Art", "Contact"];
const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center" gap="3.5">
            <IconButton aria-label="Github" onClick="" icon={<FaGithub />} />
            <IconButton aria-label="Github" onClick="" icon={<FaTwitter />} />
            <IconButton aria-label="Github" onClick="" icon={<FaInstagram />} />
            <IconButton
              aria-label="Toggle dark mode"
              onClick={toggleColorMode}
              colorScheme="purple"
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <Flex height="20vh" alignItems="center" justifyContent="center">
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
              Web developer with experience in JavaScript, Java, C++, and
              Python.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
