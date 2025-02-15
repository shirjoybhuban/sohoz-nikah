import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { AiOutlineFileSearch } from 'react-icons/ai';

const BiodataSearch = () => {
  const router = useRouter();
  function validateValue(value) {
    let error;
    // let phoneno = /^\d+$/.test(value);
    // if (!value) {
    //   error = 'This field is required';
    // } else if (!phoneno) {
    //   error = 'Invalid Phone Number';
    // } else if (value.length != 11) {
    //   error = 'Invalid Phone Number';
    // }
    return error;
  }
  return (
    <Formik
      initialValues={{
        phone: '',
        email: '',
        name: '',
        currentAddress: '',
        district: '',
        birthDate: '',
        hsc: '',
        institute: '',
        gender: '',
        profession: '',
        promo: '',
        hear: '',
        disability: '',
        disabilityName: '',
        financial: 0,
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          router.push('/biodatas');
        }, 500);

        // if (slotId == null) {
        //   toast({
        //     title: 'Please select slot',
        //     status: 'error',
        //     duration: 1000,
        //     isClosable: true,
        //   });
        //   actions.setSubmitting(false);
        // } else {
        //   actions.setSubmitting(false);
        //   values.slotId = slotId;
        //   console.log(values);
        //   saveCheckout(values);
        //   handelNext('1st Pass', 2);
        //   //checkout.checkIn(values);
        // }
      }}>
      {(props) => (
        <Form>
          <Container
            bg={'white'}
            borderRadius={'15px'}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.1)'}
            p={5}>
            <Center mb={5}>
              <Text fontSize={'22px'} fontWeight={700} className="titleSearch">
                বায়োডাটা খুঁজুন
              </Text>
            </Center>
            <SimpleGrid columns={1} spacing={2} px={5}>
              <SimpleGrid columns={2} spacing={3}>
                <Field name="name" validate={validateValue}>
                  {({ field, form }) => (
                    <FormControl
                      id="name"
                      isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel fontSize="sm" mb={1}>
                        বায়োডাটা ধরণ
                      </FormLabel>
                      <Input
                        type="text"
                        size="sm"
                        borderRadius={'6px'}
                        border="2px solid"
                        borderColor={'brand.300'}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="phone" validate={validateValue}>
                  {({ field, form }) => (
                    <FormControl
                      id="phone"
                      isInvalid={form.errors.phone && form.touched.phone}>
                      <FormLabel fontSize="sm" mb={1}>
                        বৈবাহিক অবস্থা
                      </FormLabel>
                      <InputGroup>
                        <Input
                          type="text"
                          size="sm"
                          borderRadius={'6px'}
                          border="2px solid"
                          borderColor={'brand.300'}
                          {...field}
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </SimpleGrid>

              <Field name="email" validate={validateValue}>
                {({ field, form }) => (
                  <FormControl
                    id="email"
                    isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel fontSize="sm" mb={1}>
                      জেলা
                    </FormLabel>
                    <Input
                      type="text"
                      size="sm"
                      borderRadius={'6px'}
                      border="2px solid"
                      borderColor={'brand.300'}
                      {...field}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box>
                <FormLabel fontSize="sm" mb={1}>
                  বয়স
                </FormLabel>
                <Flex align={'center'}>
                  <Box flex={2}>
                    <Field name="currentAddress" validate={validateValue}>
                      {({ field, form }) => (
                        <FormControl
                          id="currentAddress"
                          isInvalid={
                            form.errors.currentAddress &&
                            form.touched.currentAddress
                          }>
                          <Input
                            type="text"
                            size="sm"
                            borderRadius={'6px'}
                            border="2px solid"
                            borderColor={'brand.300'}
                            {...field}
                          />
                          <FormErrorMessage>
                            {form.errors.currentAddress}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>

                  <Center flex={1}>
                    <Text fontSize={'17px'}>থেকে </Text>
                  </Center>
                  <Box flex={2}>
                    <Field name="currentAddress" validate={validateValue}>
                      {({ field, form }) => (
                        <FormControl
                          id="currentAddress"
                          isInvalid={
                            form.errors.currentAddress &&
                            form.touched.currentAddress
                          }>
                          <Input
                            type="text"
                            size="sm"
                            borderRadius={'6px'}
                            border="2px solid"
                            borderColor={'brand.300'}
                            {...field}
                          />
                          <FormErrorMessage>
                            {form.errors.currentAddress}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Flex>
              </Box>
              <Center mb={-3} mt={2}>
                <Text fontSize={'19px'} fontWeight={'bold'}>
                  অথবা
                </Text>
              </Center>
              <Field name="birthDate">
                {({ field, form }) => (
                  <FormControl
                    id="birthDate"
                    isInvalid={form.errors.birthDate && form.touched.birthDate}>
                    <FormLabel fontSize="sm" mb={1}>
                      বায়োডাটা নম্বর লিখুন
                    </FormLabel>
                    <Input
                      {...field}
                      type="text"
                      size="sm"
                      borderRadius={'6px'}
                      border="2px solid"
                      borderColor={'brand.300'}
                    />
                    <FormErrorMessage>{form.errors.birthDate}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>
            <Center mt={4}>
              <Button
                isLoading={props.isSubmitting}
                type="submit"
                pl={4}
                ml={1}
                variant={'solid'}
                bg={'brand.100'}
                size="sm"
                fontSize="15px"
                color="white"
                leftIcon={<Search2Icon boxSize={3} />}
                fontWeight="400"
                _hover={{
                  bg: 'brand.300',
                  color: 'grey',
                }}>
                সার্চ করুন
              </Button>
            </Center>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default BiodataSearch;
