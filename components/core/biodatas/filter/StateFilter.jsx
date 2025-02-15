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
import { setHostingType } from 'store/slices/filterSlice';

const StateFilter = ({ categories }) => {
  const { hostingType, loading } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const setType = (value) => {
    dispatch(setHostingType(value));
  };
  return (
    <Box bg="white">
      <Accordion allowMultiple>
        <AccordionItem borderRadius={'10px'} border="1px solid #ebebeb">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontSize={'15px'} fontWeight={700}>
                জেলা
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <Divider />
          <AccordionPanel pb={4} pl={3} pr={0}>
            <RadioGroup
              onChange={setType}
              isDisabled={loading}
              value={hostingType}>
              <Stack
                pl={2}
                direction="column"
                maxHeight="300px"
                overflowY="scroll"
                className="hostingTypeFilterScroll">
                <Radio size="sm" value="null" colorScheme={'brand'}>
                  সকল জেলা
                </Radio>
                <Radio size="sm" value="ndull" colorScheme={'brand'}>
                  কুমিল্লা
                </Radio>
                <Radio size="sm" value="nuall" colorScheme={'brand'}>
                  কক্সবাজার
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default StateFilter;
