import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Divider,
  VStack,
  ModalOverlay,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  RiContactsFill,
  RiCoupon2Line,
  RiLoginBoxFill,
  RiMapPinFill,
  RiQuestionnaireFill,
  RiVideoFill,
} from 'react-icons/ri';
import { MdOutlineReviews } from 'react-icons/md';
import { BiLogInCircle } from 'react-icons/bi';
import WriteReview from 'components/core/review/WriteReview';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsFileEarmarkPlusFill } from 'react-icons/bs';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();

  return (
    <>
      <Box id="navigationBar">
        <Flex
          borderBottom={'1px solid #eaebed'}
          background={'#ffffff'}
          color={'text.100'}
          minH={'60px'}
          align={'center'}
          px={{ base: '10px', md: '50px', lg: '50px' }}>
          <Flex flex={1} justify={'flex-start'}>
            <Link href="/">
              <Box p={{ sm: 0, md: 1, lg: 2 }} cursor="pointer">
                <Image
                  src={'/images/logo/primaryLogo.png'}
                  alt={'Waadaa Insure'}
                  width={157}
                  height={50}
                />
              </Box>
            </Link>
          </Flex>
          <Flex
            width={'100%'}
            flex={{ base: 1, md: 2, lg: 2 }}
            justify={'center'}
            alignItems="center"
            display={{ base: 'none', lg: 'flex' }}>
            <Flex alignItems="center">
              <Link href="/submit-biodata">
                <Button
                  type="button"
                  pl={4}
                  ml={2}
                  variant={'ghost'}
                  size="sm"
                  fontSize="15px"
                  // leftIcon={
                  //   <Icon as={AiTwotoneHome} w={4} h={4} color="#F1697F" />
                  // }
                  fontWeight="700">
                  হোম
                </Button>
              </Link>
            </Flex>
            <Flex alignItems="center">
              <Link href="/submit-biodata">
                <Button
                  type="button"
                  pl={4}
                  ml={2}
                  variant={'ghost'}
                  size="sm"
                  fontSize="15px"
                  // leftIcon={
                  //   <Icon as={RiVideoFill} w={4} h={4} color="#F1697F" />
                  // }
                  fontWeight="700">
                  Submit Biodata
                </Button>
              </Link>
            </Flex>
            <Flex alignItems="center">
              <Link href="/coupons">
                <Button
                  type="button"
                  pl={4}
                  ml={2}
                  variant={'ghost'}
                  size="sm"
                  fontSize="15px"
                  // leftIcon={
                  //   <Icon
                  //     as={RiQuestionnaireFill}
                  //     w={4}
                  //     h={4}
                  //     color="#F1697F"
                  //   />
                  // }
                  fontWeight="700">
                  প্রশ্ন-উত্তর
                </Button>
              </Link>
            </Flex>
            <Flex alignItems="center">
              <Button
                type="button"
                pl={4}
                ml={2}
                variant={'ghost'}
                size="sm"
                fontSize="15px"
                // leftIcon={
                //   <Icon as={RiMapPinFill} w={4} h={4} color="#F1697F" />
                // }
                fontWeight="700">
                আমাদের সম্পর্কে
              </Button>
            </Flex>
            <Flex alignItems="center">
              <Button
                type="button"
                pl={4}
                ml={2}
                variant={'ghost'}
                size="sm"
                fontSize="15px"
                // leftIcon={
                //   <Icon as={RiContactsFill} w={4} h={4} color="#F1697F" />
                // }
                fontWeight="700">
                যোগাযোগ
              </Button>
            </Flex>
          </Flex>
          <Flex
            width={'100%'}
            flex={{ base: 1, md: 1, lg: 1 }}
            justify={'flex-end'}
            alignItems="center"
            display={{ base: 'none', lg: 'flex' }}>
            <Flex alignItems="center">
              <Button
                type="button"
                ml={1}
                mr={3}
                border={'2px solid'}
                variant={'outline'}
                borderColor={'brand'}
                size="sm"
                fontSize="14px"
                color="brand.100"
                leftIcon={<Icon as={BiLogInCircle} w={4} h={4} />}
                fontWeight="700"
                _hover={{
                  bg: 'brand.300',
                  color: 'grey',
                }}>
                লগইন
              </Button>
            </Flex>
            <Flex alignItems="center">
              <Button
                type="button"
                variant={'solid'}
                bg={'brand.500'}
                size="sm"
                fontSize="16px"
                color="white"
                // leftIcon={<Icon as={BsFileEarmarkPlusFill} w={4} h={4} />}
                fontWeight="400"
                _hover={{
                  bg: 'brand.300',
                  color: 'grey',
                }}>
                বায়োডাটা তৈরী করুন
              </Button>
            </Flex>
          </Flex>
          <Box
            flex={1}
            w="100%"
            display={{ base: 'flex', lg: 'none' }}
            justifyContent={'flex-end'}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Box>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav toggleMobileNav={onToggle} />
        </Collapse>
      </Box>
    </>
  );
}

const MobileNav = ({ toggleMobileNav }) => {
  return (
    <VStack bg={'white'} py={1} px={3} display={{ lg: 'none' }} boxShadow="md">
      {/* <Link href="/submit-biodata">
        <Button
          type="button"
          variant={'ghost'}
          size="sm"
          fontSize="15px"
          leftIcon={<FaWpforms color="cyan" />}
          fontWeight="600">
          Submit Your Web Host
        </Button>
      </Link>

      <Link href="/coupons">
        <Button
          type="button"
          variant={'ghost'}
          size="sm"
          fontSize="15px"
          leftIcon={<RiCoupon2Line color="purple" />}
          fontWeight="600">
          Hosting Coupons
        </Button>
      </Link>
      <Button
        type="button"
        variant={'ghost'}
        size="sm"
        fontSize="15px"
        leftIcon={<MdOutlineReviews color="orange" />}
        fontWeight="600">
        Write a Review
      </Button> */}
    </VStack>
  );
};
