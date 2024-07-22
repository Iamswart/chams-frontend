import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";
import Links from "../data/subSections";
import { FaHeart } from "react-icons/fa";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        bg="#FCFCFD"
        px={[4, 10]}
        py={1}
        boxShadow={scrolled ? "md" : "none"}
        mt={20}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="#EAECF0"
        display={{ base: "none", lg: "flex" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={1}
              
            >
              {Links.map((link) => (
                <RouterLink to={link.to} key={link.id}>
                  <NavLink>{link.label}</NavLink>
                </RouterLink>
              ))}
              <RouterLink to={"/live"}>
                <Button
                  variant={"solid"}
                  bgColor={"#EFEAFD"}
                  color={"#5F2EEA"}
                  size={"sm"}
                  mr={4}
                  ml={"40px"}
                  _hover={{
                    bgColor: "transparent",
                    border: "1px",
                    borderColor: "#CFC0F9",
                    color: "#5F2EEA",
                  }}
                  onClick={handleScrollToTop}
                  borderRadius={"2xl"}
                  py={"4px"}
                  px={"18px"}
                >
                  Bills Payment
                </Button>
              </RouterLink>
              <RouterLink to={"/login"}>
                <Button
                  variant={"outline"}
                  borderColor={"#CFC0F9"}
                  color={"#5F2EEA"}
                  size={"md"}
                  ml={"20px"}
                  _hover={{
                    border: "1px",
                    borderColor: "#5F2EEA",
                  }}
                  onClick={handleScrollToTop}
                  //   borderRadius={"full"}
                  rounded={"full"}
                >
                  <FaHeart />
                </Button>
              </RouterLink>

              <RouterLink to={"/login"}>
                <Button
                  variant={"solid"}
                  bgColor={"#5F2EEA"}
                  color={"#fff"}
                  size={"md"}
                  ml={"20px"}
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
                  leftIcon={<FiShoppingCart />}
                  rightIcon={<PiNumberCircleTwoFill />}
                >
                  My cart
                </Button>
              </RouterLink>
            </HStack>
          </HStack>

          
        </Flex>

      </Box>
    </>
  );
}
