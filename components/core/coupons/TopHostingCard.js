import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import StarRatings from "components/StarRatings";

export default function TopHostingCard() {
    return (
        <Box
            bg="#FFFFFF"
            borderRadius="2xl"
            boxShadow="0 0 8px rgba(13,24,50,.08)"
        >
            <VStack spacing="4" align="stretch" p="4">
                <Heading as="h4" size="md" fontWeight="semibold">
                    Currently Top 3 Hosting Companies
                </Heading>
                <VStack spacing="4" align="stretch">
                    {[1, 2, 3].map((item) => (
                        <Box
                            border="1px solid"
                            borderColor="gray.200"
                            p="1"
                            borderRadius="xl"
                            _hover={{ borderColor: "brand.300" }}
                        >
                            <VStack spacing="4" align="stretch">
                                <Stack
                                    direction={["column", "row"]}
                                    justifyContent="space-between"
                                >
                                    <Image
                                        w="100px"
                                        objectFit="contain"
                                        src="/image/temp/fastcomet.png"
                                        alt="Fast Comet"
                                    />
                                    <Stack
                                        direction={["column", "row"]}
                                        spacing="1"
                                        align="center"
                                    >
                                        <Text
                                            fontSize="4xl"
                                            fontWeight="semibold"
                                        >
                                            5.0
                                        </Text>
                                        <VStack spacing="0" align="stretch">
                                            <Box>
                                                <StarRatings ratings={5} />
                                            </Box>
                                            <Text
                                                fontSize="xs"
                                                color="gray.500"
                                            >
                                                1343 reviews
                                            </Text>
                                        </VStack>
                                    </Stack>
                                </Stack>
                            </VStack>
                        </Box>
                    ))}
                </VStack>
            </VStack>
        </Box>
    );
}
