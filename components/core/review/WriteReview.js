import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    HStack,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    SimpleGrid,
    Text,
    Textarea,
    useRadioGroup,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import RadioCard from "./RadioCard";
import {
    FaRegUser,
    FaRegLightbulb,
    FaRocket,
    FaHeartbeat,
    FaRegMoneyBillAlt,
} from "react-icons/fa";
import RatingComponent from "./RatingComponent";

export default function WriteReview({ isOpen, onClose, overlay }) {
    const initialRating = {
        userFriendly: 0,
        support: 0,
        features: 0,
        reliability: 0,
        pricing: 0,
    };

    const options = [
        "Shared",
        "Startup",
        "Drive",
        "Turbo Boost",
        "Turbo Max",
        "Resellers",
        "Kickstart",
        "Launch",
        "Grow",
        "Turbo Kickstart",
        "Turbo launch",
        "Cloud",
        "Runway 1",
        "Runway 2",
        "Runway 3",
    ];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "Shared",
        onChange: console.log,
    });

    const group = getRootProps();

    const [rating, setRating] = useState(initialRating);

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
            {overlay}
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Box pb="8">
                        <SimpleGrid
                            columns={{ sm: 2, md: 3 }}
                            spacing="10"
                            alignItems="center"
                            mb="4"
                        >
                            <GridItem colSpan={2}>
                                <Text fontSize="3xl" fontWeight="semibold">
                                    Share Your Review About Hosting Company
                                </Text>
                            </GridItem>
                            <Image
                                src="image/temp/fox-with-laptop.webp"
                                alt="Fox with laptop"
                                display={{ sm: "none", md: "block" }}
                            />
                        </SimpleGrid>

                        <VStack spacing="6" align="stretch">
                            <FormControl isRequired>
                                <FormLabel fontSize="xs" fontWeight="semibold">
                                    Company name
                                </FormLabel>
                                <Input type="text" placeholder="Company name" />
                                {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                            </FormControl>

                            <Box>
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    mb="2"
                                >
                                    Which service did you use with this hosting
                                    service?
                                    <Text as="sup" color="red">
                                        {" "}
                                        *
                                    </Text>
                                </Text>
                                <Flex
                                    flexWrap="wrap"
                                    alignItems="center"
                                    gap="2"
                                    {...group}
                                >
                                    {options.map((value) => {
                                        const radio = getRadioProps({ value });
                                        return (
                                            <RadioCard key={value} {...radio}>
                                                {value}
                                            </RadioCard>
                                        );
                                    })}
                                </Flex>
                            </Box>

                            <Box>
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    mb="2"
                                >
                                    Your Scores (click on the stars)
                                    <Text as="sup" color="red">
                                        {" "}
                                        *
                                    </Text>
                                </Text>
                                <Box
                                    bg="gray.100"
                                    border="1px solid #E2E8F0"
                                    borderRadius="md"
                                    p="4"
                                >
                                    <Grid
                                        templateColumns={{
                                            sm: "repeat(2, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        }}
                                        gap="6"
                                        alignItems="center"
                                    >
                                        <GridItem colSpan="2">
                                            <VStack
                                                spacing={{ sm: 2, md: 0 }}
                                                align="stretch"
                                            >
                                                <RatingComponent
                                                    icon={<FaRegUser />}
                                                    title="User Friendly"
                                                    name="userFriendly"
                                                    rating={rating}
                                                    setRating={setRating}
                                                />
                                                <RatingComponent
                                                    icon={<FaRegLightbulb />}
                                                    title="Support"
                                                    name="support"
                                                    rating={rating}
                                                    setRating={setRating}
                                                />
                                                <RatingComponent
                                                    icon={<FaRocket />}
                                                    title="Features"
                                                    name="features"
                                                    rating={rating}
                                                    setRating={setRating}
                                                />
                                                <RatingComponent
                                                    icon={<FaHeartbeat />}
                                                    title="Reliability"
                                                    name="reliability"
                                                    rating={rating}
                                                    setRating={setRating}
                                                />
                                                <RatingComponent
                                                    icon={<FaRegMoneyBillAlt />}
                                                    title="Pricing"
                                                    name="pricing"
                                                    rating={rating}
                                                    setRating={setRating}
                                                />
                                            </VStack>
                                        </GridItem>
                                        <GridItem
                                            display={{
                                                sm: "none",
                                                md: "block",
                                            }}
                                        >
                                            <VStack spacing="0" align="stretch">
                                                <HStack spacing="24px">
                                                    <Text
                                                        fontSize="4xl"
                                                        fontWeight="semibold"
                                                    >
                                                        5.0
                                                    </Text>
                                                    <Text
                                                        bg="green.500"
                                                        color="#ffffff"
                                                        fontWeight="semibold"
                                                        px="3"
                                                        borderRadius="full"
                                                    >
                                                        SUPERB!
                                                    </Text>
                                                </HStack>
                                                <Box>
                                                    <Text fontSize="sm">
                                                        Hosting overall rating
                                                    </Text>
                                                </Box>
                                            </VStack>
                                        </GridItem>
                                    </Grid>
                                </Box>
                            </Box>

                            <FormControl isRequired>
                                <FormLabel fontSize="xs" fontWeight="semibold">
                                    Title (Minimum 2 words)
                                </FormLabel>
                                <Input
                                    type="text"
                                    placeholder="A few words about hosting or service"
                                />
                                {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontSize="xs" fontWeight="semibold">
                                    Summary
                                </FormLabel>
                                <Textarea placeholder="Here is a sample placeholder" />
                                {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                            </FormControl>

                            <Box
                                border="1px solid #E2E8F0"
                                borderRadius="md"
                                p="4"
                            >
                                <Text fontSize="lg" fontWeight="bold">
                                    Personal Info
                                </Text>
                                <Text fontSize="sm" color="gray.600">
                                    We request this information as we strive to
                                    provide only truthful information and to
                                    verify that the review was written by a real
                                    person.
                                </Text>
                                <VStack spacing="6" align="stretch" mt="6">
                                    <FormControl isRequired>
                                        <FormLabel
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            Full Name
                                        </FormLabel>
                                        <Input type="text" />
                                        {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            Email
                                        </FormLabel>
                                        <Input type="email" />
                                        {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            Link to ONE of your social profiles
                                            (Optional)
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Add a link from your name to your personal Facebook / Google+ / Twitter / Linked In (Only one of them)"
                                        />
                                        {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                                    </FormControl>
                                </VStack>
                            </Box>
                            <Box
                                border="1px solid #E2E8F0"
                                borderRadius="md"
                                p="4"
                            >
                                <Text fontSize="lg" fontWeight="bold">
                                    Optional
                                </Text>
                                <VStack spacing="6" align="stretch" mt="6">
                                    <FormControl>
                                        <FormLabel
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            The site I host with this hosting
                                            service
                                        </FormLabel>
                                        <Input type="text" />
                                        {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            Previous Hosting (Optional)
                                        </FormLabel>
                                        <Input type="text" />
                                        {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            Link to ONE of your social profiles
                                            (Optional)
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Add a link from your name to your personal Facebook / Google+ / Twitter / Linked In (Only one of them)"
                                        />
                                        {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            Upload screenshots
                                        </FormLabel>
                                        <Input type="file" />
                                        {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                                    </FormControl>
                                </VStack>
                            </Box>
                            <Button colorScheme="blue" borderRadius="full">
                                Submit Review
                            </Button>
                        </VStack>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
