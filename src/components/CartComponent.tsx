import React from 'react';
import { Box, Text, VStack, Button, Divider, Center } from '@chakra-ui/react';
import { useFetchCartItems, CartItem } from '../hooks/useFetchCartItems';
import { CartItemComponent } from './CartItemComponent';
import AppLoader from './AppLoader';

const Cart: React.FC = () => {
  const { data: cart, isLoading } = useFetchCartItems();

  console.log(cart);

  if (isLoading) {
    return (
      <Center py={8}>
        <AppLoader />
      </Center>
    );
  }

  if (!cart || cart.length === 0 || cart.every(cartItem => cartItem.items.length === 0)) {
    return (
      <Box p={4} bg="white" borderRadius="md" boxShadow="sm" w="100%">
        <Text fontSize="2xl" fontWeight="bold">Your cart</Text>
        <Text mt={4}>Your cart is empty</Text>
        <Button mt={4} variant="link" colorScheme="purple">Continue Shopping</Button>
      </Box>
    );
  }

  const cartItems = cart.flatMap(cartItem => cartItem.items);

  return (
    <Box p={4} bg="white" borderRadius="md" boxShadow="sm" w="100%">
      <Text fontSize="2xl" fontWeight="bold">Your cart</Text>
      <VStack spacing={4} mt={4}>
        {cartItems.map((item: CartItem, index: number) => (
          <React.Fragment key={item._id}>
            <CartItemComponent item={item} />
            {index < cartItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </VStack>
      <Button mt={4} variant="link" colorScheme="purple">Continue Shopping</Button>
    </Box>
  );
};

export default Cart;

