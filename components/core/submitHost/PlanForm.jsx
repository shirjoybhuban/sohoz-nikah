import { CheckIcon } from '@chakra-ui/icons';
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
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

const PlanForm = () => {
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
        planName: '',
        price: '',
        type: '',
        adminPanel: '',
        bandwidth: '',
        diskSpace: '',
        numberOfSites: '',
        fetures: '',
        ram: '',
        coreNumber: '',
        coreSpeed: '',
        directLink: '',
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        nextStep();
      }}>
      {(props) => (
        <Form>
          <SimpleGrid columns={2} spacing={'5'}>
            <Field name="planName" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.planName && form.touched.planName}>
                  <FormLabel
                    htmlFor="planName"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Plan Name
                  </FormLabel>
                  <Input {...field} id="planName" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.planName}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="price" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.price && form.touched.price}>
                  <FormLabel
                    htmlFor="price"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Price
                  </FormLabel>
                  <Input {...field} id="price" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.website}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </SimpleGrid>

          <SimpleGrid columns={2} spacing={'4'} mt="4">
            <Field name="type" validate={validateField}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.type && form.touched.type}>
                  <FormLabel
                    htmlFor="type"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Type
                  </FormLabel>
                  <Input {...field} id="type" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.type}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="adminPanel" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.adminPanel && form.touched.adminPanel}>
                  <FormLabel
                    htmlFor="adminPanel"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Admin Panel
                  </FormLabel>

                  <Input {...field} id="adminPanel" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.adminPanel}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="bandwidth" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.bandwidth && form.touched.bandwidth}>
                  <FormLabel
                    htmlFor="bandwidth"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Bandwidth(TB)
                  </FormLabel>

                  <Input {...field} id="bandwidth" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.bandwidth}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="diskSpace" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.diskSpace && form.touched.diskSpace}>
                  <FormLabel
                    htmlFor="diskSpace"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Disk Space(GB)
                  </FormLabel>

                  <Input {...field} id="diskSpace" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.diskSpace}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="numberOfSites" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.numberOfSites && form.touched.numberOfSites
                  }>
                  <FormLabel
                    htmlFor="numberOfSites"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Number of Sites
                  </FormLabel>
                  <Input {...field} id="numberOfSites" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.numberOfSites}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="ram" validate={validateField}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.ram && form.touched.ram}>
                  <FormLabel
                    htmlFor="ram"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    RAM(MB)
                  </FormLabel>

                  <Input {...field} id="ram" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.ram}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="coreNumber" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.coreNumber && form.touched.coreNumber}>
                  <FormLabel
                    htmlFor="coreNumber"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Cores Number
                  </FormLabel>

                  <Input {...field} id="coreNumber" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.coreNumber}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="coreSpeed" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.coreSpeed && form.touched.coreSpeed}>
                  <FormLabel
                    htmlFor="coreSpeed"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Core Speed(GHz )
                  </FormLabel>

                  <Input {...field} id="coreSpeed" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.coreSpeed}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box>
              <FormControl>
                <FormLabel
                  htmlFor="datacenter"
                  color="text.100"
                  fontWeight={700}
                  fontSize={'14px'}>
                  Operating System
                </FormLabel>
                <CheckboxGroup colorScheme="blue">
                  <Stack spacing={1} direction={'column'}>
                    <Checkbox value="paypal">
                      <Text fontSize={'14px'} fontWeight={600} color="grey">
                        Linux
                      </Text>
                    </Checkbox>
                    <Checkbox value="paypsal">
                      <Text fontSize={'14px'} fontWeight={600} color="grey">
                        Windows
                      </Text>
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel
                  htmlFor="datacenter"
                  color="text.100"
                  fontWeight={700}
                  fontSize={'14px'}>
                  SSD / HDD
                </FormLabel>
                <CheckboxGroup colorScheme="blue">
                  <Stack spacing={1} direction={'column'}>
                    <Checkbox value="paypal">
                      <Text fontSize={'14px'} fontWeight={600} color="grey">
                        SSD
                      </Text>
                    </Checkbox>
                    <Checkbox value="paypsal">
                      <Text fontSize={'14px'} fontWeight={600} color="grey">
                        HDD
                      </Text>
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={1} spacing={'4'} mt="4">
            <Field name="fetures" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.fetures && form.touched.fetures}>
                  <FormLabel
                    htmlFor="fetures"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Features(write every feature on new line)
                  </FormLabel>

                  <Input {...field} id="fetures" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.fetures}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="directLink" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.directLink && form.touched.directLink}>
                  <FormLabel
                    htmlFor="directLink"
                    color="text.100"
                    fontWeight={700}
                    fontSize={'14px'}>
                    Direct link to plan details
                  </FormLabel>

                  <Input {...field} id="directLink" />
                  <FormErrorMessage fontSize="13px">
                    {form.errors.directLink}
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
                rightIcon={<CheckIcon />}
                _hover={{
                  border: '1px solid #0289F2',
                  bg: '#dbefff',
                  color: 'text.100',
                }}>
                Add Plan
              </Button>
            </Center>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PlanForm;
