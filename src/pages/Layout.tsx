import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  const location = useLocation();
  
  const pathsWithoutNavbar = [
    "/checkout"
  ];

  const shouldHideNavbar = pathsWithoutNavbar.includes(
    location.pathname
  );

  return (
    <>
      <Flex flexDirection="column" minHeight="100vh" w={"100%"} bgColor={"#FCFCFD"}>
      <Header />
      {!shouldHideNavbar && <Navbar />}
        <Box flex="1" m={"0px"} bgColor={"#FCFCFD"} w={"100%"}>
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
