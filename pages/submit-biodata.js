import { Box, Container, Text, useMediaQuery } from '@chakra-ui/react';
import BioDataForm from 'components/core/submitHost/BioDataForm';
import { FormDataProvider } from 'store/context/FormDataProvider';

const SubmitBiodata = () => {
  const [isMobile] = useMediaQuery('(max-width: 800px)');
  return (
    <Box>
      <Container
        maxW={{ base: '100%', lg: '5xl', xl: '6xl' }}
        py={{ base: '30px', md: '40px', lg: '40px' }}
      >
        <Text fontSize={'35px'} color="black" fontWeight={700} mb={'45px'}>
          Submit Your Web Host
        </Text>
        <FormDataProvider>
          <BioDataForm />
        </FormDataProvider>
      </Container>
    </Box>
  );
};

export default SubmitBiodata;
