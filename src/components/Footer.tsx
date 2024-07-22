import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      color={"#fff"}
      target={"_blank"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      opacity={"0.7799999713897705"}
      color={"#fff"}
    >
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#5F2EEA"} py={10} w={"100%"}>
      <Box as={Stack} px={8}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Text fontSize={"sm"} color={"#fff"} opacity={"0.7799999713897705"}>
              Lorem ipsum dolor sit amet consectetur. Gravida bibendum interdum
              vel vivamus dignissim consectetur enim in. Ultricies accumsan
              egestas ultrices mi adipiscing ultrices ornare. Mauris elementum
              accumsan elementum rhoncus risus sed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 4 }} spacing={8} ml={10}>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Stack direction={"column"} spacing={2}>
                <Link href={""} color={"#fff"} _hover={{ color: "#fff" }}>
                  About us
                </Link>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Explore</ListHeader>
              <Stack direction={"column"} spacing={2}>
                <Link href={""} color={"#fff"} _hover={{ color: "#fff" }}>
                  Marketplace
                </Link>
                <Link href={""} color={"#fff"} _hover={{ color: "#fff" }}>
                  Sample storefront
                </Link>
                <Link href={""} color={"#fff"} _hover={{ color: "#fff" }}>
                  Bills payment
                </Link>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Stack direction={"column"} spacing={2}>
                <Link href={""} color={"#fff"} _hover={{ color: "#fff" }}>
                  Privacy note
                </Link>
                <Link href={""} color={"#fff"} _hover={{ color: "#fff" }}>
                  Terms and condition
                </Link>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Contact us</ListHeader>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Facebook"} href={""}>
                  <FaFacebook />
                </SocialButton>
                <SocialButton label={"YouTube"} href={""}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={""}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
              <Text color={"#fff"}>This address</Text>
              <Link href="mailto:info@xyz.com">
                <Button
                  variant="link"
                  fontSize={"sm"}
                  color={"#fff"}
                  leftIcon={<GrMail />}
                  _hover={{ color: "#fff" }}
                >
                  info@xyz.com
                </Button>
              </Link>
              <Link href="tel:+234 000 000 0000">
                <Button
                  variant="link"
                  fontSize={"sm"}
                  color={"#fff"}
                  leftIcon={<PhoneIcon />}
                  _hover={{ color: "#fff" }}
                >
                  + 234 000 000 0000
                </Button>
              </Link>
            </Stack>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
