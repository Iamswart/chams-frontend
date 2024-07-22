import React from "react";
import { Box, Text, HStack, IconButton, Image, Flex, Spacer } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { CartItem } from "../hooks/useFetchCartItems";

interface CartItemProps {
  item: CartItem;
}

const imageUrls: { [key: string]: string } = {
  airtime:
    "https://res.cloudinary.com/dfscst5lw/image/upload/v1721654278/portfolio_website/Payment_Icon_tokcjc.png",
  data: "https://res.cloudinary.com/dfscst5lw/image/upload/v1721654309/portfolio_website/Payment_Icon_3_z8gbc5.png",
};

export const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const imageUrl = imageUrls[item.type] || "https://default.image/url";
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      py={2}
      border="1px solid #F2F4F7"
      borderRadius="md"
      p={4}
      w={"100%"}
    >
      <HStack spacing={4} align="center" mb={{ base: 4, md: 0 }}>
        <Image src={imageUrl} alt={item.type} boxSize="60px" />
        <Box>
          <Text fontSize="lg">{`${item.operator} ${item.type}`}</Text>
          <Text fontSize="sm" color="gray.500">
            {item.phone}
          </Text>
          <Text fontSize="sm" fontWeight="bold">{`₦${item.amount}`}</Text>
        </Box>
      </HStack>
      <Spacer />
      <HStack spacing={2} align="center">
        <IconButton
          icon={<FaEdit />}
          aria-label="Edit item"
          size={{ base: "sm", md: "md" }}
        />
        <IconButton
          icon={<FaTrash />}
          aria-label="Delete item"
          size={{ base: "sm", md: "md" }}
        />
      </HStack>
    </Flex>
  );
};
