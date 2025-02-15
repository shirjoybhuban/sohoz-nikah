import { CheckCircleIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
    FaRegThumbsUp,
    FaRegThumbsDown,
    FaQrcode,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";

export default function CouponsCard() {
    const [toggle, setToggle] = useState(false);
    const [hasCode, setHasCode] = useState(false);

    const router = useRouter();

    function showCode(code) {
        navigator.clipboard.writeText(code);
        setHasCode(true);

        setTimeout(function () {
            window.open("https://www.google.com/", "_blank");
        }, 3000);
    }

    return (
        <Box>
            <Stack direction={{ sm: "column", md: "row" }} spacing="0">
                <Box w="full" bg="#FFFFFF" borderRadius="2xl" p="4" pb="8">
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        spacing="4"
                        justifyContent="space-between"
                        align={{ base: "flex-start", lg: "center" }}
                    >
                        <Box>
                            <VStack spacing="6" align="stretch">
                                <Image
                                    w="150px"
                                    objectFit="contain"
                                    src="/image/temp/fastcomet.png"
                                    alt="Fast Comet"
                                />
                                <Box>
                                    <VStack spacing="4" align="stretch">
                                        <Heading
                                            as="h3"
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                        >
                                            75% OFF On All Of FastComet Services{" "}
                                            <Text
                                                display="inline"
                                                fontSize="sm"
                                                color="green.600"
                                            >
                                                <Icon as={CheckCircleIcon} />{" "}
                                                Exclusive Deal
                                            </Text>
                                        </Heading>
                                        <Text fontSize="xs">
                                            Last tried 7 Hours and 54 Mins ago,{" "}
                                            <Text
                                                display="inline"
                                                fontSize="sm"
                                                fontWeight="normal"
                                                color="red.500"
                                                textTransform="uppercase"
                                            >
                                                EXPIRES 3/14/23
                                            </Text>
                                        </Text>
                                    </VStack>
                                </Box>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack spacing="4" align="stretch">
                                <Text fontSize="sm">Did it work?</Text>
                                <Box align="center">
                                    <HStack spacing="2">
                                        <VStack spacing="1" align="stretch">
                                            <Button
                                                colorScheme="green"
                                                variant="outline"
                                                size="sm"
                                            >
                                                <FaRegThumbsUp />
                                            </Button>
                                            <Text
                                                fontSize="xs"
                                                fontWeight="medium"
                                                color="gray.600"
                                            >
                                                241
                                            </Text>
                                        </VStack>
                                        <VStack spacing="1" align="stretch">
                                            <Button
                                                colorScheme="red"
                                                variant="outline"
                                                size="sm"
                                            >
                                                <FaRegThumbsDown />
                                            </Button>
                                            <Text
                                                fontSize="xs"
                                                fontWeight="medium"
                                                color="gray.600"
                                            >
                                                188
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </Box>
                            </VStack>
                        </Box>
                    </Stack>

                    {toggle && (
                        <Box py="6">
                            <Text>
                                Year-end Savings: 15% OFF all new Cloud VPS
                                Plans plus Free Website Transfer. 20% OFF all
                                new Dedicated Servers & Multiple Locations
                            </Text>
                        </Box>
                    )}
                </Box>
                <Box
                    w={{ lg: 52, xl: 96 }}
                    bg="#FFFFFF"
                    borderRadius="2xl"
                    p="4"
                >
                    <Stack direction="column" spacing="4" align="center">
                        <Text
                            textTransform="uppercase"
                            fontSize="xs"
                            fontWeight="bold"
                            color="green.600"
                        >
                            75% off
                        </Text>

                        {!hasCode ? (
                            <Button
                                leftIcon={<FaQrcode />}
                                colorScheme="blue"
                                borderRadius="full"
                                px="6"
                                disabled={hasCode}
                                onClick={() => showCode("HAHOT75")}
                            >
                                Show Code
                            </Button>
                        ) : (
                            <Button
                                colorScheme="blue"
                                borderRadius="full"
                                px="6"
                                disabled={hasCode}
                            >
                                HAHOT75
                            </Button>
                        )}
                        {hasCode && (
                            <Text
                                fontSize="xs"
                                color="green.600"
                                textAlign="center"
                            >
                                <CheckCircleIcon /> Copied
                            </Text>
                        )}

                        <Text fontSize="xs" color="gray.600" textAlign="center">
                            2786 users used this coupon
                        </Text>
                    </Stack>
                </Box>
            </Stack>

            <Button
                className="couponToggleButton"
                boxSize="12"
                bg="gray.100"
                boxShadow="md"
                borderRadius="full"
                mt="-6"
                ml={{ base: 4, md: 10 }}
                onClick={() => setToggle(!toggle)}
            >
                {toggle ? <FaChevronUp /> : <FaChevronDown />}
            </Button>
        </Box>
    );
}
