import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import PrimaryInformation from 'components/core/submitHost/PrimaryInformation';
import { useFormData } from 'store/context/FormDataProvider';
import Address from './Address';
import FamilyInformation from './FamilyInformation';
import GeneralInformation from './GeneralInformation';
import MaritalInformation from './MaritalInformation';
import PersonalInformation from './PersonalInformation';
import ReligionInformation from './ReligionInformation';
import ManagementQuery from './ManagementQuery';
import EducationInformation from './EducationInformation';
import BridalInformation from './BridalInformation';

const BioDataForm = () => {
  const { tabIndex, setTabIndex } = useFormData();
  return (
    <div>
      <Tabs variant="soft-rounded" size="sm" index={tabIndex}>
        <TabList mb="1em">
          <Tab>প্রাথমিক তথ্য</Tab>
          <Tab>পরিচিতি ও সাধারণ তথ্য</Tab>
          <Tab>ব্যক্তিগত তথ্য</Tab>
          <Tab>যেমন জীবনসঙ্গী</Tab>
          <Tab>ঠিকানা</Tab>
          <Tab>শিক্ষা ও পেশা</Tab>
          <Tab>পারিবারিক তথ্য</Tab>
          <Tab>ধর্মীয় লাইফস্টাইল</Tab>
          <Tab>বিয়ে সংক্রান্ত তথ্য</Tab>
          <Tab>কর্তৃপক্ষের জিজ্ঞাসা</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <PrimaryInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <GeneralInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <PersonalInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <BridalInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <Address />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <EducationInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <FamilyInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <ReligionInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <MaritalInformation />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW={{ base: '100%', lg: '3xl', xl: '2xl' }}>
              <ManagementQuery />
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default BioDataForm;
