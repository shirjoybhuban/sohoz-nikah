import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import SNPlayIcon from 'components/icons/SNPlayIcon';
import { BsFillPlayBtnFill } from 'react-icons/bs';

const Tutorials = () => {
  return (
    <Container
      maxW={'5xl'}
      pt={{ base: '20px', md: '60px', lg: '90px' }}
      pb={{ base: '20px', md: '60px', lg: '110px' }}>
      <Center mb={'70px'}>
        <Text fontSize={'40px'} fontWeight={700} className="titleTutorial">
          ভিডিও টিউটোরিয়াল
        </Text>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box position={'relative'}>
          <Box filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))">
            <Image
              src={'images/tutorial/thumbnail1.png'}
              alt="Thumbnail"
              borderRadius={'6px'}
            />
          </Box>
          <Box
            position={'absolute'}
            left={'40%'}
            top={'31%'}
            cursor={'pointer'}>
            <SNPlayIcon boxSize={'80px'} />
          </Box>
        </Box>
        <Box position={'relative'}>
          <Box filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))">
            <Image
              src={'images/tutorial/thumbnail2.png'}
              alt="Thumbnail"
              borderRadius={'6px'}
            />
          </Box>
          <Box
            position={'absolute'}
            left={'40%'}
            top={'31%'}
            cursor={'pointer'}>
            {/* <Icon
              as={BsFillPlayBtnFill}
              w={'60px'}
              h={'60px'}
              color="brand.100"
            /> */}
            <SNPlayIcon boxSize={'80px'} />
          </Box>
        </Box>
        <Box position={'relative'}>
          <Box filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))">
            <Image
              src={'images/tutorial/thumbnail3.png'}
              alt="Thumbnail"
              borderRadius={'6px'}
            />
          </Box>
          <Box
            position={'absolute'}
            left={'40%'}
            top={'31%'}
            cursor={'pointer'}>
            <SNPlayIcon boxSize={'80px'} />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Tutorials;
