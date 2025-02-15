import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from 'store/slices/filterSlice';

const GenderFilter = () => {
  const { gender, loading } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const setValue = (value) => {
    dispatch(setGender(value));
  };
  return (
    <Box bg="white">
      <Accordion allowMultiple>
        <AccordionItem borderRadius={'10px'} border="1px solid #ebebeb">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontSize={'15px'} fontWeight={700}>
                আমি খুঁজছি
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <Divider />
          <AccordionPanel pb={4}>
            <RadioGroup value={gender} onChange={setValue} isDisabled={loading}>
              <Stack direction="column">
                <Radio size="sm" value={"null"} colorScheme={'brand'}>
                  সকল বায়োডাটা
                </Radio>
                <Radio size="sm" value="Male" colorScheme={'brand'}>
                  পাত্রের বায়োডাটা
                </Radio>
                <Radio size="sm" value="Female" colorScheme={'brand'}>
                  পাত্রীর বায়োডাটা
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default GenderFilter;
