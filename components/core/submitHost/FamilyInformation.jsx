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
import { Field, Form, Formik } from 'formik';
import { useFormData } from 'store/context/FormDataProvider';

const FamilyInformation = () => {
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
          fatherName: '',
          fatherOcup: '',
          motherName: '',
          motherOcup: '',
          broSis: '',
          unclesOcup: '',
          familyType: '',
          familyBackground: '',
          socialFinancial: '',
          familyBonding: '',
          relativeBonding: '',
          familyTrait: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('family', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={'5'}>
              <Field name="fatherName" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.fatherName && form.touched.fatherName
                    }
                  >
                    <FormLabel
                      htmlFor="fatherName"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পিতার নাম:
                    </FormLabel>
                    <Input {...field} id="fatherName" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.fatherName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="fatherOcup" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.fatherOcup && form.touched.fatherOcup
                    }
                  >
                    <FormLabel
                      htmlFor="fatherOcup"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পিতার পেশা: [মৃত হলে এভাবে লিখুন: (মৃত)-গার্মেন্টস
                      ব্যাবসায়ী ছিলেন। ]
                    </FormLabel>
                    <Input {...field} id="fatherOcup" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.fatherOcup}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="motherName" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.motherName && form.touched.motherName
                    }
                  >
                    <FormLabel
                      htmlFor="motherName"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      মাতার নাম:
                    </FormLabel>
                    <Input {...field} id="motherName" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.motherName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="motherOcup" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.motherOcup && form.touched.motherOcup
                    }
                  >
                    <FormLabel
                      htmlFor="motherOcup"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      মাতার পেশা: [মৃত হলে এভাবে লিখুন: (মৃত)-গৃহিনী ছিলেন।
                    </FormLabel>
                    <Input {...field} id="motherOcup" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.motherOcup}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="broSis" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.broSis && form.touched.broSis}
                  >
                    <FormLabel
                      htmlFor="broSis"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ভাই-বোন কয়জন এবং সকলে কি করেন? (এভাবে লিখুন:আমরা ৩ ভাই। বড়
                      ভাই - ব্যাবসায়ী(বিবাহিত) মেজো - আমি নিজে। ছোট ভাই - এস এস
                      সি শিক্ষার্থী।)
                    </FormLabel>

                    <Input {...field} id="broSis" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.broSis}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="unclesOcup" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.unclesOcup && form.touched.unclesOcup
                    }
                  >
                    <FormLabel
                      htmlFor="unclesOcup"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      চাচা মামাদের পেশা:(নিচে নিচে লিখতে পারেন।)
                    </FormLabel>

                    <Input {...field} id="unclesOcup" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.unclesOcup}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="familyType" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.familyType && form.touched.familyType
                    }
                  >
                    <FormLabel
                      htmlFor="familyType"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পরিবারের ধরণ:
                    </FormLabel>

                    <RadioGroup>
                      <Stack direction="row">
                        <Radio {...field} id="familyType" value="একক পরিবার">
                          একক পরিবার
                        </Radio>
                        <Radio {...field} id="familyType" value="যৌথ পরিবার">
                          যৌথ পরিবার
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.familyType}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="familyBackground" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.familyBackground &&
                      form.touched.familyBackground
                    }
                  >
                    <FormLabel
                      htmlFor="familyBackground"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পরিবারের অর্থনৈতিক অবস্থা:
                    </FormLabel>
                    <Input {...field} id="familyBackground" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.familyBackground}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="socialFinancial" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.socialFinancial &&
                      form.touched.socialFinancial
                    }
                  >
                    <FormLabel
                      htmlFor="socialFinancial"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পরিবারের সামাজিক ও অর্থনৈতিক অবস্থার বর্ণনা: (এখানে
                      আপনাদের বাড়ি-ঘরের বা সম্পত্তির হাল্কা বিবরন দিতে পারেন এবং
                      সামাজিকভাবে আপনাদের কেমন সমাদর আছে)
                    </FormLabel>
                    <Input {...field} id="socialFinancial" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.socialFinancial}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="familyBonding" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.familyBonding && form.touched.familyBonding
                    }
                  >
                    <FormLabel
                      htmlFor="familyBonding"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পরিবারের সদস্যদের মাঝে পারস্পরিক সম্পর্ক কেমন?
                    </FormLabel>
                    <Input {...field} id="familyBonding" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.familyBonding}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="relativeBonding" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.relativeBonding &&
                      form.touched.relativeBonding
                    }
                  >
                    <FormLabel
                      htmlFor="relativeBonding"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আত্মীয় স্বজনদের সাথে আপনাদের পারস্পরিক সম্পর্ক কেমন?
                    </FormLabel>
                    <Input {...field} id="relativeBonding" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.relativeBonding}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="familyTrait" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.familyTrait && form.touched.familyTrait
                    }
                  >
                    <FormLabel
                      htmlFor="familyTrait"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      সামাজিক রীতিনীতি এবং ধর্মীয় বিধিবিধান এর মধ্যে আপনার
                      পরিবারে কোনটিকে বেশি প্রাধান্য দেওয়া হয়?
                    </FormLabel>
                    <Input {...field} id="familyTrait" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.familyTrait}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(7)}
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

export default FamilyInformation;
