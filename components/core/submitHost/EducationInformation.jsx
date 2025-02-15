import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
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

const EducationInformation = () => {
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
          eduType: '',
          secondary: '',
          higherSecondary: '',
          graduate: '',
          postGraduate: '',
          professionDetails: '',
          income: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('education', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={'5'}>
              <Field name="eduType" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.eduType && form.touched.eduType}
                  >
                    <FormLabel
                      htmlFor="eduType"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      শিক্ষার ধরণ:
                    </FormLabel>
                    <RadioGroup>
                      <Stack direction="row">
                        <Radio {...field} id="eduType" value="জেনারেল">
                          জেনারেল
                        </Radio>
                        <Radio {...field} id="eduType" value="আলিয়া">
                          আলিয়া
                        </Radio>
                        <Radio {...field} id="eduType" value="কওমি">
                          কওমি
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.eduType}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="secondary" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.secondary && form.touched.secondary}
                  >
                    <FormLabel
                      htmlFor="secondary"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ডিগ্রীর নাম: (এস.এস.সি/দাখিল/সমমান)
                    </FormLabel>
                    <Input {...field} id="secondary" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.secondary}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="higherSecondary" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.higherSecondary &&
                      form.touched.higherSecondary
                    }
                  >
                    <FormLabel
                      htmlFor="higherSecondary"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ডিগ্রীর নাম: (এইচ.এস.সি/আলিম/সমমান)
                    </FormLabel>
                    <Input {...field} id="higherSecondary" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.higherSecondary}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="graduate" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.graduate && form.touched.graduate}
                  >
                    <FormLabel
                      htmlFor="graduate"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ডিগ্রীর নাম: (অনার্স/ফাজিল/সমমান)
                    </FormLabel>
                    <Input {...field} id="graduate" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.graduate}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="postGraduate" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.postGraduate && form.touched.postGraduate
                    }
                  >
                    <FormLabel
                      htmlFor="postGraduate"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ডিগ্রীর নাম: (মাস্টার্স/কামিল/সমমান)
                    </FormLabel>
                    <Input {...field} id="postGraduate" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.postGraduate}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="profession" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.profession && form.touched.profession
                    }
                  >
                    <FormLabel
                      htmlFor="profession"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনার পেশা:
                    </FormLabel>
                    <CheckboxGroup colorScheme="brand">
                      <Grid
                        templateColumns="repeat(3, 1fr)"
                        templateRows="repeat(3, auto)"
                        gap={4}
                      >
                        <Checkbox {...field} id="profession" value="business">
                          ব্যাবসা
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="govtJob">
                          সরকারি চাকরিজীবী
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="nonGovtJob">
                          বেসরকারি চাকরিজীবী
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="homeTutor">
                          হোম টিউটর
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="teacher">
                          শিক্ষক/শিক্ষিকা
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="lawyer">
                          আইনজীবী
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="engineer">
                          ইঞ্জিনিয়ার
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="doctor">
                          ডাক্তার
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="nurse">
                          নার্স
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="pharmacist">
                          ফার্মাসিস্ট
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="paramedic">
                          প্যারামেডিক
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="therapist">
                          থেরাপিস্ট
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="samorikJob">
                          সামরিক জব
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="profession"
                          value="beSamorikJob"
                        >
                          বেসামরিক জব
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="profession"
                          value="adhaSamorikJob"
                        >
                          আধা সামরিক জব
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="Imam">
                          ইমাম
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="Muajjin">
                          মুয়াজ্জিন
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="pilot">
                          পাইলট
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="frelancer">
                          ফ্রিল্যান্সার
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="student">
                          শিক্ষার্থী
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="profession"
                          value="mbbsStudent"
                        >
                          MBBS/BDS শিক্ষার্থী
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="probashi">
                          প্রবাসী
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="Agrojob">
                          কৃষিকাজ
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="khamari">
                          খামারি
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="bekar">
                          বেকার/চাকরির সন্ধানরত
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="profession"
                          value="familyProperty"
                        >
                          পারিবারিক সম্পত্তি
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="jobless">
                          কর্মহীন
                        </Checkbox>
                        <Checkbox {...field} id="profession" value="others">
                          অন্যান্য
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.profession}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="professionDetails" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.professionDetails &&
                      form.touched.professionDetails
                    }
                  >
                    <FormLabel
                      htmlFor="professionDetails"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পেশা নিয়ে বিস্তারিত লিখুন: (অর্থাৎ আপনি কোথায় এবং কি ধরণের
                      কাজে দায়িত্বরত আছেন, এগুলো নিয়ে বিস্তারিত লিখুন। পেশা না
                      থাকলে খালি রাখুন।)
                    </FormLabel>
                    <Input {...field} id="professionDetails" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.professionDetails}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="income" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.income && form.touched.income}
                  >
                    <FormLabel
                      htmlFor="income"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      মাসিক আয়: (পেশা না থাকলে খালি রাখুন।)
                    </FormLabel>
                    <Input {...field} id="income" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.income}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(6)}
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

export default EducationInformation;
