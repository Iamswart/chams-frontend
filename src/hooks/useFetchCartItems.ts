import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


const cartItemsApiClient = new APIClient("/cart/fetch-cart-items");

export interface CartItem {
  type: string;
  amount: number;
  productId: string;
  operator: string;
  email: string;
  phone: string;
  _id: string;
  dataPlan?: string;
}

interface Cart {
  _id: string;
  sessionId: string;
  items: CartItem[];
  __v: number;
}


export const useFetchCartItems = () => {
  return useQuery<Cart[], Error>(
    ["FETCH-CART-ITEMS"],
    () => {
      return cartItemsApiClient.getAll<Cart[]>();
    }
  );
};
