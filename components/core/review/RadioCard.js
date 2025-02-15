const { Box, useRadio } = require("@chakra-ui/react");

export default function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="full"
                _checked={{
                    bg: "brand.300",
                    color: "white",
                    borderColor: "teal.600",
                }}
                _hover={{
                    borderColor: "brand.300",
                }}
                _focus={{
                    boxShadow: "none",
                }}
                px="3"
            >
                {props.children}
            </Box>
        </Box>
    );
}
