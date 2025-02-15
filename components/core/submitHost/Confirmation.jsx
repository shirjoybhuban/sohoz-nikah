import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Text,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Center,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Confirmation = () => {
  return (
    <Box>
      {/* <Text as="i" fontSize="sm" color="red.500" fontWeight="semibold">
        Please check the information below carefully and use the back-button if
        you want to edit anything
      </Text>
      <Text mt="2" fontSize="sm">
        <Text as="sup" color="red.500" fontWeight="semibold">
          *
        </Text>{' '}
        Please check the information below carefully and use the back-button if
        you want to edit anything Please check the information below carefully
        and use the back-button if you want to edit anything
      </Text> */}

      <Box mt="4">
        <Center>
          <Text fontSize={'20px'} fontWeight={600} color="text.100" my={5}>
            Company Details
          </Text>
        </Center>
        <TableContainer>
          <Table variant="simple" size="sm">
            <Tbody>
              <Tr>
                <Th>Company Name</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Official Website URL</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Company Logo</Th>
                <Td>
                  <Image
                    w="150px"
                    objectFit="container"
                    src="image/temp/fastcomet.png"
                  />
                </Td>
              </Tr>
              <Tr>
                <Th>Company Email</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Contact Person Email</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Company Address</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Company Phone Number</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Minimum starting price (In USD)</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Money Back Guarantee Days</Th>
                <Td>Please write</Td>
              </Tr>
              <Tr>
                <Th>
                  Please write your hosting strong proposition in a few words
                  (six-ten words per bullet)
                </Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th></Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th></Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Money Back Guarantee Days</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Company Offers
        </Text>

        <TableContainer>
          <Table variant="simple" size="sm">
            <Tbody>
              <Tr>
                <Th>Data Center</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Payment type</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>CMS support</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Support Services</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>language Support</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Database Support</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Additional Categories</Th>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Th>Free domain</Th>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
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
            }}>
            Submit
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Confirmation;
