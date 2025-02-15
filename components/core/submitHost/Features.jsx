import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Features = ({ nextStep, prevStep }) => {
  return (
    <div>
      <Center>
        <Text fontSize={'20px'} fontWeight={600} color="text.100" my={5}>
          Select your company features
        </Text>
      </Center>
      <FormControl>
        <FormLabel
          htmlFor="datacenter"
          color="text.100"
          fontWeight={700}
          fontSize={'14px'}>
          Data Centers (You can add more than one)
        </FormLabel>

        <Input id="datacenter" />
      </FormControl>
      <SimpleGrid columns={2} spacing={'4'} mt="4">
        <FormControl>
          <FormLabel
            htmlFor="datacenter"
            color="text.100"
            fontWeight={700}
            fontSize={'14px'}>
            Payment Type
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={'column'}>
              <Checkbox value="paypal">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Paypal
                </Text>
              </Checkbox>
              <Checkbox value="cc">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Credit Card
                </Text>
              </Checkbox>
              <Checkbox value="mb">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Monyebookers
                </Text>
              </Checkbox>
              <Checkbox value="wt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Wire Transfer
                </Text>
              </Checkbox>
              <Checkbox value="wm">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Web Money
                </Text>
              </Checkbox>
              <Checkbox value="bt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Bitcoin
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="datacenter"
            color="text.100"
            fontWeight={700}
            fontSize={'14px'}>
            CMS support
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={'column'}>
              <Checkbox value="paypal">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Wordpress
                </Text>
              </Checkbox>
              <Checkbox value="cc">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Joomla
                </Text>
              </Checkbox>
              <Checkbox value="mb">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Drupal
                </Text>
              </Checkbox>
              <Checkbox value="wt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Magento
                </Text>
              </Checkbox>
              <Checkbox value="wm">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Softcoulas
                </Text>
              </Checkbox>
              <Checkbox value="bt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  PrestaShop
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="datacenter"
            color="text.100"
            fontWeight={700}
            fontSize={'14px'}>
            Support Services
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={'column'}>
              <Checkbox value="paypal">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Live Chat
                </Text>
              </Checkbox>
              <Checkbox value="cc">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Phone Support
                </Text>
              </Checkbox>
              <Checkbox value="mb">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Email Support
                </Text>
              </Checkbox>
              <Checkbox value="wt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Forum Support
                </Text>
              </Checkbox>
              <Checkbox value="wm">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Video guides
                </Text>
              </Checkbox>
              <Checkbox value="bt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Knowledgebase
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="datacenter"
            color="text.100"
            fontWeight={700}
            fontSize={'14px'}>
            Language Support
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={'column'}>
              <Checkbox value="paypal">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  PHP
                </Text>
              </Checkbox>
              <Checkbox value="cc">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Java
                </Text>
              </Checkbox>
              <Checkbox value="mb">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Python
                </Text>
              </Checkbox>
              <Checkbox value="wt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Node.js
                </Text>
              </Checkbox>
              <Checkbox value="wm">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Django
                </Text>
              </Checkbox>
              <Checkbox value="bt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  ASP.NET
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="datacenter"
            color="text.100"
            fontWeight={700}
            fontSize={'14px'}>
            Database Support
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={'column'}>
              <Checkbox value="paypal">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  MongoDB
                </Text>
              </Checkbox>
              <Checkbox value="cc">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  MySQL
                </Text>
              </Checkbox>
              <Checkbox value="mb">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  PostgreSQL
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="datacenter"
            color="text.100"
            fontWeight={700}
            fontSize={'14px'}>
            Additional Categories
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={'column'}>
              <Checkbox value="paypal">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Email Hosting
                </Text>
              </Checkbox>
              <Checkbox value="cc">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Domain Hosting
                </Text>
              </Checkbox>
              <Checkbox value="mb">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Blog Hosting
                </Text>
              </Checkbox>
              <Checkbox value="wt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Adult Hosting
                </Text>
              </Checkbox>
              <Checkbox value="wm">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Managed VPS
                </Text>
              </Checkbox>
              <Checkbox value="bt">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Managed Wordpress
                </Text>
              </Checkbox>
              <Checkbox value="bta">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Small Business Hosting
                </Text>
              </Checkbox>
              <Checkbox value="bst">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Unlimited Hosting
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="datacenter"
            color="text.100"
            fontWeight={700}
            fontSize={'14px'}>
            Free domain
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={'column'}>
              <Checkbox value="paypal">
                <Text fontSize={'14px'} fontWeight={600} color="grey">
                  Yes
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
      </SimpleGrid>
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

export default Features;
