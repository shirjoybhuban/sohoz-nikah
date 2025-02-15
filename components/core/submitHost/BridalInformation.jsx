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

const BridalInformation = () => {
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
          wantAge: '',
          wantSkinTone: '',
          wantHeight: '',
          wantEduQual: '',
          wantSpecialQual: '',
          wantZila: '',
          wantMarriageStatus: '',
          wantSpecialcat: '',
          wantReligiousLife: '',
          wantProfession: '',
          wantFamilyFinance: '',
          wantBlackSkin: '',
          wantPartnerChar: '',
        }}
        onSubmit={(values, actions) => {
          console.log('values', values);
          updateFormData('bridalInformation', values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid columns={1} spacing={10}>
              <Field name="wantAge" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.wantAge && form.touched.wantAge}
                  >
                    <FormLabel
                      htmlFor="wantAge"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বয়স:
                    </FormLabel>
                    <Input {...field} id="wantAge" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantAge}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="wantSkinTone" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantSkinTone && form.touched.wantSkinTone
                    }
                  >
                    <FormLabel
                      htmlFor="wantSkinTone"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      গাত্রবর্ণ:
                    </FormLabel>
                    <CheckboxGroup colorScheme="green">
                      <Grid
                        templateColumns="repeat(4, 1fr)" // 4 columns
                        templateRows="repeat(1, auto)" // 3 rows
                        gap={4} // Spacing between grid items
                      >
                        <Checkbox
                          {...field}
                          id="wantSkinTone"
                          value="গাঢ় ত্বক"
                        >
                          গাঢ় ত্বক
                        </Checkbox>
                        <Checkbox {...field} id="wantSkinTone" value="শ্যামলা">
                          শ্যামলা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSkinTone"
                          value="উজ্জ্বল শ্যামলা"
                        >
                          উজ্জ্বল শ্যামলা
                        </Checkbox>
                        <Checkbox {...field} id="wantSkinTone" value="ফর্সা">
                          ফর্সা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSkinTone"
                          value="উজ্জ্বল ফর্সা"
                        >
                          উজ্জ্বল ফর্সা
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantSkinTone}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantHeight" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantHeight && form.touched.wantHeight
                    }
                  >
                    <FormLabel
                      htmlFor="wantHeight"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      উচ্চতা:
                    </FormLabel>
                    <Input {...field} id="wantHeight" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantHeight}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantEduQual" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantEduQual && form.touched.wantEduQual
                    }
                  >
                    <FormLabel
                      htmlFor="wantEduQual"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      শিক্ষাগত যোগ্যতা:
                    </FormLabel>
                    <Input {...field} id="wantEduQual" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantEduQual}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantMarriageStatus" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantMarriageStatus &&
                      form.touched.wantMarriageStatus
                    }
                  >
                    <FormLabel
                      htmlFor="wantMarriageStatus"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বৈবাহিক অবস্থা:
                    </FormLabel>

                    <CheckboxGroup colorScheme="green">
                      <Stack spacing={[1, 5]} direction={['column', 'row']}>
                        <Checkbox
                          {...field}
                          id="wantMarriageStatus"
                          value="অবিবাহিত"
                        >
                          অবিবাহিত
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantMarriageStatus"
                          value="ডিভোর্সড"
                        >
                          ডিভোর্সড
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantMarriageStatus"
                          value="বিধবা"
                        >
                          বিধবা
                        </Checkbox>
                      </Stack>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantMarriageStatus}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="wantZila" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.wantZila && form.touched.wantZila}
                  >
                    <FormLabel
                      htmlFor="wantZila"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      জেলা:
                    </FormLabel>

                    <Input {...field} id="wantZila" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantZila}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantSpecialQual" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantSpecialQual &&
                      form.touched.wantSpecialQual
                    }
                  >
                    <FormLabel
                      htmlFor="wantSpecialQual"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      বিশেষ শিক্ষাগত যোগ্যতা:
                    </FormLabel>

                    <CheckboxGroup colorScheme="green">
                      <Grid
                        templateColumns="repeat(3, 1fr)" // 4 columns
                        templateRows="repeat(3, auto)" // 3 rows
                        gap={4} // Spacing between grid items
                      >
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="হাফেজা"
                        >
                          হাফেজা
                        </Checkbox>
                        <Checkbox {...field} id="wantSpecialQual" value="আলেমা">
                          আলেমা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="ক্বারিয়া"
                        >
                          ক্বারিয়া
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="তালীম শিক্ষিকা"
                        >
                          তালীম শিক্ষিকা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="াজবিদ শিক্ষিকা"
                        >
                          তাজবিদ শিক্ষিকা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="দাঈয়া"
                        >
                          দাঈয়া
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="মুফতিয়া"
                        >
                          মুফতিয়া
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="মুহাদ্দিসা"
                        >
                          মুহাদ্দিসা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="ইসলামিক স্কলার"
                        >
                          ইসলামিক স্কলার
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialQual"
                          value="্রযোজ্য নয়"
                        >
                          প্রযোজ্য নয়
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantSpecialQual}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="wantSpecialcat" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantSpecialcat && form.touched.wantSpecialcat
                    }
                  >
                    <FormLabel
                      htmlFor="wantSpecialcat"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আপনি কোন কোন বিশেষ ক্যাটাগরিতে আগ্রহী?
                    </FormLabel>
                    <CheckboxGroup colorScheme="green">
                      <Grid
                        templateColumns="repeat(3, 1fr)" // 4 columns
                        templateRows="repeat(4, auto)" // 3 rows
                        gap={4} // Spacing between grid items
                      >
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="সমাজ সেবক"
                        >
                          সমাজ সেবক
                        </Checkbox>
                        <Checkbox {...field} id="wantSpecialcat" value="তাবলীগ">
                          তাবলীগ
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="নওমুসলিম"
                        >
                          নওমুসলিম
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="প্রবাসী/ফরেইন সিটিজেন"
                        >
                          প্রবাসী/ফরেইন সিটিজেন
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="শিক্ষার্থী/চাকুরি সন্ধানে আছে"
                        >
                          শিক্ষার্থী/চাকুরি সন্ধানে আছে
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="প্রতিবন্ধী"
                        >
                          প্রতিবন্ধী
                        </Checkbox>
                        <Checkbox {...field} id="wantSpecialcat" value="এতিম">
                          এতিম
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="ইনফার্টিলিটি/বন্ধ্যা"
                        >
                          ইনফার্টিলিটি/বন্ধ্যা
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="শর্ট ডিভোর্সড"
                        >
                          শর্ট ডিভোর্সড
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="সিঙ্গেল ফাদার"
                        >
                          সিঙ্গেল ফাদার
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="সিঙ্গেল মাদার"
                        >
                          সিঙ্গেল মাদার
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="স্বল্প উচ্চতার মানুষ"
                        >
                          স্বল্প উচ্চতার মানুষ
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantSpecialcat"
                          value="প্রযোজ্য নয়"
                        >
                          প্রযোজ্য নয়
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantSpecialcat}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantReligiousLife" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantReligiousLife &&
                      form.touched.wantReligiousLife
                    }
                  >
                    <FormLabel
                      htmlFor="wantReligiousLife"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      ধর্মীয় লাইফস্টাইল:
                    </FormLabel>

                    <CheckboxGroup colorScheme="branc">
                      <Grid
                        templateColumns="repeat(3, 1fr)"
                        templateRows="repeat(3, auto)"
                        gap={4}
                      >
                        <Checkbox
                          {...field}
                          id="wantReligiousLife"
                          value="জেনারেল/নন-প্রাক্টিসিং "
                        >
                          জেনারেল/নন-প্রাক্টিসিং{' '}
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantReligiousLife"
                          value="প্রাক্টিসিংয়ের চেষ্টারত"
                        >
                          প্রাক্টিসিংয়ের চেষ্টারত
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantReligiousLife"
                          value="পূর্ণ ধার্মিক/ প্র্যাক্টিসিং"
                        >
                          পূর্ণ ধার্মিক/ প্র্যাক্টিসিং
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantReligiousLife}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantProfession" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantProfession && form.touched.wantProfession
                    }
                  >
                    <FormLabel
                      htmlFor="wantProfession"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পেশা:
                    </FormLabel>

                    <Input {...field} id="wantProfession" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantProfession}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantFamilyFinance" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantFamilyFinance &&
                      form.touched.wantFamilyFinance
                    }
                  >
                    <FormLabel
                      htmlFor="wantFamilyFinance"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      পরিবারের অর্থনৈতিক অবস্থা:
                    </FormLabel>
                    <CheckboxGroup colorScheme="green">
                      <Grid
                        templateColumns="repeat(3, 1fr)"
                        templateRows="repeat(3, auto)"
                        gap={4}
                      >
                        <Checkbox
                          {...field}
                          id="wantFamilyFinance"
                          value="উচ্চবিত্ত"
                        >
                          উচ্চবিত্ত
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantFamilyFinance"
                          value="উচ্চ মধ্যবিত্ত"
                        >
                          উচ্চ মধ্যবিত্ত
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantFamilyFinance"
                          value="মধ্যবিত্ত"
                        >
                          মধ্যবিত্ত
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantFamilyFinance"
                          value="নিম্ন মধ্যবিত্ত"
                        >
                          নিম্ন মধ্যবিত্ত
                        </Checkbox>
                        <Checkbox
                          {...field}
                          id="wantFamilyFinance"
                          value="নিম্নবিত্ত"
                        >
                          নিম্নবিত্ত
                        </Checkbox>
                      </Grid>
                    </CheckboxGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantFamilyFinance}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantBlackSkin" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantBlackSkin && form.touched.wantBlackSkin
                    }
                  >
                    <FormLabel
                      htmlFor="wantBlackSkin"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      আল্লাহ যাদেরকে গাঢ় ত্বক বা কালো বর্ণ দিয়েছেন, এরকম
                      পাত্রীর প্রতি আপনি আগ্রহী?
                    </FormLabel>
                    <RadioGroup>
                      <Grid
                        templateColumns="repeat(4, 1fr)"
                        templateRows="repeat(3, auto)"
                        gap={4}
                      >
                        <Radio {...field} id="wantBlackSkin" value="জি ">
                          জি
                        </Radio>
                        <Radio {...field} id="wantBlackSkin" value="না">
                          না
                        </Radio>
                        <Radio
                          {...field}
                          id="wantBlackSkin"
                          value="দেখা যেতে পারে"
                        >
                          দেখা যেতে পারে
                        </Radio>
                        <Radio {...field} id="wantBlackSkin" value="মোটামুটি">
                          মোটামুটি
                        </Radio>
                      </Grid>
                    </RadioGroup>
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantBlackSkin}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="wantPartnerChar" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.wantPartnerChar &&
                      form.touched.wantPartnerChar
                    }
                  >
                    <FormLabel
                      htmlFor="wantPartnerChar"
                      color="text.100"
                      fontWeight={700}
                      fontSize={'14px'}
                    >
                      জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন: (এখানে আপনি
                      যেমন জীবনসঙ্গী চাচ্ছেন বিস্তারিত লিখবেন। অর্থাৎ তার
                      স্বভাব, দ্বীনদারিতা, চারিত্রীক গুণাবলী কেমন আশা করেন
                      ইত্যাদি।)
                    </FormLabel>
                    <Input {...field} id="wantPartnerChar" />
                    <FormErrorMessage fontSize="13px">
                      {form.errors.wantPartnerChar}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SimpleGrid>

            <Box mt="10px">
              <Center>
                <Button
                  onClick={() => setTabIndex(4)}
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

export default BridalInformation;
