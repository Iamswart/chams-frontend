import React from "react";
import { Box, Text, HStack, IconButton, Spacer, Image } from "@chakra-ui/react";
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
    <HStack
      spacing={4}
      py={2}
      border="1px solid #F2F4F7"
      borderRadius="md"
      p={4}
    >
      <Image src={imageUrl} alt={item.type} boxSize="60px" />
      <Box>
        <Text fontSize="lg">{`${item.operator} ${item.type}`}</Text>
        <Text fontSize="sm" color="gray.500">
          {item.phone}
        </Text>
        <Text fontSize="sm" fontWeight="bold">{`₦${item.amount}`}</Text>
      </Box>
      <Spacer />
      <HStack>
        <IconButton icon={<FaEdit />} aria-label="Edit item" />
        <IconButton icon={<FaTrash />} aria-label="Delete item" />
      </HStack>
    </HStack>
  );
};
