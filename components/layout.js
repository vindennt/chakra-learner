import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = [
  { name: "About", to: "/" },
  { name: "Art", to: "/art" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

export default function Layout() {
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
          {/* Mobile drop down menu*/}
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text as="b">dtruong</Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  key={link.name}
                  href={link.to}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center" gap="3.5">
            <IconButton
              aria-label="Toggle dark mode"
              onClick={toggleColorMode}
              colorScheme={colorMode === "light" ? "blackAlpha" : "blue"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Flex>
        </Flex>

        {/* Desktop style navbar  */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  key={link.name}
                  href={link.to}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
