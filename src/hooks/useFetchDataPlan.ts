import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const userProfileApiClient = new APIClient("/topup/get-data-plans");


interface DataPlan {
  productId: string;
  price: number;
  dataAmount: string;
}

export const useFetchDataPlan = (operator: string) => {

  return useQuery<DataPlan[], Error>(
    ["GET-DATA-PLANS", operator],
    () => {
      return userProfileApiClient.get<DataPlan[]>(operator);
    },
    {
      enabled: !!operator, 
    }
  );
};
