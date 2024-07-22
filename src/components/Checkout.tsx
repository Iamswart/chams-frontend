import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import Cart from "./CartComponent";
import { ContactInfo, PaymentOption } from "./Contact";


const Checkout = () => (
  <Box p={8} mt={"90px"}>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      maxW="1200px"
      mx="auto"
    >
      <Cart />
      <VStack spacing={8}>
        <ContactInfo />
        <PaymentOption />
      </VStack>
    </SimpleGrid>
  </Box>
);

export default Checkout;
