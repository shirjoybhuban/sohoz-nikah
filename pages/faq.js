import { Box, Container, Text } from '@chakra-ui/react';
import FaqAccordion from 'components/core/Faq/FaqAccordion';
import SidebarLayout from 'components/layout/SidebarLayout';

const FAQ = () => {
  return (
    <SidebarLayout>
      <Container
        maxW={'100%'}
        bg="white"
        p={{ base: '10px', md: '20px', lg: '30px' }}
        rounded={'xl'}
        border={'1px solid #ebebeb'}>
        <Text fontSize={'35px'} color="black" fontWeight={700} mb="4">
          FAQ
        </Text>

        <FaqAccordion />
        <Box mb={'190px'}></Box>
      </Container>
    </SidebarLayout>
  );
};

export default FAQ;
