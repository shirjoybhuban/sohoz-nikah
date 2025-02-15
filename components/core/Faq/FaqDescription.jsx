import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";

const FaqDescription = ({ title, description }) => {
    return (
        <AccordionItem border={"0px"}>
            {({ isExpanded }) => (
                <>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold">
                        <AccordionButton
                            px={0}
                            py={1}
                            _focus={{ outline: "none" }}
                            // _active={{ bg: }}
                        >
                            <Box mr={"10px"}>
                                {isExpanded ? (
                                    <ChevronDownIcon fontSize="30px" />
                                ) : (
                                    <ChevronRightIcon fontSize="30px" />
                                )}
                            </Box>
                            <Box flex="1" textAlign="left">
                                <Text
                                    fontSize={{
                                        base: "15px",
                                        md: "16px",
                                        lg: "17px",
                                    }}
                                    fontWeight={"700"}
                                    lineHeight={"31px"}
                                >
                                    {title}
                                </Text>
                            </Box>
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel ml={"35px"}>
                        <Text
                            fontSize={{ base: "14px", md: "14px", lg: "15px" }}
                            fontWeight={"400"}
                            lineHeight={"21px"}
                        >
                            {description}
                        </Text>
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
};

export default FaqDescription;
