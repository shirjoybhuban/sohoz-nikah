import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useBreakpointValue } from '@chakra-ui/react';
import Pagination from 'react-js-pagination';

const PaginateResource = ({ data, getData }) => {
  const range = useBreakpointValue(
    {
      base: 1,
      md: 4,
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'base',
    }
  );
  return (
    <div>
      <Pagination
        pageRangeDisplayed={range}
        hideDisabled={false}
        activePage={data.meta.current_page}
        itemsCountPerPage={data.meta.per_page}
        totalItemsCount={data.meta.total}
        onChange={(pageNumber) => getData(pageNumber)}
        firstPageText={<ArrowLeftIcon boxSize={3} />}
        prevPageText={<ChevronLeftIcon />}
        nextPageText={<ChevronRightIcon />}
        lastPageText={<ArrowRightIcon boxSize={3} />}
      />
    </div>
  );
};
export default PaginateResource;
