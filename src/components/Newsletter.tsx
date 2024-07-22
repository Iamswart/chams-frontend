import {
    Button,
    Input,
    Box,
    Text,
    FormControl,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    VStack,
  } from "@chakra-ui/react";
  import { EmailIcon } from "@chakra-ui/icons";
  
  const Newsletter = () => {
    return (
      <Box display="flex" justifyContent="center" w="100%">
        <Box py={"48px"} px={5} textAlign="center" w={"100%"} maxW="750px">
          <VStack spacing={4}>
            <Text fontSize="24px" fontWeight="bold">
              Newsletter
            </Text>
            <Text fontSize="16px" color="gray.600" maxW="500px">
              Be the first one to know about discounts, offers and events weekly in
              your mailbox. Unsubscribe whenever you like with one click.
            </Text>
            <FormControl as="form" w="100%" maxW="600px">
              <InputGroup size="lg">
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  borderRadius="full"
                  bg="white"
                  boxShadow="sm"
                  _focus={{ boxShadow: "outline" }}
                />
                <InputRightElement width="auto" mr="4px">
                  <Button
                    bgColor="#DFD5FB"
                    borderRadius="full"
                    color={"#5F2EEA"}
                    fontSize={"14px"}
                    _hover={{ bg: "#DFD5FB" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default Newsletter;
  