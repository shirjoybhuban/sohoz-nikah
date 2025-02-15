import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import SidebarLayout from "components/layout/SidebarLayout";

const AboutUs = () => {
    return (
        <SidebarLayout>
            <Container
                maxW={"100%"}
                bg="white"
                p={{ base: "10px", md: "20px", lg: "30px" }}
                rounded={"xl"}
                border={"1px solid #ebebeb"}
            >
                <Text fontSize={"35px"} color="black" fontWeight={700} mb="4">
                    Contact Us
                </Text>

                <Text>
                    This is the fastest and easiest way to reach us. Leave your
                    name, email and
                    comment/question/request/suggestion/complaint/death-threat
                    after the beep. We can’t promise we’ll add that fancy
                    feature or change our design the way you want it, but we
                    zealously read every message we get and we always write
                    back. Please don’t be shy – your feedback is crucially
                    important to us.
                </Text>
            </Container>
            <Container
                maxW={"100%"}
                bg="white"
                p={{ base: "10px", md: "20px", lg: "30px" }}
                rounded={"xl"}
                border={"1px solid #ebebeb"}
                mt="6"
            >
                <VStack spacing="4" align="stretch">
                    <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="semibold">
                            Your Name
                        </FormLabel>
                        <Input type="text" />
                        {/* <FormHelperText>
                            We'll never share your email.
                        </FormHelperText> */}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="semibold">
                            Your Email
                        </FormLabel>
                        <Input type="email" />
                        {/* <FormHelperText>
                            We'll never share your email.
                        </FormHelperText> */}
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize="xs" fontWeight="semibold">
                            Subject
                        </FormLabel>
                        <Input type="text" />
                        {/* <FormHelperText>
                            We'll never share your email.
                        </FormHelperText> */}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="semibold">
                            Your Message
                        </FormLabel>
                        <Textarea />
                        {/* <FormHelperText>
                            We'll never share your email.
                        </FormHelperText> */}
                    </FormControl>

                    <Button colorScheme="blue">Send</Button>
                </VStack>
            </Container>
        </SidebarLayout>
    );
};

export default AboutUs;
