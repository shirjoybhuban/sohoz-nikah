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
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useFormData } from 'store/context/FormDataProvider';

const MaritalInformation = () => {
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
          parentPermit: '',
          whyMarriage: '',
          marriageEdu: '',
          marriageJob: '',
          marriageHome: '',
          wifePorda: '',
          dowry: '',
          wifeDuty: '',
          photoOnline: '',
          divorceInfo: '',
          moreInfo: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('marital', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={'5'}>
              <Field name="parentPermit" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.parentPermit && form.touched.parentPermit
                    }
                  >
                    <FormLabel
                      htmlFor="parentPermit"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      অভিভাবক আপনার বিয়েতে রাজি আছেন? (যদি অভিভাবক রাজি নাও থাকে
                      তাহলে এর কারণ লিখুন এবং সেক্ষেত্রে আপনি কেন বিবাহে
                      আগাচ্ছেন সেটা বিস্তারিত লিখুন।)
                    </FormLabel>
                    <Input {...field} id="parentPermit" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.parentPermit}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="whyMarriage" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.whyMarriage && form.touched.whyMarriage
                    }
                  >
                    <FormLabel
                      htmlFor="whyMarriage"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?
                    </FormLabel>
                    <Input {...field} id="whyMarriage" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.whyMarriage}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="marriageEdu" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.marriageEdu && form.touched.marriageEdu
                    }
                  >
                    <FormLabel
                      htmlFor="marriageEdu"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিতে চান?
                    </FormLabel>
                    <Input {...field} id="marriageEdu" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.marriageEdu}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="marriageJob" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.marriageJob && form.touched.marriageJob
                    }
                  >
                    <FormLabel
                      htmlFor="marriageJob"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বিয়ের পর স্ত্রী চাইলে চাকরি বা ব্যবসা করতে দিবেন?
                    </FormLabel>
                    <Input {...field} id="marriageJob" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.marriageJob}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="marriageHome" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.marriageHome && form.touched.marriageHome
                    }
                  >
                    <FormLabel
                      htmlFor="marriageHome"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকবেন?
                    </FormLabel>

                    <Input {...field} id="marriageHome" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.marriageHome}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wifePorda" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.wifePorda && form.touched.wifePorda}
                  >
                    <FormLabel
                      htmlFor="wifePorda"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      স্ত্রী পর্দা করতে চাইলে পর্দার ব্যবস্থা রাখতে পারবেন?
                    </FormLabel>

                    <Input {...field} id="wifePorda" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wifePorda}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="dowry" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.dowry && form.touched.dowry}
                  >
                    <FormLabel
                      htmlFor="dowry"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বিয়ে উপলক্ষে আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে যৌতুক
                      বা উপহার বা অর্থ আশা করবেন কি না?
                    </FormLabel>

                    <Input {...field} id="dowry" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.dowry}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wifeDuty" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.wifeDuty && form.touched.wifeDuty}
                  >
                    <FormLabel
                      htmlFor="wifeDuty"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      যিনি আপনার স্ত্রী হবেন, তার প্রতি কি কি দায়িত্ব আছে আপনার?
                    </FormLabel>

                    <Input {...field} id="wifeDuty" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wifeDuty}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="photoOnline" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.photoOnline && form.touched.photoOnline
                    }
                  >
                    <FormLabel
                      htmlFor="photoOnline"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পাত্রীপক্ষ অনলাইনে আপনার ছবি দেখতে চাইলে দেখাতে রাজি আছেন?
                    </FormLabel>
                    <Input {...field} id="photoOnline" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.photoOnline}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="divorceInfo" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.divorceInfo && form.touched.divorceInfo
                    }
                  >
                    <FormLabel
                      htmlFor="divorceInfo"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ডিভোর্সড বা বিপত্নীক হলে এই সম্পর্কে বিস্তারিত লিখুন:
                      (অন্যথায় ফাঁকা রাখুন) (অর্থাৎ ডিভোর্স হলে কতদিন আগে হয়েছে,
                      বৈবাহিক সময়সীমা কেমন ছিল, ডিভোর্সের কারণ, সন্তান আছে কিনা
                      অথবা স্ত্রী মারা গেলে কতদিন আগে মারা গিয়েছেন এরকম
                      বিস্তারিত তথ্য।)
                    </FormLabel>

                    <Input {...field} id="divorceInfo" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.divorceInfo}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="moreInfo" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.moreInfo && form.touched.moreInfo}
                  >
                    <FormLabel
                      htmlFor="moreInfo"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বিয়ে সংক্রান্ত আরো কিছু জানাতে চাইলে এখানে লিখুন। অন্যথায়
                      খালি রাখুন। (যেমন: পাত্র-পাত্রী সাক্ষাতের ব্যাপারে,
                      অভিভাবকদের মতামত নিয়ে, বিয়ের পর কোন কোন বিষয় ছাড় দিতে রাজি
                      নন, এর আগে বিয়ে করেছিলেন কিনা বা সামনে আরো বিবাহ করতে
                      আগ্রহী কিনা ইত্যাদি কিছু জানানোর থাকলে লিখুন।)
                    </FormLabel>

                    <Input {...field} id="moreInfo" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.moreInfo}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(9)}
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

export default MaritalInformation;
