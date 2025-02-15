import { AddIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import PlanForm from './PlanForm';

const PlanSubmit = ({ nextStep, prevStep }) => {
  const [addMode, setAddMode] = useState(false);
  const toggleAddMode = () => {
    setAddMode(!addMode);
  };
  return (
    <div>
      <Center>
        <Text fontSize={'20px'} fontWeight={600} color="text.100" mt={5}>
          Please add all your hosting company plans
        </Text>
      </Center>
      <Center>
        <Text fontSize={'17px'} fontWeight={600} color="text.100" mb={5}>
          (You can add as many as you'd like)
        </Text>
      </Center>
      <Box my={5}>{addMode && <PlanForm />}</Box>
      <Box mb={5}>
        <Text fontSize={'22px'} fontWeight={700} color="text.100" mb={2}>
          Shared Hosting
        </Text>
        <Button
          size={'sm'}
          bg={'#dbefff'}
          border="2px solid #0289F2"
          fontSize={'14px'}
          fontWeight={'bold'}
          color={'#0289F2'}
          leftIcon={<AddIcon />}
          _hover={{
            border: '1px solid #0289F2',
            bg: '#0289F2',
            color: 'white',
          }}
          onClick={toggleAddMode}>
          Add Hosting Plan
        </Button>
      </Box>
      <Box mb={5}>
        <Text fontSize={'22px'} fontWeight={700} color="text.100" mb={2}>
          VPS Hosting
        </Text>
        <Button
          size={'sm'}
          bg={'#dbefff'}
          border="2px solid #0289F2"
          fontSize={'14px'}
          fontWeight={'bold'}
          color={'#0289F2'}
          leftIcon={<AddIcon />}
          _hover={{
            border: '1px solid #0289F2',
            bg: '#0289F2',
            color: 'white',
          }}
          onClick={toggleAddMode}>
          Add Hosting Plan
        </Button>
      </Box>
      <Box mb={5}>
        <Text fontSize={'22px'} fontWeight={700} color="text.100" mb={2}>
          Dedicated Servers
        </Text>
        <Button
          size={'sm'}
          bg={'#dbefff'}
          border="2px solid #0289F2"
          fontSize={'14px'}
          fontWeight={'bold'}
          color={'#0289F2'}
          leftIcon={<AddIcon />}
          _hover={{
            border: '1px solid #0289F2',
            bg: '#0289F2',
            color: 'white',
          }}
          onClick={toggleAddMode}>
          Add Hosting Plan
        </Button>
      </Box>
      <Box mt="10px">
        <Center>
          <Button
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
            onClick={nextStep}>
            Next
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default PlanSubmit;
