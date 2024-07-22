import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const authApiClient = new APIClient("/cart/add-items-to-cart");

export interface CartItem {
  type: string;
  amount: number;
  operator: string;
  email: string;
  phone: string;
  productId?: string;
  dataPlan?: string;
}

interface AddItemsToCartRequest {
  items: CartItem[];
}

interface AddItemsToCartResponse {
  sessionId?: string;
  userId?: string;
  items: CartItem[];
  _id: string;
  __v: number;
}

export const useAddItemsToCart = () => {
    return useMutation<AddItemsToCartResponse, Error, AddItemsToCartRequest>(
      ['ADD-ITEMS-TO-CART'], 
      (input: AddItemsToCartRequest) => authApiClient.post<AddItemsToCartRequest, AddItemsToCartResponse>(input)
    );
  };
  
  
  
  
  
