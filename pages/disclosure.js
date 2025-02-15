import { Container, Text } from "@chakra-ui/react";
import SidebarLayout from "components/layout/SidebarLayout";

const Disclosure = () => {
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
                    Disclosure
                </Text>

                <Text>
                    Every service that we recommend here @ Host Advice has been
                    thoroughly researched and personally tried out by out team.
                    It’s our pledge to offer the most credible, accountable and
                    reliable information to you. Your experience, as-well as
                    your trust in us, is extremely important to us and we will
                    never compromise that. This is how we make our living: we
                    participate in affiliate programs as a part of our funding.
                    In other words, when you click on links to the services’
                    sites and make a purchase, it may result in a commission
                    that is credited to Host Advice. This is how we are able to
                    finance this website, keep it running at full capacity and
                    continually provide you with the most reliable, relevant,
                    thorough and up-to-date reviews information about dozens of
                    web-hosting services around the world. However, quality &
                    accuracy comes first. This is something that we will never
                    jeopardize – if we ever did, we might as-well find ourselves
                    another job. Please feel free to contact us any time. It is
                    our top mission to provide you with accurate, reliable
                    information and full answers to any questions you might
                    have.
                </Text>
            </Container>
        </SidebarLayout>
    );
};

export default Disclosure;
