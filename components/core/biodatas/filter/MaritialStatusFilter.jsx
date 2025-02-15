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
import { setRam } from 'store/slices/filterSlice';

const MaritialStatus = () => {
  const { ram, loading } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const setValue = (value) => {
    dispatch(setRam(value));
  };

  return (
    <Box bg="white">
      <Accordion allowMultiple>
        <AccordionItem borderRadius={'10px'} border="1px solid #ebebeb">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontSize={'15px'} fontWeight={700}>
                বৈবাহিক অবস্থা
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <Divider />
          <AccordionPanel pb={4}>
            <RadioGroup value={ram} onChange={setValue} isDisabled={loading}>
              <Stack direction="column">
                <Radio size="sm" value="null" colorScheme={'brand'}>
                  সকল
                </Radio>
                <Radio size="sm" value="0-512" colorScheme={'brand'}>
                  অবিবাহিত
                </Radio>
                <Radio size="sm" value="513-4096" colorScheme={'brand'}>
                  বিবাহিত
                </Radio>
                <Radio size="sm" value="4097-8192" colorScheme={'brand'}>
                  ডিভোর্সড
                </Radio>
                <Radio size="sm" value="8193-65536" colorScheme={'brand'}>
                  বিধবা
                </Radio>
                <Radio size="sm" value="8193-652536" colorScheme={'brand'}>
                  বিপত্নীক
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default MaritialStatus;
