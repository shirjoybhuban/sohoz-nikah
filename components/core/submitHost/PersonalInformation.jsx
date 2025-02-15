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
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useFormData } from 'store/context/FormDataProvider';

const PersonalInformation = () => {
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
          beard: '',
          dress: '',
          politics: '',
          entertainment: '',
          leisureTime: '',
          disease: '',
          socialActivity: '',
          books: '',
          food: '',
          character: '',
          homeDuty: '',
          idolPerson: '',
          futurePlan: '',
          interest: '',
          socialMedia: '',
          feminism: '',
          lgbtq: '',
          specialCatagory: '',
          personalWords: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('personalInformation', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={'5'}>
              <Field name="beard" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.beard && form.touched.beard}
                  >
                    <FormLabel
                      htmlFor="beard"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনার কি দাড়ি আছে?
                    </FormLabel>
                    <Input {...field} id="beard" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.beard}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="dress" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.dress && form.touched.dress}
                  >
                    <FormLabel
                      htmlFor="dress"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বাড়ির বাহিরে সাধারণত কী ধরণের পোশাক পড়তে পছন্দ করেন?
                    </FormLabel>
                    <Input {...field} id="dress" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.dress}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="politics" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.politics && form.touched.politics}
                  >
                    <FormLabel
                      htmlFor="politics"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      রাজনীতি নিয়ে আপনার দৃষ্টিভঙ্গি কি? এর সাথে যুক্ত থাকলে
                      বিস্তারিত লিখুন।
                    </FormLabel>
                    <Input {...field} id="politics" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.politics}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="entertainment" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.entertainment && form.touched.entertainment
                    }
                  >
                    <FormLabel
                      htmlFor="entertainment"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      নাটক/সিনেমা/সিরিয়াল/গান/খেলা এসবের কোনটি দেখেন বা শুনেন?
                    </FormLabel>
                    <Input {...field} id="entertainment" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.entertainment}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="leisureTime" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.leisureTime && form.touched.leisureTime
                    }
                  >
                    <FormLabel
                      htmlFor="leisureTime"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      অবসর সময়ে কি করতে পছন্দ করেন?
                    </FormLabel>

                    <Input {...field} id="leisureTime" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.leisureTime}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="disease" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.disease && form.touched.disease}
                  >
                    <FormLabel
                      htmlFor="disease"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      মানসিক বা শারীরিক কোনো রোগ আছে কি? থাকলে বিস্তারিত লিখুন।
                    </FormLabel>

                    <Input {...field} id="disease" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.disease}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="socialActivity" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.socialActivity && form.touched.socialActivity
                    }
                  >
                    <FormLabel
                      htmlFor="socialActivity"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      সামাজিক বা ধর্মীয় কোনো কাজে যুক্ত আছেন কিনা। (যেমনঃ
                      তাবলীগ)
                    </FormLabel>

                    <Input {...field} id="socialActivity" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.socialActivity}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="books" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.books && form.touched.books}
                  >
                    <FormLabel
                      htmlFor="books"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনার পছন্দের কিছু বইয়ের নাম লিখুন। (যদি পড়ে থাকেন)
                    </FormLabel>
                    <Input {...field} id="books" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.books}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="food" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.food && form.touched.food}
                  >
                    <FormLabel
                      htmlFor="food"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      দৈনন্দিন খাবারে কি কি পছন্দ এবং অপছন্দ? (যেমন: সবজি আর
                      মাংস বেশি পছন্দ। মাছ কম খাওয়া হয়।)
                    </FormLabel>

                    <Input {...field} id="food" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.food}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="character" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.character && form.touched.character}
                  >
                    <FormLabel
                      htmlFor="character"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      নিজের কিছু গুণাবলী চিহ্নিত করুন:
                    </FormLabel>

                    <CheckboxGroup colorScheme="green">
                      <Grid
                        templateColumns="repeat(4, 1fr)" // 4 columns
                        templateRows="repeat(3, auto)" // 3 rows
                        gap={4} // Spacing between grid items
                      >
                        <Checkbox
                          {...field}
                          id="character"
                          value="ইন্ট্রোভার্ট"
                        >
                          ইন্ট্রোভার্ট
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="character"
                          value="এক্সট্রোভার্ট"
                        >
                          এক্সট্রোভার্ট
                        </Checkbox>
                        <Checkbox {...field} id="character" value="সাংসারিক">
                          সাংসারিক
                        </Checkbox>
                        <Checkbox {...field} id="character" value="মিশুক">
                          মিশুক
                        </Checkbox>
                        <Checkbox {...field} id="character" value="শান্ত-শিষ্ট">
                          শান্ত-শিষ্ট
                        </Checkbox>
                        <Checkbox {...field} id="character" value="ধৈর্যশীল">
                          ধৈর্যশীল
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="character"
                          value="ভালবাসাপ্রবণ"
                        >
                          ভালবাসাপ্রবণ
                        </Checkbox>
                        <Checkbox {...field} id="character" value="সাপোর্টিভ">
                          সাপোর্টিভ
                        </Checkbox>
                        <Checkbox {...field} id="character" value="সচেতন">
                          সচেতন
                        </Checkbox>
                        <Checkbox {...field} id="character" value="ইমোশনাল">
                          ইমোশনাল
                        </Checkbox>
                        <Checkbox {...field} id="character" value="দয়ালু">
                          দয়ালু
                        </Checkbox>
                        <Checkbox {...field} id="character" value="দানশীল">
                          দানশীল
                        </Checkbox>
                        <Checkbox {...field} id="character" value="সংস্কৃতিমনা">
                          সংস্কৃতিমনা
                        </Checkbox>
                        <Checkbox {...field} id="character" value="ধার্মিক">
                          ধার্মিক
                        </Checkbox>
                        <Checkbox {...field} id="character" value="যত্নশীল">
                          যত্নশীল
                        </Checkbox>
                        <Checkbox {...field} id="character" value="দায়িত্ববান">
                          দায়িত্ববান
                        </Checkbox>
                        <Checkbox {...field} id="character" value="প্রতিবাদী">
                          প্রতিবাদী
                        </Checkbox>
                        <Checkbox {...field} id="character" value="রাগী">
                          রাগী
                        </Checkbox>
                        <Checkbox {...field} id="character" value="অস্থির">
                          অস্থির
                        </Checkbox>
                        <Checkbox {...field} id="character" value="একগুঁয়ে">
                          একগুঁয়ে
                        </Checkbox>
                        <Checkbox {...field} id="character" value="সন্দেহপ্রবন">
                          সন্দেহপ্রবন
                        </Checkbox>
                        <Checkbox {...field} id="character" value="খুঁতখুঁতে">
                          খুঁতখুঁতে
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.character}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="homeDuty" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.homeDuty && form.touched.homeDuty}
                  >
                    <FormLabel
                      htmlFor="homeDuty"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বাড়িতে অবস্থানকালে কি ধরণের কাজ বা দায়িত্ব পালন করে থাকেন?
                      (যেমনঃ নিজের কাজগুলো করি/মা কে কাজে সাহায্য করি/তেমন কিছু
                      করা হয় না ইত্যাদি।)
                    </FormLabel>
                    <Input {...field} id="homeDuty" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.homeDuty}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="idolPerson" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.idolPerson && form.touched.idolPerson
                    }
                  >
                    <FormLabel
                      htmlFor="idolPerson"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনার পছন্দের কয়েকজন ব্যক্তিত্বের নাম লিখুন যাদেরকে নিয়মিত
                      ফলো করেন। (যেমনঃ ডা: জাহাঙ্গীর কবির, ডা: জাকির নায়েক,
                      ইত্যাদি)
                    </FormLabel>
                    <Input {...field} id="idolPerson" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.idolPerson}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="futurePlan" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.futurePlan && form.touched.futurePlan
                    }
                  >
                    <FormLabel
                      htmlFor="futurePlan"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনার ভবিষ্যৎ পরিকল্পনা বা লক্ষ্য কি? (যেমন: P.H.D করতে
                      চাই, দেশের জন্য কিছু করতে চাই, হজ-উমরাহ করতে চাই ইত্যাদি)
                    </FormLabel>
                    <Input {...field} id="futurePlan" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.futurePlan}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="interest" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.interest && form.touched.interest}
                  >
                    <FormLabel
                      htmlFor="interest"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনার আগ্রহ ও শখ কিসে? (যেমনঃ হাতের কাজ, স্পোর্টস,
                      স্বাস্থ্য, টেকনোলজি, গেমিং, ইত্যাদি)
                    </FormLabel>
                    <Input {...field} id="interest" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.interest}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="socialMedia" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.socialMedia && form.touched.socialMedia
                    }
                  >
                    <FormLabel
                      htmlFor="socialMedia"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      কোন কোন সোশ্যাল মিডিয়া ব্যবহার করেন?
                    </FormLabel>
                    <Input {...field} id="socialMedia" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.socialMedia}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="feminism" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.feminism && form.touched.feminism}
                  >
                    <FormLabel
                      htmlFor="feminism"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      নারী-পুরুষ সমঅধীকার বিষয়টাকে আপনি কিভাবে দেখেন?
                    </FormLabel>
                    <Input {...field} id="feminism" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.feminism}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lgbtq" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.lgbtq && form.touched.lgbtq}
                  >
                    <FormLabel
                      htmlFor="lgbtq"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      সমকামিতা বা LGBTQ সম্পর্কে আপনার ধারণা কি?
                    </FormLabel>
                    <Input {...field} id="lgbtq" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.lgbtq}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="specialCatagory" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.specialCatagory &&
                      form.touched.specialCatagory
                    }
                  >
                    <FormLabel
                      htmlFor="specialCatagory"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনার ক্ষেত্রে প্রযোজ্য এমন বিশেষ কোনো অবস্থা বা
                      কার্যক্রম:
                    </FormLabel>
                    <CheckboxGroup colorScheme="green">
                    <Grid
                        templateColumns="repeat(4, 1fr)" // 4 columns
                        templateRows="repeat(3, auto)" // 3 rows
                        gap={4} // Spacing between grid items
                      >
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="সমাজ সেবক"
                        >
                          সমাজ সেবক
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="তাবলীগ"
                        >
                          তাবলীগ
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="নওমুসলিম"
                        >
                          নওমুসলিম
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="প্রতিবন্ধী"
                        >
                          প্রতিবন্ধী
                        </Checkbox>
                        <Checkbox {...field} id="specialCatagory" value="এতিম">
                          এতিম
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="ইনফার্টিলিটি/বন্ধ্যা"
                        >
                          ইনফার্টিলিটি/বন্ধ্যা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="শর্ট ডিভোর্সড"
                        >
                          শর্ট ডিভোর্সড
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="সিঙ্গেল ফাদার"
                        >
                          সিঙ্গেল ফাদার
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="সিঙ্গেল মাদার"
                        >
                          সিঙ্গেল মাদার
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="স্বল্প উচ্চতার মানুষ"
                        >
                          স্বল্প উচ্চতার মানুষ
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="specialCatagory"
                          value="প্রযোজ্য নয়"
                        >
                          প্রযোজ্য নয়
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.specialCatagory}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="personalWords" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.personalWords && form.touched.personalWords
                    }
                  >
                    <FormLabel
                      htmlFor="personalWords"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      নিজের সম্পর্কে বিশেষ কিছু জানাতে চাইলে এখানে লিখুন।
                      অন্যথায় খালি রাখুন। (আপনার পারিবারিক বা ব্যাক্তিগত
                      সুবিধা-অসুবিধা বা এমন কিছু যা জানানো খুবই গুরুত্বপূর্ণ
                      সেগুলো লিখতে পারেন। যেমন: পর্দা রক্ষা, পরিবারের ভরণপোষণ
                      ইত্যাদি নিয়ে। বিস্তারিত লিখতে পারলে পাঠক আপনার সম্পর্কে
                      একটা পরিষ্কার ধারণা লাভ করবে।)
                    </FormLabel>
                    <Input {...field} id="personalWords" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.personalWords}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(3)}
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

export default PersonalInformation;
