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
  { name: "Art", to: "/art" },
  { name: "Blog", to: "/blog" },
  // { name: "Contact", to: "/contact" },
];

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      _hover={
        active
          ? "none"
          : {
              textDecoration: "none",
              bg: useColorModeValue("gray.300", "gray.700"),
            }
      }
      px={2}
      py={1}
      as={NextLink}
      borderRadius="8px"
      href={href}
      scroll={false}
      p={2}
      bg={active ? "teal.400" : undefined}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Layout = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { asPath } = useRouter();

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
                <LinkItem key={link.name} href={link.to} path={asPath}>
                  {link.name}
                </LinkItem>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center" gap="3.5">
            <IconButton
              aria-label="Toggle dark mode"
              onClick={toggleColorMode}
              colorScheme={colorMode === "light" ? "blackAlpha" : "teal"}
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

export default Layout;
