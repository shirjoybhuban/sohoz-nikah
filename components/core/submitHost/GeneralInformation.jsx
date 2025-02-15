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
import { useFormData } from 'store/context/FormDataProvider';

const GeneralInformation = () => {
  const { updateFormData, setTabIndex } = useFormData();
  function validateField(value) {
    let error;
    if (value) {
      error = 'This field is required';
    }
    return error;
  }
  return (
    <Box mt={'40px'}>
      <Formik
        initialValues={{
          birthDate: '',
          marriageType: '',
          skinTone: '',
          hight: '',
          weight: '',
          bloodGroup: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('generalInformation', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={2} spacing={'5'}>
              <Field name="birthDate" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.birthDate && form.touched.birthDate}
                  >
                    <FormLabel
                      htmlFor="birthDate"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      জন্ম তারিখ:(সার্টিফিকেট অনুযায়ী নয়)
                    </FormLabel>
                    <Input {...field} id="birthDate" type="date"/>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.birthDate}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="marriageType" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.marriageType && form.touched.marriageType
                    }
                  >
                    <FormLabel
                      htmlFor="marriageType"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বৈবাহিক অবস্থা:
                    </FormLabel>
                    <Select
                      placeholder=""
                      {...field}
                      id="marriageType"
                    >
                      <option value="অবিবাহিত">অবিবাহিত</option>
                      <option value="বিবাহিত">বিবাহিত</option>
                      <option value="ডিভোর্সড">ডিভোর্সড</option>
                      <option value="বিপত্নীক">বিপত্নীক/বিধবা</option>
                    </Select>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.marriageType}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="skinTone" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.skinTone && form.touched.skinTone}
                  >
                    <FormLabel
                      htmlFor="skinTone"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      গাত্রবর্ণ:
                    </FormLabel>
                    <Select
                      placeholder="নির্বাচন করুন"
                      {...field}
                      id="skinTone"
                    >
                      <option value="গাঢ় ত্বক">গাঢ় ত্বক</option>
                      <option value="শ্যামলা">শ্যামলা</option>
                      <option value="উজ্জ্বল শ্যামলা">উজ্জ্বল শ্যামলা</option>
                      <option value="ফর্সা">ফর্সা</option>
                      <option value="উজ্জ্বল ফর্সা">উজ্জ্বল ফর্সা</option>
                    </Select>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.skinTone}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="hight" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.hight && form.touched.hight}
                  >
                    <FormLabel
                      htmlFor="hight"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      উচ্চতা:
                    </FormLabel>
                    <Input {...field} id="hight" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.hight}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="weight" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.weight && form.touched.weight}
                  >
                    <FormLabel
                      htmlFor="weight"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ওজন:
                    </FormLabel>

                    <Input {...field} id="weight" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.weight}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="bloodGroup" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.bloodGroup && form.touched.bloodGroup
                    }
                  >
                    <FormLabel
                      htmlFor="bloodGroup"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      রক্তের গ্রুপ:
                    </FormLabel>

                    <Select
                      placeholder="নির্বাচন করুন"
                      {...field}
                      id="bloodGroup"
                    >
                      <option value="A+">A+</option>
                      <option value="A−">A−</option>
                      <option value="B+">B+</option>
                      <option value="B−">B−</option>
                      <option value="AB+">AB+</option>
                      <option value="AB−">AB−</option>
                      <option value="O+">O+</option>
                      <option value="O−">O−</option>
                    </Select>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.bloodGroup}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(2)}
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

export default GeneralInformation;
