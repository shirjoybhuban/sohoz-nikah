import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Features = () => {
  return (
    <Container
      maxW={'5xl'}
      pt={{ base: '20px', md: '60px', lg: '60px' }}
      pb={{ base: '20px', md: '60px', lg: '90px' }}>
      <Center mb={'70px'}>
        <Text fontSize={'40px'} fontWeight={700} className="titleFeature">
          সহজ নিকাহ তে আপনি যা পাবেন
        </Text>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} mb={'80px'}>
        <Flex direction={'column'} align={'flex-end'}>
          <Box mb={5} bg={'brand.100'} py={2} px={4} width={'max-content'}>
            <Text fontSize="20px" fontWeight="500" color={'white'}>
              বায়োডাটা তৈরী করা এবং সাবমিট করা
            </Text>
          </Box>
          <Text fontSize="18px" fontWeight="400" align={'end'}>
            সহজ নিকাহ ওয়েবসাইটে আপনি আপনার বায়োডাটা তৈরী করতে রবেন। এখানে আপনি
            আমাদের দেওয়া প্রয়োজনীয় প্রশ্ন ফর্ম আকারে দেখতে পাবেন। যেগুলোর উত্তর
            দিলেই বায়োডাটা অটোমেটিক তৈরী হয়ে যাবে। আপনি চাইলে বায়োডাটা ডাউনলোডও
            করতে পারবেন
          </Text>
        </Flex>
        <Flex
          width={'100%'}
          direction={'column'}
          align={'center'}
          justify={'center'}>
          <Center
            width={'120px'}
            height={'120px'}
            bg={'brand.300'}
            border={'5px solid'}
            borderColor={'brand.100'}
            borderRadius={'50%'}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
            <Text
              fontSize="80px"
              fontWeight="700"
              color={'#535353'}
              ml={1}
              mb={1}
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.15)">
              ১
            </Text>
          </Center>
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} mb={'80px'}>
        <Flex
          width={'100%'}
          direction={'column'}
          align={'center'}
          justify={'center'}>
          <Center
            width={'120px'}
            height={'120px'}
            bg={'brand.300'}
            border={'5px solid'}
            borderColor={'brand.100'}
            borderRadius={'50%'}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
            <Text
              fontSize="80px"
              fontWeight="700"
              ml={1}
              mb={1}
              color={'#535353'}
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.15)">
              ২
            </Text>
          </Center>
        </Flex>
        <Flex direction={'column'} align={'flex-start'}>
          <Box mb={4} bg={'brand.600'} py={2} px={4} width={'max-content'}>
            <Text fontSize="20px" fontWeight="500" color={'white'}>
              বায়োডাটা সার্চ করা এবং বাছাই করা
            </Text>
          </Box>
          <Text fontSize="18px" fontWeight="400">
            পছন্দের বায়োডাটা খোঁজার জন্য আমাদের সার্চ ফর্ম আছে। এখানে আপনি আপনার
            পছন্দমত অপশন সিলেক্ট করে সার্চ করলে কাঙ্খিত বায়োডেটায় পৌঁছাতে
            পারবেন। যে সকল বায়োডাটা পছন্দ হবে সেগুলো চাইলে ফেভারিট লিস্টে অ্যাড
            করে রাখতে পারবেন।
          </Text>
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
        <Flex direction={'column'} align={'flex-end'}>
          <Box mb={4} bg={'brand.100'} py={2} px={4} width={'max-content'}>
            <Text fontSize="20px" fontWeight="500" color={'white'}>
              পছন্দের বায়োডাটার যোগাযোগ তথ্য সংগ্রহ করা
            </Text>
          </Box>
          <Text fontSize="18px" fontWeight="400" align={'end'}>
            কোনো বায়োডাটা পছন্দ হলে যোগাযোগ অপশনে ক্লিক করে আমাদের কাছ থেকে
            অভিভাবকের যোগাযোগ তথ্য সংগ্রহ করতে পারবেন। আপনি চাইলে একইসাথে একাধিক
            বায়োডাটার যোগাযোগ তথ্যের জন্য আবেদন করতে পারবেন।
          </Text>
        </Flex>
        <Flex
          width={'100%'}
          direction={'column'}
          align={'center'}
          justify={'center'}>
          <Center
            width={'120px'}
            height={'120px'}
            bg={'brand.300'}
            border={'5px solid'}
            borderColor={'brand.100'}
            borderRadius={'50%'}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
            <Text
              fontSize="80px"
              fontWeight="700"
              mb={1}
              color={'#535353'}
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.15)">
              ৩
            </Text>
          </Center>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Features;
