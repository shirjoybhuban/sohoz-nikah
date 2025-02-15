import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Divider,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from 'store/slices/filterSlice';

const AgeFilter = () => {
  const [sliderValue, setSliderValue] = useState([20, 50]);
  const { loading } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const setValue = (value) => {
    dispatch(setPrice(value));
  };
  return (
    <Box bg="white">
      <Accordion allowMultiple>
        <AccordionItem borderRadius={'10px'} border="1px solid #ebebeb">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontSize={'15px'} fontWeight={700}>
                বয়স
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <Divider />
          <AccordionPanel mr={3}>
            <RangeSlider
              colorScheme={'brand'}
              isDisabled={loading}
              aria-label={['min', 'max']}
              defaultValue={sliderValue}
              min={20}
              max={50}
              onChangeEnd={(val) => {
                setSliderValue(val);
                setValue(val);
              }}>
              <RangeSliderTrack height={'8px'}>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb
                index={0}
                height={'20px'}
                width={'20px'}
                bg={'brand.200'}
              />
              <RangeSliderThumb
                index={1}
                height={'20px'}
                width={'20px'}
                bg={'brand.200'}
              />
            </RangeSlider>
            <Flex justify={'space-between'} mt={3}>
              <Text fontSize={'13px'} fontWeight={600}>
                {sliderValue[0]}
              </Text>
              <Text fontSize={'13px'} fontWeight={600} mr={-3}>
                {sliderValue[1]}
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AgeFilter;
