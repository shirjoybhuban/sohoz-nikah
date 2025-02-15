import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

const Details = () => {
  function validateField(value) {
    let error;
    // if (!value) {
    //   error = 'This field is required';
    // }
    return error;
  }
  return (
    <Box mt={'40px'}>
      <Formik
        initialValues={{
          gender: '',
          mobile: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values',values);
          actions.setSubmitting(false);
        }}>
        {(props) => (
          <Form>
            <SimpleGrid columns={2} spacing={'5'}>
              <Field name="gender" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.gender && form.touched.gender
                    }>
                    <FormLabel
                      htmlFor="gender"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}>
                     বায়োডাটার ধরন:
                    </FormLabel>
                    <Input {...field} id="gender" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.gender}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="mobile" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.mobile && form.touched.mobile
                    }>
                    <FormLabel
                      htmlFor="mobile"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}>
                      পাত্র/পাত্রীর মোবাইল নম্বর:
                    </FormLabel>
                    <Input {...field} id="mobile" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.mobile}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  isLoading={props.isSubmitting}
                  type="submit"
                  mt="20px !important"
                  size={'sm'}
                  bg={'#0289F2'}
                  border="0px"
                  fontSize={'14px'}
                  fontWeight={'bold'}
                  color={'white'}
                  w={'100px'}
                  rightIcon={<ArrowForwardIcon />}
                  _hover={{
                    border: '1px solid #0289F2',
                    bg: '#dbefff',
                    color: 'text.100',
                  }}>
                  Next
                </Button>
              </Center>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Details;
