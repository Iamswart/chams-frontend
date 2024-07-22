import {
  Box,
  Text,
  VStack,
  Input,
  FormControl,
  Radio,
  RadioGroup,
  Button,
  Divider,
  HStack,
} from "@chakra-ui/react";

const ContactInfo = () => (
  <VStack
    spacing={4}
    p={4}
    bg="white"
    borderRadius="md"
    boxShadow="sm"
    w="100%"
  >
    <Text fontSize="2xl" fontWeight="bold">
      Contact information
    </Text>
    <Text fontSize="sm" color="gray.500">
      Please provide your best email
    </Text>
    <FormControl>
      <Input placeholder="Full name" bg="#F2F4F7" />
    </FormControl>
    <FormControl>
      <Input placeholder="Email" bg="#F2F4F7" />
    </FormControl>
  </VStack>
);

const PaymentOption = () => (
  <VStack
    spacing={6}
    py={6}
    bg="white"
    borderRadius="md"
    boxShadow="sm"
    w="100%"
  >
    <Text fontSize="2xl" fontWeight="bold">
      Select payment option
    </Text>
    <Text fontSize="sm" color="gray.500">
      Choose your preferred payment method
    </Text>
    <RadioGroup w="100%" px={6}>
      <VStack align="start" spacing={4} w="100%">
        <Box
          w="100%"
          border="1px"
          borderColor="#EAECF0"
          p={4}
          borderRadius="md"
        >
          <HStack justify="space-between">
            <Box>
              <Text fontWeight="bold">Pay with Paystack</Text>
            </Box>
            <Radio value="paystack" />
          </HStack>
        </Box>
        <Box
          w="100%"
          border="1px"
          borderColor="#EAECF0"
          p={4}
          borderRadius="md"
        >
          <HStack justify="space-between">
            <Box>
              <Text fontWeight="bold">Buy Now Pay Later</Text>
              <Text fontSize="sm" color="gray.500">
                Enjoy 6-Month Installments with Zero Interest
              </Text>
            </Box>
            <Radio value="bnpl" />
          </HStack>
        </Box>
        <Box
          w="100%"
          border="1px"
          borderColor="#EAECF0"
          p={4}
          borderRadius="md"
        >
          <HStack justify="space-between">
            <Box>
              <Text fontWeight="bold">Generate Payment Link</Text>
              <Text fontSize="sm" color="gray.500">
                Simply send them a link, and let the generosity flow!
              </Text>
            </Box>
            <Radio value="paymentLink" />
          </HStack>
        </Box>
      </VStack>
    </RadioGroup>
    <Divider />
    <VStack spacing={2} align="start" w="100%" px={6}>
      <HStack justify="space-between" w="100%">
        <Text>Sub total</Text>
        <Text fontWeight="bold">₦1,700</Text>
      </HStack>
      <HStack justify="space-between" w="100%">
        <Text>Gateway fee</Text>
        <Text fontWeight="bold">₦1,700</Text>
      </HStack>
      <HStack justify="space-between" w="100%">
        <Text>Total</Text>
        <Text fontWeight="bold">₦1,700</Text>
      </HStack>
    </VStack>
    <HStack spacing={4} mt={4} w="100%" px={6}>
      <Button
        flex={1}
        variant="outline"
        borderColor="#CFC0F9"
        color="#5F2EEA"
        rounded="full"
      >
        Cancel
      </Button>
      <Button flex={1} bgColor="#5F2EEA" color="#fff" rounded="full">
        Pay ₦1,700
      </Button>
    </HStack>
  </VStack>
);

export { ContactInfo, PaymentOption };
