import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsFillPlayBtnFill } from 'react-icons/bs';

const WhatIslamSay = () => {
  return (
    <Container
      maxW={'4xl'}
      pt={{ base: '20px', md: '60px', lg: '60px' }}
      pb={{ base: '20px', md: '60px', lg: '90px' }}>
      <Center mb={'70px'}>
        <Text fontSize={'40px'} fontWeight={700} className="titleIslam">
          ইসলাম যা বলে
        </Text>
      </Center>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={5}
        fontFamily={'mukti'}>
        <GridItem
          colSpan={2}
          rowSpan={3}
          p={5}
          bg="bg.200"
          boxShadow="1px 1px 5px 2px rgba(0, 0, 0, 0.05)">
          <Text
            fontSize="18px"
            fontWeight="400"
            mb={8}
            color="black"
            lineHeight={1.7}>
            তাই তো অর্ধ ঈমান যাতে অবলীলায় এসে অবহেলায় বরবাদ না হয়ে যায় এবং এই
            লম্বা সফর যেন কষ্টকর তথা তার সাথী যেন কুজন ও কুসাথী না হয়, তার জন্য
            সফর শুরু করার পূর্বে, জীবন-সমুদ্রে তার দাম্পত্যের তরণী অবতারণ করার
            আগে আগে তাকে একটু ভেবে নিতে হয়, কিছু জেনে ও পড়ে নিতে হয়। নচেৎ আনাড়ী
            মাল্লা মাঝ সমুদ্রে ফাঁপরে পড়তে বাধ্য।
          </Text>
          <Text
            fontSize="18px"
            fontWeight="400"
            mb={8}
            color="black"
            lineHeight={1.7}>
            ‘‘মুমিন নারীদেরকে বল, তারা যেন নিজেদের দৃষ্টি সংযত করে ও লজ্জাস্থান
            হিফাযত করে এবং যা প্রকাশ পায় তা ছাড়া তাদের (অন্যান্য) আভরণ প্রদর্শন
            না করে, তাদের গ্রীবা ও বক্ষদেশ যেন মাথার কাপড় (উড়না অথবা চাদর)
            দ্বারা আবৃত করে।
          </Text>
          <Text
            fontSize="18px"
            fontWeight="400"
            mb={8}
            color="black"
            lineHeight={1.7}>
            ‘‘মুমিন নারীদেরকে বল, তারা যেন নিজেদের দৃষ্টি সংযত করে ও লজ্জাস্থান
            হিফাযত করে এবং যা প্রকাশ পায় তা ছাড়া তাদের (অন্যান্য) আভরণ প্রদর্শন
            না করে, তাদের গ্রীবা ও বক্ষদেশ যেন মাথার কাপড় (উড়না অথবা চাদর)
            দ্বারা আবৃত করে।
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          p={5}
          bg="#f5ffff"
          boxShadow="1px 1px 5px 2px rgba(0, 0, 0, 0.05)">
          <Text fontSize="18px" fontWeight="400" color="black" lineHeight={1.7}>
            বিবাহ ও দাম্পত্য মুসলিমদের এক শুভ ও সুখদ সন্ধিক্ষণ, আবার অশুভ ও
            যন্ত্রণাপ্রদ সময়কালও। এই শুভাশুভ নির্বাচন করায় তারও হাত আছে। যেমন
            বিবাহ করা অর্ধ ঈমান। দাম্পত্য-জীবন তার অর্ধেক ধর্মীয় জীবন। তাছাড়া
            দাম্পত্যের সফরও বড় লম্বা। যার সঙ্গীও চিরসঙ্গী।
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          p={5}
          bg="#fffaf4"
          boxShadow="1px 1px 5px 2px rgba(0, 0, 0, 0.05)">
          <Text fontSize="18px" fontWeight="400" color="black" lineHeight={1.7}>
            ‘‘মুমিন নারীদেরকে বল, তারা যেন নিজেদের দৃষ্টি সংযত করে ও লজ্জাস্থান
            হিফাযত করে এবং যা প্রকাশ পায় তা ছাড়া তাদের (অন্যান্য) আভরণ প্রদর্শন
            না করে, তাদের গ্রীবা ও বক্ষদেশ যেন মাথার কাপড় (উড়না অথবা চাদর)
            দ্বারা আবৃত করে।
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          p={5}
          bg="#f7f5ff"
          boxShadow="1px 1px 5px 2px rgba(0, 0, 0, 0.05)">
          <Text fontSize="18px" fontWeight="400" color="black" lineHeight={1.7}>
            ‘‘মুমিন নারীদেরকে বল, তারা যেন নিজেদের দৃষ্টি সংযত করে ও লজ্জাস্থান
            হিফাযত করে এবং যা প্রকাশ পায় তা ছাড়া তাদের (অন্যান্য) আভরণ প্রদর্শন
            না করে, তাদের গ্রীবা ও বক্ষদেশ যেন মাথার কাপড় (উড়না অথবা চাদর)
            দ্বারা আবৃত করে।
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default WhatIslamSay;
