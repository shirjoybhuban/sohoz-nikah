import {
    Box,
    Heading,
    Radio,
    RadioGroup,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function FilterCard() {
    const [value, setValue] = useState("1");

    return (
        <Box
            bg="#FFFFFF"
            borderRadius="2xl"
            boxShadow="0 0 8px rgba(13,24,50,.08)"
        >
            <VStack spacing="4" align="stretch" p="4">
                <Heading as="h4" size="md" fontWeight="semibold">
                    FastComet Coupons & Deals 2022
                </Heading>
                <Text fontSize="sm">3 Coupons are available for FastComet</Text>
                <Text fontWeight="semibold">Show:</Text>
                <Box>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="column">
                            <Radio value="1">All</Radio>
                            <Radio value="2">Coupons</Radio>
                            <Radio value="3">Deals</Radio>
                            <Radio value="4">Exclusive Deals</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
            </VStack>
        </Box>
    );
}
