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
import BiodataSearch from './Hero/BiodataSearch';

const Hero = () => {
  return (
    <Container
      maxW={'5xl'}
      pt={{ base: '20px', md: '60px', lg: '60px' }}
      pb={{ base: '20px', md: '60px', lg: '60px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
        <Flex h={'100%'} align={'center'}>
          <Box color={'white'}>
            <Box
              mb={5}
              fontSize={'59px'}
              textShadow="0px 4.05673px 3.09013px rgba(0, 0, 0, 0.25)">
              <Text className={'heroTitle'}>দ্বীনি পাত্র-পাত্রী</Text>
              <Text className={'heroTitle'}>খোঁজার সহজ মাধ্যম</Text>
            </Box>
            <Box fontWeight="400" fontFamily={'mukti'}>
              <Text mb={2} fontSize="19px">
                রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেন,
              </Text>
              <Text mb={2} fontSize="19px">
                হে যুবক সম্প্রদায়, তোমাদের বিবাহ করা কর্তব্য। কেননা তা চক্ষু
                অবনত রাখা ও লজ্জাস্থান রক্ষার ক্ষেত্রে অধিকতর সহায়ক। তবে তোমাদের
                মধ্যে যার বিবাহের সামর্থ নেই তার উচিত সিয়াম পালন করা। কেননা
                সিয়াম তার যৌন প্রবৃত্তিকে অবদমিত করে।
              </Text>
              <Text mb={2} fontSize="17px">
                ইবনু মাজাহ ১৮৪৫, বুখারি, মুসলিম, তিরমিজী হাদিস নম্বরঃ ১০৮১ - আল
                মাদানী প্রকাশনী
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex w={'100%'} justify={'flex-end'} px={5}>
          <BiodataSearch />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Hero;
