import { Box, Heading} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../components/404";
import BadRequest from "../components/Wrong";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box>
        <Heading>Ooops</Heading>
        {isRouteErrorResponse(error) ? <NotFound /> : <BadRequest />}
      </Box>
    </>
  );
};

export default ErrorPage;
