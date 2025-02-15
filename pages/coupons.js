import { Box, Grid, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import CouponsCard from "components/core/coupons/CouponsCard";
import FilterCard from "components/core/coupons/FilterCard";
import TopHostingCard from "components/core/coupons/TopHostingCard";
import React from "react";

export default function coupons() {
    return (
        <Box bg="#F2F3F7" p="8">
            <Grid
                templateColumns={{
                    sm: "repeat(1, 1fr)",
                    lg: "repeat(5, 1fr)",
                    xl: "repeat(5, 1fr)",
                    // "2xl": "repeat(5, 1fr)",
                }}
                gap={8}
            >
                <GridItem colSpan={{ sm: 1, lg: 1, xl: 1 }}>
                    <FilterCard />
                </GridItem>
                <GridItem colSpan={{ sm: 1, lg: 3, xl: 3 }}>
                    <VStack spacing="8" align="stretch">
                        <CouponsCard />
                        <CouponsCard />
                        <CouponsCard />
                    </VStack>
                </GridItem>
                <GridItem
                    colSpan={{ lg: 1 }}
                    display={{ base: "none", lg: "block" }}
                >
                    <TopHostingCard />
                </GridItem>
            </Grid>
        </Box>
    );
}
