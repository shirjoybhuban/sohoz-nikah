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

const ManagementQuery = () => {
  const { handleFormSubmission } = useFormData();
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
          oath: '',
          aggrement: '',
          aboutcontact: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          handleFormSubmission();
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={'5'}>
              <Field name="oath" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.oath && form.touched.oath}
                  >
                    <FormLabel
                      htmlFor="oath"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আল্লাহ'র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিয়েছেন সব সত্য?
                    </FormLabel>
                    <Input {...field} id="oath" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.oath}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="aggrement" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.aggrement && form.touched.aggrement}
                  >
                    <FormLabel
                      htmlFor="aggrement"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      কোন মিথ্যা তথ্য প্রদান করলে সহজনিকাহ কর্তৃপক্ষ এর জন্য
                      দুনিয়া এবং আখিরাতে দায়ী থাকবে না এবং যেকোনো রকম আইনী
                      জটিলতা হলে সম্পূর্ণ দায়ভার আপনাকে বহন করতে হবে। আপনি রাজি
                      আছেন?
                    </FormLabel>
                    <Input {...field} id="aggrement" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.aggrement}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="aboutcontact" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.aboutcontact && form.touched.aboutcontact
                    }
                  >
                    <FormLabel
                      htmlFor="aboutcontact"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      এই বায়োডাটা যদি কেউ পছন্দ করে এবং আপনার সাথে যোগাযোগ করতে
                      চায়, তাহলে সহজনিকাহের পক্ষ হতে শুধু মাত্র আপনার অভিভাবকে
                      যোগাযোগ নম্বর প্রদান করা হবে। আপনার পার্সোনাল ইমেইল বা
                      মোবাইল নম্বর প্রদান করা হবে না। আপনার সম্মতি আছে?
                    </FormLabel>
                    <RadioGroup>
                      <Stack direction="row">
                        <Radio
                          {...field}
                          id="aboutcontact"
                          value="জি সম্মতি আছে "
                        >
                          জি সম্মতি আছে
                        </Radio>
                        <Radio {...field} id="aboutcontact" value="সম্মতি নেই">
                          সম্মতি নেই
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.aboutcontact}
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
                  w={'200px'}
                  _hover={{
                    border: '1px solid #0289F2',
                    bg: '#dbefff',
                    color: 'text.100',
                  }}
                >
                  Submit Biodata Details
                </Button>
              </Center>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ManagementQuery;
