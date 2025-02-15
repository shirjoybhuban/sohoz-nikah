import { Container, Text } from '@chakra-ui/react';
import SidebarLayout from 'components/layout/SidebarLayout';

const TermsOfService = () => {
  return (
    <SidebarLayout>
      <Container
        maxW={'100%'}
        bg="white"
        p={{ base: '10px', md: '20px', lg: '30px' }}
        rounded={'xl'}
        border={'1px solid #ebebeb'}>
        <Text fontSize={'35px'} color="black" fontWeight={700} mb="4">
          Terms of Service
        </Text>

        <Text mb={'200px'}>
          By accessing and/or using hostadvice.com (referred as “website” from
          now on), you are agreeing to the following terms, laid out below. The
          terms of this agreement refer to each user and his legal obligations
          in using the website. Please read these carefully before using any of
          the features of this website. We are supported by referral fees from
          the advertisers presented on this site. We do not present information
          about every advertiser or offer available. Except as expressly set
          forth in these terms, all representations and warranties regarding the
          information presented on this page are disclaimed. The information,
          including pricing, which appears on this site may change at any time.
          Use of Site This website and its contents are available only for
          personal and non-commercial use. Any usage of the materials is free
          for non-commercial purposes in their original, copyrighted form. All
          materials contained in the website are protected under copyright law
          and any unauthorized use without the proper permissions may be
          illegal. Any modification, public reproduction, web/network
          republication, commercial distribution, or otherwise public and/or
          commercial use is strictly prohibited. Violation of these terms may
          result to a permanent ban of your account and a subsequent immediate
          notice to destroy/delete any downloaded or printed materials.
        </Text>
      </Container>
    </SidebarLayout>
  );
};

export default TermsOfService;
