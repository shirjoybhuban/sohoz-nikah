import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const BioDataCard = ({ data }) => {
  const {
    biodataNo,
    gender,
    birth,
    age,
    height,
    marriedStatus,
    permanentDistrict,
  } = data;
  return (
    <Box
      bg="#FCF2FA"
      border="1px solid"
      borderColor={'#FFDEE3'}
      role="group"
      shadow={'sm'}
      cursor={'pointer'}
      borderRadius={'20px'}
      transition="all 0.3s ease"
      _hover={{
        bg: '#FFF6F8',
        shadow: 'lg',
      }}
    >
      <Box
        borderTopRightRadius="50px"
        transition="all 0.3s ease"
        opacity="0.6"
        _groupHover={{ opacity: '0.8' }}
      >
        <img
          src="/card/bg.jpg"
          style={{
            mixBlendMode: 'multiply',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        />
      </Box>
      <Center mt="-30px" position={'relative'} zIndex={1}>
        <Image
          src="/card/male.png"
          height={120}
          width={120}
          style={{
            borderRadius: '50%',
            boxShadow: '1px 3px 11px -7px rgba(0,0,0,0.30)',
          }}
        />
      </Center>
      <Box p={2} mt={1}>
        <Center>
          <Text fontSize={'21px'} fontWeight={700} color="#110D13">
            {biodataNo}
          </Text>
        </Center>
        <Center>
          <Text fontSize={'14px'} fontWeight={500}>
            বায়োডাটা নং
          </Text>
        </Center>
      </Box>
      <Box py={4} px={8}>
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'14px'} fontWeight={700}>
            বৈবাহিক অবস্থা :
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {marriedStatus}
          </Text>
        </Flex>
        <Divider my={1} />
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'14px'} fontWeight={700}>
            জন্মসন :
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {birth}
          </Text>
        </Flex>
        <Divider my={1} />
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'14px'} fontWeight={700}>
            জেলা :
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {permanentDistrict}
          </Text>
        </Flex>
        <Divider my={1} />
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'14px'} fontWeight={700}>
            উচ্চতা :
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {height}
          </Text>
        </Flex>
      </Box>
      <Center>
        <Button
          mt={1}
          mb={5}
          px={9}
          type="button"
          borderRadius={'10px'}
          variant={'solid'}
          bg={'brand.100'}
          size="sm"
          fontSize="14px"
          color="white"
          // leftIcon={<Icon as={BsFileEarmarkPlusFill} w={4} h={4} />}
          fontWeight="400"
          _groupHover={{
            bg: 'brand.200',
            color: 'black',
          }}
        >
          সম্পূর্ণ বায়োডাটা
        </Button>
      </Center>
    </Box>
  );
};

export default BioDataCard;
