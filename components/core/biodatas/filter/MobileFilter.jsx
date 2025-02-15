// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   Box,
// } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleModalFilter } from 'store/slices/filterSlice';
// import DiskSpaceFilter from './DiskSpaceFilter';
// import HostingFilter from './HostingFilter';
// import PriceFilter from './PriceFilter';
// import RamFilter from './RamFilter';

// const MobileFilter = ({ categories }) => {
//   const { filterModalOpen } = useSelector((state) => state.filter);
//   const dispatch = useDispatch();
//   const setModalFilter = () => {
//     dispatch(toggleModalFilter());
//   };
//   return (
//     <div>
//       <Modal isOpen={filterModalOpen} onClose={setModalFilter}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader fontSize={'16px'}>Filter Plans</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <HostingFilter categories={categories} />
//             <Box mt={2}>
//               <PriceFilter />
//             </Box>
//             <Box mt={2}>
//               <DiskSpaceFilter />
//             </Box>
//             <Box mt={2}>
//               <RamFilter />
//             </Box>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };

// export default MobileFilter;

import React from 'react';

const MobileFilter = () => {
  return <div>MobileFilter</div>;
};

export default MobileFilter;
