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

const PrimaryInformation = () => {
  const { updateFormData, setTabIndex } = useFormData();
  function validateField(value) {
    let error;
    // if (!value) {
    //   error = 'This field is required';
    // }
    return error;
  }
  return (
    <Formik
      initialValues={{
        gender: '',
        forWho: '',
        fullName: '',
        contactEmail: '',
        contactPhone: '',
        parentPhone: '',
        // personImage: '',
      }}
      onSubmit={(values, actions) => {
        console.log('values', values);
        updateFormData('primaryInformation', values);
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <SimpleGrid columns={1} spacing={'5'}>
            <Field name="gender" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.gender && form.touched.gender}
                >
                  <FormLabel
                    htmlFor="gender"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}
                  >
                    বায়োডাটার ধরন:
                  </FormLabel>
                  <Select placeholder="" {...field} id="gender">
                    <option value="Male">পাত্রের বায়োডাটা</option>
                    <option value="Female">পাত্রীর বায়োডাটা</option>
                  </Select>
                  <FormErrorMessage fontSize="13px">
                    {form.errors.gender}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="forwho" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.forwho && form.touched.forwho}
                >
                  <FormLabel
                    htmlFor="forwho"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}
                  >
                    বায়োডাটা কার জন্য তৈরী করছেন? (যেমনঃ নিজের জন্য/বোনের
                    জন্য/বন্ধুর জন্য/ভাগ্নির জন্য ইত্যাদি)
                  </FormLabel>
                  <Input {...field} id="forwho" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.forwho}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="fullName" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.fullName && form.touched.fullName}
                >
                  <FormLabel
                    htmlFor="fullName"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}
                  >
                    সম্পূর্ণ নাম: (NID কার্ডে যে নাম আছে)
                  </FormLabel>
                  <Input {...field} id="fullName" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.fullName}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="contactEmail" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.contactEmail && form.touched.contactEmail
                  }
                >
                  <FormLabel
                    htmlFor="contactEmail"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}
                  >
                    পাত্র/পাত্রীর সাথে যোগাযোগের ইমেইল আইডি: (আপনার সাথে আমাদের
                    যোগাযোগের জন্য প্রয়োজন হবে। অপরপক্ষ যোগাযোগ তথ্য নিতে চাইলে
                    খুব প্রয়োজন ছাড়া পাঠানো হবে না।)
                  </FormLabel>
                  <Input {...field} id="contactEmail" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.contactEmail}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="contactPhone" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.contactPhone && form.touched.contactPhone
                  }
                >
                  <FormLabel
                    htmlFor="contactPhone"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}
                  >
                    পাত্র/পাত্রীর মোবাইল নম্বর:
                  </FormLabel>
                  <Text color="text.100" fontWeight={500} fontSize={'13px'}>
                    মোবাইল নম্বর শুধুমাত্র ভেরিফিকেশনের জন্য আমাদের কাছে থাকবে।
                    কাউকে প্রদান করা হবে না।
                  </Text>
                  <Input {...field} id="contactPhone" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.contactPhone}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="parentPhone" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.parentPhone && form.touched.parentPhone
                  }
                >
                  <FormLabel
                    htmlFor="parentPhone"
                    fontWeight={700}
                    fontSize={'17px'}
                  >
                    পাত্র/পাত্রীর অভিভাবকের মোবাইল নম্বর:
                    <br />
                    <Text fontSize="xs" color="grey.100">
                      এভাবে লিখুন: বাবা -০১২৩৪৫৭৮৯১০ বড়ভাই -০১২৩৪৫৭৮৯১০. আপনার
                      বায়োডাটা কেউ পছন্দ করলে এবং যোগাযোগ করতে চাইলে শুধুমাত্র
                      এই অভিভাবকের তথ্য প্রদান করা হবে।
                    </Text>
                  </FormLabel>

                  <Input {...field} id="parentPhone" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.parentPhone}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {/* <Field name="personImage" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.personImage && form.touched.personImage
                    }>
                    <FormLabel
                      htmlFor="personImage"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}>
                      অপরপক্ষের কাছে ছবি দেখাতে আগ্রহী হলে এখানে আপলোড করুন। (আপনার অনুমতি এবং অনুমোদন ছাড়া কাউকে  ছবি দেখানো হবে না।)
                    </FormLabel>

                    <Input {...field} id="personImage" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.personImage}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}
          </SimpleGrid>

          <Box mt="10px">
            <Center>
              <Button
                onClick={() => setTabIndex(1)}
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
  );
};

export default PrimaryInformation;
