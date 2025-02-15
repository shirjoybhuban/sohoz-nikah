import { Container, Text } from "@chakra-ui/react";
import SidebarLayout from "components/layout/SidebarLayout";

const PrivacyPolicy = () => {
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
                    Privacy Policy
                </Text>

                <Text>
                    You may choose to visit our site anonymously; however, when
                    you register on our site, place an order, subscribe to our
                    newsletter, respond to a survey, or fill out a form, we
                    collect pertinent information. You may be asked to enter
                    your name, e-mail address, mailing address, phone number, or
                    credit card information depending on how you are using the
                    site. As a third party vendor Google uses cookies to serve
                    ads on your site. Google’s use of the DART cookie enables it
                    to serve ads to your users based on their visit to your
                    sites and other sites on the Internet. Users may opt out of
                    the use of the DART cookie by visiting the Google ad and
                    content network privacy policy.
                </Text>
                <Text>
                    You may choose to visit our site anonymously; however, when
                    you register on our site, place an order, subscribe to our
                    newsletter, respond to a survey, or fill out a form, we
                    collect pertinent information. You may be asked to enter
                    your name, e-mail address, mailing address, phone number, or
                    credit card information depending on how you are using the
                    site. As a third party vendor Google uses cookies to serve
                    ads on your site. Google’s use of the DART cookie enables it
                    to serve ads to your users based on their visit to your
                    sites and other sites on the Internet. Users may opt out of
                    the use of the DART cookie by visiting the Google ad and
                    content network privacy policy.
                </Text>
                <Text>
                    You may choose to visit our site anonymously; however, when
                    you register on our site, place an order, subscribe to our
                    newsletter, respond to a survey, or fill out a form, we
                    collect pertinent information. You may be asked to enter
                    your name, e-mail address, mailing address, phone number, or
                    credit card information depending on how you are using the
                    site. As a third party vendor Google uses cookies to serve
                    ads on your site. Google’s use of the DART cookie enables it
                    to serve ads to your users based on their visit to your
                    sites and other sites on the Internet. Users may opt out of
                    the use of the DART cookie by visiting the Google ad and
                    content network privacy policy.
                </Text>
            </Container>
        </SidebarLayout>
    );
};

export default PrivacyPolicy;
