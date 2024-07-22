import { Box, Center, Text, VStack, Icon } from '@chakra-ui/react';
import { FaTools } from 'react-icons/fa';

const Utilities = () => {
  return (
    <Box h="200px" bg="#EFEAFD" borderRadius="md" border="1px solid #5F2EEA" p={4}>
      <Center h="full">
        <VStack spacing={4}>
          <Icon as={FaTools} boxSize={12} color="#5F2EEA" />
          <Text fontSize="2xl" fontWeight="bold" color="#5F2EEA">
            Coming Soon
          </Text>
          <Text fontSize="md" color="#5F2EEA">
            Exciting utilities features are on the way!
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default Utilities;
