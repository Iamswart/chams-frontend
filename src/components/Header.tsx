import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Links from "../data/sections";

const name = ["Logo"];

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    as={"div"}
    px={2}
    py={1}
    color={"#2A3342"}
    rounded="md"
    _hover={{
      textDecoration: "none",
      color: "#2A3342",
    }}
    href="#"
    fontWeight="normal"
    mr="2rem"
    fontSize={"sm"}
    onClick={handleScrollToTop}
  >
    {children}
  </Link>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        bg="#fff"
        px={[4, 10]}
        py={1}
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
        boxShadow={scrolled ? "md" : "none"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to={"/"} onClick={handleScrollToTop}>
            <Flex alignItems={"center"}>
              <Text
                fontSize={"lg"}
                fontWeight={"semibold"}
                letterSpacing={"wide"}
                ml={4}
                color={"#000"}
                _hover={{ cursor: "pointer", color: "#FFD2A4" }}
              >
                {name}
              </Text>
            </Flex>
          </RouterLink>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={1}
              display={{ base: "none", lg: "flex" }}
            >
              {Links.map((link) => (
                <RouterLink to={link.to} key={link.id}>
                  <NavLink>{link.label}</NavLink>
                </RouterLink>
              ))}
              <RouterLink to={"/"}>
                <Button
                  variant={"outline"}
                  borderColor={"#CFC0F9"}
                  color={"#5F2EEA"}
                  size={"md"}
                  mr={4}
                  ml={"84px"}
                  _hover={{
                    bgColor: "transparent",
                    border: "1px",
                    borderColor: "#CFC0F9",
                    color: "#5F2EEA",
                  }}
                  onClick={handleScrollToTop}
                  borderRadius={"3xl"}
                  py={"14px"}
                  px={"32px"}
                >
                  Sign in
                </Button>
              </RouterLink>

              <RouterLink to={""}>
                <Button
                  variant={"solid"}
                  bgColor={"#5F2EEA"}
                  color={"#fff"}
                  size={"md"}
                  _hover={{
                    bgColor: "transparent",
                    border: "1px",
                    borderColor: "#5F2EEA",
                    color: "#5F2EEA",
                  }}
                  onClick={handleScrollToTop}
                  borderRadius={"3xl"}
                  py={"14px"}
                  px={"32px"}
                >
                  Create account
                </Button>
              </RouterLink>
            </HStack>
          </HStack>

          <IconButton
            bg={"#fff"}
            _hover={{ bg: "#fff" }}
            _active={{ bg: "#fff" }}
            _focus={{ outline: "none", bg: "#FFD2A4" }}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <RouterLink to={link.to} key={link.id}>
                  <NavLink>{link.label}</NavLink>
                </RouterLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
