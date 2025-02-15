import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { districts } from 'components/const/district';
import { Field, Form, Formik } from 'formik';
import { useFormData } from 'store/context/FormDataProvider';

const Address = () => {
  const { updateFormData, setTabIndex } = useFormData();
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
          permanentCountryType: '',
          permanentZila: '',
          permanentUpazila: '',
          permanentAdd: '',
          permanentCountry: '',
          permanentState: '',
          permanentCity: '',
          presentCountryType: '',
          presentZila: '',
          presentUpazila: '',
          presentAdd: '',
          presentCountry: '',
          presentState: '',
          presentCity: '',
          whereLiive: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('address', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={'5'}>
              <Field name="permanentCountryType" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.permanentCountryType &&
                      form.touched.permanentCountryType
                    }
                  >
                    <FormLabel
                      htmlFor="permanentCountryType"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্থায়ী ঠিকানা:
                    </FormLabel>
                    <RadioGroup>
                      <Stack direction="row">
                        <Radio
                          {...field}
                          id="permanentCountryType"
                          value="বাংলাদেশ"
                        >
                          বাংলাদেশ
                        </Radio>
                        <Radio
                          {...field}
                          id="permanentCountryType"
                          value="ফরেইন সিটিজেনশিপ"
                        >
                          ফরেইন সিটিজেনশিপ
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.permanentCountryType}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="permanentZila" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.permanentZila && form.touched.permanentZila
                    }
                  >
                    <FormLabel
                      htmlFor="permanentZila"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্থায়ী জেলা:
                    </FormLabel>
                    <Select placeholder="" {...field} id="permanentZila">
                      {districts.map((item) => (
                        <option value={item.bn_name}>{item.bn_name}</option>
                      ))}
                    </Select>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.permanentZila}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="permanentUpazila" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.permanentUpazila &&
                      form.touched.permanentUpazila
                    }
                  >
                    <FormLabel
                      htmlFor="permanentUpazila"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্থায়ী উপজেলা:
                    </FormLabel>
                    <Input {...field} id="permanentUpazila" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.permanentUpazila}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="permanentAdd" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.permanentAdd && form.touched.permanentAdd
                    }
                  >
                    <FormLabel
                      htmlFor="permanentAdd"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্থায়ী বাড়ির ঠিকানা: (এভাবে লিখুন: মিরপুর ১১/
                      আজমপুর,উত্তরা অথবা ইউনিয়ন/থানা)
                    </FormLabel>
                    <Input {...field} id="permanentAdd" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.permanentAdd}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="permanentCountry" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.permanentCountry &&
                      form.touched.permanentCountry
                    }
                  >
                    <FormLabel
                      htmlFor="permanentCountry"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্থায়ী দেশ:
                    </FormLabel>
                    <Input {...field} id="permanentCountry" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.permanentCountry}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="permanentState" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.permanentState && form.touched.permanentState
                    }
                  >
                    <FormLabel
                      htmlFor="permanentState"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্থায়ী স্টেট: (যদি থাকে)
                    </FormLabel>
                    <Input {...field} id="permanentState" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.permanentState}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="permanentCity" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.permanentCity && form.touched.permanentCity
                    }
                  >
                    <FormLabel
                      htmlFor="permanentCity"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্থায়ী শহর:
                    </FormLabel>
                    <Input {...field} id="permanentCity" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.permanentCity}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="presentCountryType" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.presentCountryType &&
                      form.touched.presentCountryType
                    }
                  >
                    <FormLabel
                      htmlFor="presentCountryType"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বর্তমান ঠিকানা:
                    </FormLabel>
                    <RadioGroup>
                      <Stack direction="row">
                        <Radio
                          {...field}
                          id="presentCountryType"
                          value="বাংলাদেশ"
                        >
                          বাংলাদেশ
                        </Radio>
                        <Radio
                          {...field}
                          id="presentCountryType"
                          value="ফরেইন সিটিজেনশিপ"
                        >
                          ফরেইন সিটিজেনশিপ
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.presentCountryType}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="presentZila" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.presentZila && form.touched.presentZila
                    }
                  >
                    <FormLabel
                      htmlFor="presentZila"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বর্তমান জেলা:
                    </FormLabel>
                    <Select placeholder="" {...field} id="presentZila">
                      {districts.map((item) => (
                        <option value={item.bn_name}>{item.bn_name}</option>
                      ))}
                    </Select>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.presentZila}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="presentUpazila" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.presentUpazila && form.touched.presentUpazila
                    }
                  >
                    <FormLabel
                      htmlFor="presentUpazila"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বর্তমান উপজেলা:
                    </FormLabel>
                    <Input {...field} id="presentUpazila" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.presentUpazila}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="presentAdd" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.presentAdd && form.touched.presentAdd
                    }
                  >
                    <FormLabel
                      htmlFor="presentAdd"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বর্তমান বাড়ির ঠিকানা: (এভাবে লিখুন: মিরপুর ১১/
                      আজমপুর,উত্তরা অথবা ইউনিয়ন/থানা)
                    </FormLabel>
                    <Input {...field} id="presentAdd" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.presentAdd}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="presentCountry" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.presentCountry && form.touched.presentCountry
                    }
                  >
                    <FormLabel
                      htmlFor="presentCountry"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বর্তমান দেশ:
                    </FormLabel>
                    <Input {...field} id="presentCountry" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.presentCountry}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="presentState" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.presentState && form.touched.presentState
                    }
                  >
                    <FormLabel
                      htmlFor="presentState"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বর্তমান স্টেট: (যদি থাকে)
                    </FormLabel>
                    <Input {...field} id="presentState" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.presentState}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="presentCity" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.presentCity && form.touched.presentCity
                    }
                  >
                    <FormLabel
                      htmlFor="presentCity"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বর্তমান শহর:
                    </FormLabel>
                    <Input {...field} id="presentCity" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.presentCity}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="whereLiive" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.whereLiive && form.touched.whereLiive
                    }
                  >
                    <FormLabel
                      htmlFor="whereLiive"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      কোথায় বেড়ে উঠেছেন? (ছোটবেলা থেকে এখন পর্যন্ত কোথায় কোথায়
                      থাকা হয়েছে তার সংক্ষিপ্ত বিবরণ দিন)
                    </FormLabel>
                    <Input {...field} id="whereLiive" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.whereLiive}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(5)}
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
                  }}
                >
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

export default Address;
