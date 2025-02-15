import { Search2Icon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setBiodataNo } from 'store/slices/filterSlice';

const BioNoFilter = () => {
  const dispatch = useDispatch();
  const bioText = useRef(null);
  const onSearch = () => {
    dispatch(setBiodataNo(bioText.current.value));
  };
  return (
    <Box bg="white">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem borderRadius={'10px'} border="1px solid #ebebeb">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontSize={'15px'} fontWeight={700}>
                বায়োডাটা নং
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <Divider />
          <AccordionPanel>
            <InputGroup size="md">
              <Input variant="filled" placeholder="বায়োডাটা নং" ref={bioText} />
              <InputRightElement width="2.5rem">
                <Button
                  onClick={onSearch}
                  h="1.75rem"
                  size="xs"
                  variant={'solid'}
                  colorScheme="brand"
                >
                  <Search2Icon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default BioNoFilter;
