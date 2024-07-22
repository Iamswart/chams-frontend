import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Button,
  Input,
  Box,
  Image,
  Text,
  FormControl,
  InputGroup,
  FormErrorMessage,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CartItem, useAddItemsToCart } from "../hooks/useAddItemToCart";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface BuyAirtimeProps {
  onAddToCart: () => void;
  onCheckout: () => void;
}

export const airtimeSchema = z.object({
  phone: z
    .string()
    .length(11, { message: "Phone number must be exactly 11 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  amount: z
    .union([z.string(), z.number()])
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value) && value > 0, {
      message: "Amount must be a positive number",
    }),
});

type AirtimeFormData = z.infer<typeof airtimeSchema>;

const BuyAirtime: React.FC<BuyAirtimeProps> = ({ onAddToCart, onCheckout }) => {
  const [operator, setOperator] = useState<string>("mtn");
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AirtimeFormData>({
    resolver: zodResolver(airtimeSchema),
  });

  useEffect(() => {
    setOperator("mtn");
  }, []);

  const handleOperatorChange = (newOperator: string) => {
    setOperator(newOperator);
  };

  const { mutate: addToCart, isLoading } = useAddItemsToCart();

  const onSubmit = (data: AirtimeFormData) => {
    const cartItem: CartItem = {
      type: "airtime",
      amount: Number(data.amount),
      operator,
      email: data.email,
      phone: `234${data.phone.substring(1)}`,
    };
    addToCart(
      { items: [cartItem] },
      {
        onSuccess: () => {
          toast({
            title: "Item added to cart.",
            description: "Your item has been added to the cart successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          queryClient.invalidateQueries(["FETCH-CART-ITEMS"]);
          onAddToCart();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "An error occurred while adding the item to the cart.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        },
      }
    );
  };

  const handleCheckout = () => {
    onCheckout();
    navigate("/checkout");
  };

  return (
    <VStack align="stretch" w={"430px"}>
      <Text fontSize="18px" fontWeight="bold" lineHeight={"28px"}>
        Buy airtime
      </Text>
      <Text
        mt="4px"
        mb="32px"
        fontSize={"16px"}
        lineHeight={"24px"}
        color={"#667085"}
      >
        Please enter your details
      </Text>
      <HStack spacing={4} mb={"24px"}>
        <Box textAlign="center">
          <Button
            variant="ghost"
            h={"60px"}
            onClick={() => handleOperatorChange("mtn")}
            bg={operator === "mtn" ? "#EFEAFD" : "transparent"}
          >
            <Image
              src="https://res.cloudinary.com/dfscst5lw/image/upload/v1721568480/portfolio_website/Rectangle_13_kfundw.png"
              alt="MTN"
              boxSize="60px"
            />
          </Button>
          <Text mt={2}>MTN</Text>
        </Box>
        <Box textAlign="center">
          <Button
            variant="ghost"
            h={"60px"}
            onClick={() => handleOperatorChange("airtel")}
            bg={operator === "airtel" ? "#EFEAFD" : "transparent"}
          >
            <Image
              src="https://res.cloudinary.com/dfscst5lw/image/upload/v1721568480/portfolio_website/Rectangle_14_ff98uh.png"
              alt="Airtel"
              boxSize="60px"
            />
          </Button>
          <Text mt={2}>Airtel</Text>
        </Box>
        <Box textAlign="center">
          <Button
            variant="ghost"
            h={"60px"}
            onClick={() => handleOperatorChange("9mobile")}
            bg={operator === "9mobile" ? "#EFEAFD" : "transparent"}
          >
            <Image
              src="https://res.cloudinary.com/dfscst5lw/image/upload/v1721568480/portfolio_website/Rectangle_15_e7zeqf.png"
              alt="9mobile"
              boxSize="60px"
            />
          </Button>
          <Text mt={2}>9mobile</Text>
        </Box>
        <Box textAlign="center">
          <Button
            variant="ghost"
            h={"60px"}
            onClick={() => handleOperatorChange("glo")}
            bg={operator === "glo" ? "#EFEAFD" : "transparent"}
          >
            <Image
              src="https://res.cloudinary.com/dfscst5lw/image/upload/v1721568480/portfolio_website/Rectangle_16_trgtti.png"
              alt="Glo"
              boxSize="60px"
            />
          </Button>
          <Text mt={2}>Glo</Text>
        </Box>
      </HStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={"24px"} isInvalid={!!errors.phone}>
          <InputGroup>
            <Input
              id="phone"
              placeholder="Phone Number"
              bg="#F2F4F7"
              {...register("phone")}
            />
          </InputGroup>
          <FormHelperText>Phone number should be 11 digits</FormHelperText>
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={"24px"} isInvalid={!!errors.amount}>
          <InputGroup>
            <Input
              id="amount"
              placeholder="Amount"
              bg="#F2F4F7"
              type="number"
              {...register("amount", { valueAsNumber: true })}
            />
          </InputGroup>
          <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={"24px"} isInvalid={!!errors.email}>
          <InputGroup>
            <Input
              id="email"
              placeholder="Email address"
              bg="#F2F4F7"
              {...register("email")}
            />
          </InputGroup>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <HStack spacing={4}>
          <Button
            flex={1}
            variant="outline"
            borderColor="#CFC0F9"
            color="#5F2EEA"
            type="submit"
            rounded={"full"}
            isLoading={isLoading}
            disabled={isLoading}
          >
            Add to cart
          </Button>
          <Button
            flex={1}
            bgColor="#5F2EEA"
            color="#fff"
            onClick={handleCheckout}
            rounded={"full"}
          >
            Proceed to checkout
          </Button>
        </HStack>
      </form>
    </VStack>
  );
};

export default BuyAirtime;
