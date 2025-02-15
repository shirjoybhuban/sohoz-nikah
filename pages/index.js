import { Box } from '@chakra-ui/react';
import Features from 'components/core/home/Features';
import Hero from 'components/core/home/Hero';
import Tutorials from 'components/core/home/Tutorials';
import WhatIslamSay from 'components/core/home/WhatIslamSay';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <Box>
      <Box
        bg={
          'radial-gradient(circle, rgba(254,204,219,1) 0%, rgba(245,148,173,1) 52%, rgba(244,126,153,1) 100%)'
        }>
        <Hero />
      </Box>
      <Box>
        <Features />
      </Box>
      <Box bg={'bg.100'}>
        <Tutorials />
      </Box>
      <Box>
        <WhatIslamSay />
      </Box>
    </Box>
  );
}
