import { useEffect, useState } from "react";
import Newsletter from "../components/Newsletter";
import AppLoader from "../components/AppLoader";
import Checkout from "../components/Checkout";
import { Box } from "@chakra-ui/react";


const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(
    !sessionStorage.getItem("alreadyLoaded")
  );

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("alreadyLoaded", "true");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <AppLoader />
        </Box>
      ) : (
        <>
          <Checkout />
          <Newsletter />
        </>
      )}
    </>
  );
};

export default CheckoutPage;
