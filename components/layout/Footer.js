import {
  Box,
  Center,
  chakra,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={'brand.100'}
      color="white"
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: '#FFEFC4',
        color: 'brand.100',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={'#535353'} boxShadow="0 0 16px rgba(0,0,0,0.1)">
      <Container as={Stack} maxW={'5xl'} pt={10} color="blackAlpha.900">
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: '2fr 1fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={2}>
            <Box>
              <Image
                src={'/images/logo/primaryLogo.png'}
                alt={'Waadaa Insure'}
                width={185}
                height={50}
              />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'} color={'white'}>
            <Link href="about-us">
              <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
                হোম
              </Text>
            </Link>
            <Link href="contact-us">
              <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
                টিউটোরিয়াল
              </Text>
            </Link>
            <Link href="submit-web-host">
              <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
                প্রশ্ন-উত্তর
              </Text>
            </Link>
          </Stack>
          <Stack align={'flex-start'} color={'white'}>
            <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
              বায়োডাটা তৈরী করুন
            </Text>
            <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
              আমাদের সম্পর্কে
            </Text>
            <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
              যোগাযোগ
            </Text>
          </Stack>
          <Stack
            color={'white'}
            align={'flex-start'}
            display={{ base: 'none', md: 'block', lg: 'block' }}>
            <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
              Login
            </Text>
            <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
              Privacy Policy
            </Text>
            <Text fontSize="15px" fontWeight={500} cursor={'pointer'}>
              Terms & Conditions
            </Text>
          </Stack>
          <Stack color={'white'}>
            <Text fontSize="14px" fontWeight={500}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              nam unde fuga, repellat ipsam cupiditate vitae sint reprehenderit
              nihil a ab fugit velit voluptatibus animi perspiciatis?
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider my={5} />
      <Center pb={5}>
        <Text fontSize="14px" fontWeight={500} color={'white'}>
          Copyright © 2023. Only used for Matrimonial purpose Shohoz Nikah All
          Rights Reserved
        </Text>
      </Center>
    </Box>
  );
}
