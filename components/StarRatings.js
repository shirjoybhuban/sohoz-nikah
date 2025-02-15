import { Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRatings = ({ ratings }) => {
    const ratingsSplit = () => {
        const [integer, percent] = ratings.toFixed(2).split(".");
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
                            width={{ sm: ".8rem", lg: "1rem" }}
                            height={{ sm: ".8rem", lg: "1rem" }}
                            color="#E8D101"
                        />
                    );
                } else {
                    output.push(
                        <Icon
                            key={star * 1.4}
                            as={FaRegStar}
                            width={{ sm: ".8rem", lg: "1rem" }}
                            height={{ sm: ".8rem", lg: "1rem" }}
                            color="#E8D101"
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
                    width={{ sm: ".8rem", lg: "1rem" }}
                    height={{ sm: ".8rem", lg: "1rem" }}
                    color="#E8D101"
                />
            );
        } else {
            for (let star = 1; star <= 5; star++) {
                if (star <= nthChild) {
                    output.push(
                        <Icon
                            key={star * 1.2}
                            mr={0}
                            as={FaStar}
                            width={{ sm: ".8rem", lg: "1rem" }}
                            height={{ sm: ".8rem", lg: "1rem" }}
                            color="#E8D101"
                        />
                    );
                } else {
                    output.push(
                        <Icon
                            key={star * 1.3}
                            mr={0}
                            as={FaRegStar}
                            width={{ sm: ".8rem", lg: "1rem" }}
                            height={{ sm: ".8rem", lg: "1rem" }}
                            color="#E8D101"
                        />
                    );
                }
            }
        }
        return output;
    };

    return <>{renderRatings()}</>;
};

export default StarRatings;
