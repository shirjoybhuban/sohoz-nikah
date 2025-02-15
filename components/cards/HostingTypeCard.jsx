import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const HostingTypeCard = ({ title }) => {
  return (
    <Box
      bg={'white'}
      borderRadius={'8px'}
      cursor="pointer"
      border="1px solid #FFFFFF"
      p={'8px 24px'}
      display={'flex'}
      justifyContent="center"
      alignItems={'center'}
      boxShadow="sm"
      _hover={{ border: '1px solid #FFA633', bg: '#fff4e8' }}>
      <Text fontSize="13px" fontWeight={700}>
        {title}
      </Text>
    </Box>
  );
};

export default HostingTypeCard;
