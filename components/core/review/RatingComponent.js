import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

export default function RatingComponent({
    icon,
    title,
    name,
    rating,
    setRating,
}) {
    return (
        <Stack
            direction={{ sm: "column", md: "row" }}
            align={{ sm: "flex-start", md: "center" }}
            spacing="0"
        >
            <Box w="32">
                <HStack spacing="2">
                    {icon}
                    <Text fontSize="sm">{title}</Text>
                </HStack>
            </Box>
            <StarRatings
                rating={rating[name]}
                starRatedColor="#FFB721"
                starHoverColor="#FFB721"
                changeRating={(newRating) =>
                    setRating({ ...rating, [name]: newRating })
                }
                starSpacing="0"
                svgIconViewBox="0 0 100 50"
            />
        </Stack>
    );
}
