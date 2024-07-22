import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
  Text,
  Image,
} from "@chakra-ui/react";
import BuyAirtime from "./BuyAirtime";
import BuyData from "./BuyData";
import Utilities from "./Utilities";

const BillingComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleAddToCart = () => {
  };

  const handleCheckout = () => {
  };

  return (
    <Grid
      templateColumns={isLargerThan768 ? "2fr 1fr" : "1fr"}
      gap={4}
      mb={8}
      mt={{ base: 24, lg: 8 }}
      px={[4, 10]}
    >
      <GridItem>
        <Box
          bg="#fff"
          p={12}
          borderRadius="12px"
          border="1px solid #EAECF0"
          w="full"
        >
          <Text fontSize="20px" fontWeight="bold" lineHeight={"30px"}>
            Pay bills with ease
          </Text>
          <Text
            mt="8px"
            mb="32px"
            fontSize={"16px"}
            lineHeight={"24px"}
            color={"#667085"}
          >
            Enjoy the convenience of paying bills with ease.
          </Text>
          <Tabs
            variant="line"
            index={activeTab}
            onChange={handleTabChange}
            flex={2}
          >
            <TabList mb={4}>
              <Tab
                _selected={{ borderBottom: "2px solid #5F2EEA", bg: "#EFEAFD" }}
                flex="1"
                textAlign="center"
              >
                Buy airtime
              </Tab>
              <Tab
                _selected={{ borderBottom: "2px solid #5F2EEA", bg: "#EFEAFD" }}
                flex="1"
                textAlign="center"
              >
                Buy data
              </Tab>
              <Tab
                _selected={{ borderBottom: "2px solid #5F2EEA", bg: "#EFEAFD" }}
                flex="1"
                textAlign="center"
              >
                Utilities
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BuyAirtime
                  onAddToCart={handleAddToCart}
                  onCheckout={handleCheckout}
                />
              </TabPanel>
              <TabPanel>
                <BuyData
                  onAddToCart={handleAddToCart}
                  onCheckout={handleCheckout}
                />
              </TabPanel>
              <TabPanel>
                <Utilities />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </GridItem>
      {isLargerThan768 && (
        <GridItem>
          <Box px={8} ml={8}>
            <Image
              src="https://res.cloudinary.com/dfscst5lw/image/upload/v1721568468/portfolio_website/banner-01_tg8wnq.png"
              alt="Illustration"
              style={{ maxWidth: "100%", borderRadius: "12px" }}
              mb="32px"
            />
            <Image
              src="https://res.cloudinary.com/dfscst5lw/image/upload/v1721568480/portfolio_website/banner-02_nwagd3.png"
              alt="Illustration"
              style={{ maxWidth: "100%", borderRadius: "12px" }}
            />
          </Box>
        </GridItem>
      )}
    </Grid>
  );
};

export default BillingComponent;
