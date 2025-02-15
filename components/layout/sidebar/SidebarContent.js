import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Text,
  Avatar,
  VStack,
  Progress,
  Divider,
  IconButton,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import { FiHome, FiTrendingUp } from 'react-icons/fi';
import Link from 'next/link';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const LinkItems = [
  { name: 'About Us', href: '/about-us' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Terms of service', href: '/terms-conditions' },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
  { name: 'Disclosure', href: '/disclosure' },
];

const NavItem = ({ href, children, ...rest }) => {
  const router = useRouter();
  const [navBgColor, setNavBgColor] = useState('#000000');
  const [navColor, setNavColor] = useState(undefined);
  const [navIcoColor, setNavIcoColor] = useState(undefined);
  useEffect(() => {
    const nav_bgColor = router.pathname == href ? 'grey' : 'white';
    setNavBgColor(nav_bgColor);
    const nav_color = router.pathname == href ? 'white' : 'text.100';
    setNavColor(nav_color);
    const nav_icon = router.pathname == href ? 'white' : 'text.100';
    setNavIcoColor(nav_icon);
    // console.log(`path - ${router.pathname}  href - ${href}`);
    // console.log(`result - ${router.pathname == href}`);
  }, []);

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Box
        bg={navBgColor}
        color={navColor}
        borderRadius="7px"
        cursor="pointer"
        py="1px"
        _hover={{
          bg: '#0289F2',
          color: 'white',
        }}
        {...rest}>
        <Flex align="center" py={'7px'} px={'20px'} role="group">
          <Text fontSize={'15px'} lineHeight="21px">
            {children}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      mr={{ sm: '0px', lg: '30px' }}
      bg="white"
      w={{ base: 'full', lg: 60 }}
      rounded="xl"
      border={{ sm: '0px', lg: '1px solid #ebebeb' }}
      {...rest}>
      <Flex
        alignItems="center"
        justifyContent="flex-end"
        margin="5px 15px 0px 0px">
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          variant="solid"
          onClick={onClose}
          icon={<AiOutlineMenuFold />}
        />
      </Flex>
      <Box p="5px">
        {LinkItems.map((link) => (
          <NavItem key={link.name} href={link.href}>
            {link.name}
          </NavItem>
        ))}
        <Box px={4} mb={5} mt={3}>
          <Link href={'/submit-web-host'}>
            <Button
              size={'sm'}
              bg={'#0289F2'}
              border="0px"
              fontSize={'14px'}
              fontWeight={'bold'}
              color={'white'}
              w={'100%'}
              _hover={{
                border: '1px solid #0289F2',
                bg: '#dbefff',
                color: 'text.100',
              }}>
              Submit Your Web Host
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default SidebarContent;
