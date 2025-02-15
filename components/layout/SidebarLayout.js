import {
  IconButton,
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  VStack
} from '@chakra-ui/react';
import SidebarContent from './sidebar/SidebarContent';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SidebarLayout({ children }) {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={'#F2F3F7'}>
      <Container
        maxW={'100%'}
        py={{ base: '40px', md: '30px', lg: '30px' }}
        px={{ base: '15px', md: '50px', lg: '50px' }}>
        <Box mb={4}>
          <Breadcrumb
            spacing="5px"
            separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <Link href="/">
                <BreadcrumbLink
                  fontSize={'14px'}
                  fontWeight={700}
                  color={'#0289F2'}>
                  HostAdvice
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" fontSize={'14px'} fontWeight={700}>
                {router.asPath.replace(/\//g, '')}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <MobileNav
          display={{ base: 'flex', lg: 'none' }}
          onOpen={onOpen}
          // justifyContent="flex-end"
        />
        {/* <Flex>
          <Box>
            <SidebarContent
              onClose={() => onClose}
              display={{ base: 'none', lg: 'block' }}
            />
          </Box>

          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="sm">
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          <Box width={'100%'}>{children}</Box>
          <VStack>
            <Box
              ml={{ sm: '0px', lg: '30px' }}
              bg="white"
              w={{ base: 'full', lg: 60 }}
              h={'250px'}
              rounded="xl"
              border={{ sm: '0px', lg: '1px solid #ebebeb' }}></Box>
          </VStack>
        </Flex> */}
      </Container>
    </Box>
  );
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Box {...rest}>
      <IconButton
        mb={3}
        variant="solid"
        onClick={onOpen}
        aria-label="open menu"
        icon={<AiOutlineMenuUnfold />}
      />
    </Box>
  );
};
