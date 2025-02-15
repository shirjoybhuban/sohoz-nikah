import { Container, Text } from '@chakra-ui/react';
import SidebarLayout from 'components/layout/SidebarLayout';

const AboutUs = () => {
  return (
    <SidebarLayout>
      <Container
        maxW={'100%'}
        bg="white"
        p={{ base: '10px', md: '20px', lg: '30px' }}
        rounded={'xl'}
        border={'1px solid #ebebeb'}>
        <Text fontSize={'35px'} color="black" fontWeight={700} mb="4">
          About Us
        </Text>

        <Text mb={'200px'}>
          HostAdvice is the internet’s web-hosting information center, covering
          dozens of hosting companies and services worldwide. Every person who
          writes on HostAdvice is either a web hosting expert or an experienced
          customer. The HostAdvice community will help you find quality hosting
          services, companies you can trust, better deals, discount coupons and
          more. Use our vast, easy-to-use and frequently updated database to
          find the right hosting service to fit your needs and budget. You can
          sort by Hosting Type (Shared/VPS/Dedicated/Cloud), Operating System,
          Payment Methods, Global Server Location and CMS compatibility. Results
          are clear and easy – comparing prices, money-back policy, support
          options and overall scores. Whether you’re an experienced customer or
          just getting started with website hosting – start with HostAdvice.
        </Text>
      </Container>
    </SidebarLayout>
  );
};

export default AboutUs;
