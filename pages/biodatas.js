import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import axios from 'axios';
import { baseUrl } from 'components/const/api';
import { companies_filter_api } from 'components/const/endpoint';
import GenderFilter from 'components/core/biodatas/filter/GenderFilter';
import AgeFilter from 'components/core/biodatas/filter/AgeFilter';
import MaritialStatus from 'components/core/biodatas/filter/MaritialStatusFilter';
import PaginateResource from 'components/paginate/PaginateResource';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter, setHostingType, setLoad } from 'store/slices/filterSlice';
import useSWR from 'swr';
import useAsyncEffect from 'use-async-effect';
import StateFilter from 'components/core/biodatas/filter/StateFilter';
import BioNoFilter from 'components/core/biodatas/filter/BioNoFilter';
import BioDataCard from 'components/cards/BioDataCard';
//import { db } from 'lib/db';
// import { biodatas, users } from 'lib/db/schema';

const Biodatas = ({ biodatas }) => {
  const dispatch = useDispatch();
  const [biodataList, setBiodataList] = useState(biodatas);
  const [plans, setPlans] = useState([1, 2, 3, 4]);
  const [dataFilter, setDataFilter] = useState(null);
  const { loading, hostingType, price, gender, biodataNo } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    // fetchFilteredBiodatas({
    //   gender: 'male',
    //   permanentDistrict: 'Dhaka',
    //   marriedStatus: 'single',
    //   minAge: '25',
    //   maxAge: '30',
    // })
    //   .then((data) => setBiodataList(data.biodatas))
    //   .catch((error) => console.error(error));
    //dispatch(resetFilter());
  }, []);

  const setLoading = (val) => {
    dispatch(setLoad(val));
  };

  useAsyncEffect(
    async (isMounted) => {
      console.log('calling folter', typeof gender);
      await paginateBiosFilter();
    },
    [gender, biodataNo]
  );

  const paginateBiosFilter = (pageNumber = 1) => {
    // setLoading(true);
    // await axios
    //   .get(
    //     `${baseUrl}/${companies_filter_api}?page=${pageNumber}&hosting=${hostingType}&price=${price}&gender=${gender}&ram=${ram}`
    //   )
    //   .then((res) => {
    //     setPlans(res.data.data);
    //     setDataFilter(res.data);
    //     setLoading(false);
    //   })
    //   .catch((errors) => {
    //     console.error(errors);
    //     setLoading(false);
    //   });
    let finalFIlter = {
      gender,
      biodataNo,
      // permanentDistrict: 'Dhaka',
      // marriedStatus: 'single',
      // minAge: '25',
      // maxAge: '30',
    };

    fetchFilteredBiodatas(finalFIlter)
      .then((data) => {
        console.log('datata', data);
        setBiodataList(data.data);
      })
      .catch((error) => console.error(error));
  };

  function convertStringNullToActualNull(obj) {
    if (typeof obj === 'string' && obj === 'null') {
      return null;
    }

    if (Array.isArray(obj)) {
      return obj.map(convertStringNullToActualNull);
    }

    if (obj && typeof obj === 'object') {
      const updatedObj = {};
      for (const key in obj) {
        updatedObj[key] = convertStringNullToActualNull(obj[key]);
      }
      return updatedObj;
    }
    return obj;
  }

  const fetchFilteredBiodatas = async (filters) => {
    const filteredFilters = Object.fromEntries(
      Object.entries(filters).filter(
        ([_, value]) => value !== null && value !== 'null' && value !== ''
      )
    );

    console.log('Filtered Filters:', filteredFilters);

    // Build query string
    const queryString = new URLSearchParams(filteredFilters).toString();
    const response = await axios.get(`/api/biodata?${queryString}`);
    return response.data;
  };

  return (
    <Box>
      <Container
        maxW={{ base: '100%', lg: '5xl', xl: '6xl' }}
        py={{ base: '30px', md: '40px', lg: '40px' }}
      >
        <Grid templateColumns="repeat(7, 1fr)" gap={4}>
          <GridItem
            colSpan={2}
            display={{ base: 'none', md: 'none', lg: 'block' }}
          >
            <Box>
              <BioNoFilter />
            </Box>
            <Box mt={2}>
              <GenderFilter />
            </Box>
            <Box mt={2}>
              <AgeFilter />
            </Box>
            <Box mt={2}>
              <StateFilter />
            </Box>
            <Box mt={2}>
              <MaritialStatus />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 5, lg: 5 }}>
            <SimpleGrid columns={3} spacing={7}>
              {biodataList &&
                biodataList?.length > 0 &&
                biodataList.map((bio, index) => (
                  <Box>
                    <BioDataCard data={bio} key={bio.id} />
                  </Box>
                ))}
            </SimpleGrid>
            {dataFilter && dataFilter.data.length == 0 && (
              <Center>
                <Image
                  src={`/images/result/nothingFound.jpg`}
                  alt={'host logo'}
                  width={500}
                  height={500}
                />
              </Center>
            )}
            {/* {dataFilter && plans.length > 0 && (
            <PaginateResource data={dataFilter} getData={paginatePlansFilter} />
          )} */}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Biodatas;

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/biodata`
    );
    console.log('response', response.data);
    return {
      props: { biodatas: response.data.data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { users: [] },
    };
  }
}
