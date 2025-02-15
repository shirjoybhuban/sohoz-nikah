import { Icon } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ ratings }) => {
  const ratingsSplit = () => {
    const [integer, percent] = ratings.toFixed(2).split('.');
    return [Number(integer || 0), Number(percent || 0)];
  };

  const renderRatings = () => {
    const [nthChild, percent] = ratingsSplit();
    let output = [];
    if (percent != 0) {
      for (var star = 1; star <= 5; star++) {
        if (star <= nthChild) {
          output.push(
            <Icon
              key={star * 1.5}
              as={FaStar}
              width={{ sm: '.7rem', lg: '0.8rem' }}
              height={{ sm: '.7rem', lg: '0.8rem' }}
              color="#F26702"
            />
          );
        } else {
          output.push(
            <Icon
              key={star * 1.4}
              as={FaRegStar}
              width={{ sm: '.7rem', lg: '0.8rem' }}
              height={{ sm: '.7rem', lg: '0.8rem' }}
              color="#F26702"
            />
          );
        }
      }
      output.splice(
        nthChild,
        1,
        <Icon
          key={star * 1.1}
          as={FaStarHalfAlt}
          width={{ sm: '.7rem', lg: '0.8rem' }}
          height={{ sm: '.7rem', lg: '0.8rem' }}
          color="#F26702"
        />
      );
    } else {
      for (let star = 1; star <= 5; star++) {
        if (star <= nthChild) {
          output.push(
            <Icon
              mr={1}
              key={star * 1.2}
              as={FaStar}
              width={{ sm: '.7rem', lg: '0.8rem' }}
              height={{ sm: '.7rem', lg: '0.8rem' }}
              color="#F26702"
            />
          );
        } else {
          output.push(
            <Icon
              mr={1}
              key={star * 1.3}
              as={FaRegStar}
              width={{ sm: '.7rem', lg: '0.8rem' }}
              height={{ sm: '.7rem', lg: '0.8rem' }}
              color="#F26702"
            />
          );
        }
      }
    }
    return output;
  };

  return <>{renderRatings()}</>;
};

export default StarRating;
