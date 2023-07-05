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
  NextLink,
} from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Links = [
  { name: "About", to: "/" },
  // { name: "Art", to: "/art" },
  // { name: "Blog", to: "/blog" },
  // { name: "Travel", to: "/travel" },
  // { name: "Contact", to: "/contact" },
];

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const teal = useColorModeValue("teal.200", "teal.700"); // set teal hue for dark mode

  return (
    <Link
      _hover={
        active
          ? "none"
          : {
              textDecoration: "none",
              bg: teal,
            }
      }
      px={2}
      py={1}
      as={NextLink}
      borderRadius={"12"}
      href={href}
      scroll="false"
      p={2}
      bg={active ? "teal.400" : undefined}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { asPath } = useRouter();

  return (
    <>
      <Box bg={colorMode === "light" ? "gray.100" : "gray.900"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            borderRadius={"12"}
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
                <LinkItem key={link.name} href={link.to} path={asPath}>
                  {link.name}
                </LinkItem>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center" gap="3.5">
            <IconButton
              borderRadius={"12"}
              aria-label="Toggle dark mode"
              onClick={toggleColorMode}
              // bg={colorMode === "light" ? "gray.300" : "teal.300"}
              colorScheme="teal"
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
                <LinkItem key={link.name} href={link.to} path={asPath}>
                  {link.name}
                </LinkItem>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
