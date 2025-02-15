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
  SimpleGrid,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useFormData } from 'store/context/FormDataProvider';

const ReligionInformation = () => {
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
          muslimType: '',
          sunniShia: '',
          manhaj: '',
          salat: '',
          quran: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('religion', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={'5'}>
              <Field name="muslimType" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.muslimType && form.touched.muslimType
                    }
                  >
                    <FormLabel
                      htmlFor="muslimType"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনি কি আপনার জীবনকে পরিপূর্ণ ভাবে ইসলামিক বিধি-বিধান
                      অনুযায়ী পরিচালনা করেন?
                    </FormLabel>
                    <RadioGroup>
                      <Grid
                        templateColumns="repeat(1, 1fr)"
                        templateRows="repeat(3, auto)"
                        gap={4}
                      >
                        <Radio {...field} id="muslimType" value="nonPracticing">
                          সেরকমভাবে মেনে চলা হয় না - (জেনারেল/নন-প্রাক্টিসিং)
                        </Radio>
                        <Radio {...field} id="muslimType" value="Practicing">
                          পরিপূর্ণভাবে মেনে চলা হয় না কিন্তু প্রবল ইচ্ছা আছে এবং
                          চেষ্টা করছি - (প্রাক্টিসিংয়ের চেষ্টায় আছি)
                        </Radio>
                        <Radio
                          {...field}
                          id="muslimType"
                          value="tryingPracticing"
                        >
                          জি পরিপূর্ণভাবে মেনে চলি এবং সর্বদা চেষ্টায় থাকি -
                          (পূর্ণ ধার্মিক/ প্র্যাক্টিসিং)
                        </Radio>
                      </Grid>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.muslimType}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="sunniShia" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.sunniShia && form.touched.sunniShia}
                  >
                    <FormLabel
                      htmlFor="sunniShia"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ধর্মীয় কোন মতাদর্শ মেনে চলেন?
                    </FormLabel>
                    <RadioGroup>
                      <Grid
                        templateColumns="repeat(3, 1fr)"
                        templateRows="repeat(3, auto)"
                        gap={4}
                      >
                        <Radio {...field} id="sunniShia" value="সুন্নি">
                          সুন্নি
                        </Radio>
                        <Radio {...field} id="sunniShia" value="শিয়া">
                          শিয়া
                        </Radio>
                        <Radio {...field} id="sunniShia" value="অন্যান্য">
                          অন্যান্য
                        </Radio>
                        <Radio {...field} id="sunniShia" value="জানা নেই">
                          জানা নেই
                        </Radio>
                      </Grid>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.sunniShia}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="manhaj" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.manhaj && form.touched.manhaj}
                  >
                    <FormLabel
                      htmlFor="manhaj"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      কোন মাজহাব / মানহাজ অনুসরণ করেন?
                    </FormLabel>
                    <CheckboxGroup colorScheme="green">
                      <Grid
                        templateColumns="repeat(3, 1fr)"
                        templateRows="repeat(3, auto)"
                        gap={4}
                      >
                        <Checkbox {...field} id="manhaj" value="হানাফি">
                          হানাফি
                        </Checkbox>
                        <Checkbox {...field} id="manhaj" value="সালাফি">
                          সালাফি/ আহলে হাদিস
                        </Checkbox>
                        <Checkbox {...field} id="manhaj" value="মালিকী">
                          মালিকী
                        </Checkbox>
                        <Checkbox {...field} id="manhaj" value="হাম্বলি">
                          হাম্বলি
                        </Checkbox>
                        <Checkbox {...field} id="manhaj" value="অন্যান্য">
                          অন্যান্য
                        </Checkbox>
                        <Checkbox {...field} id="manhaj" value="জানা নেই">
                          জানা নেই
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.manhaj}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="salat" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.salat && form.touched.salat}
                  >
                    <FormLabel
                      htmlFor="salat"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়া হয়?
                    </FormLabel>
                    <Input {...field} id="salat" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.salat}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="quran" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.quran && form.touched.quran}
                  >
                    <FormLabel
                      htmlFor="quran"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      শুদ্ধভাবে কুরআন তেলাওয়াত করতে পারেন?
                    </FormLabel>

                    <Input {...field} id="quran" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.quran}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(8)}
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

export default ReligionInformation;
