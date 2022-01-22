import { Box, Link, SimpleGrid, Stack, Button } from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";

const linkProps = {
  color: "brand.gray",
};

export const LinkGrid = (props) => (
  <SimpleGrid columns={{ md: 4, sm: 2 }} {...props}>
    <Box minW="130px">
      <Stack>
        <Link {...linkProps}>How it works</Link>
        <Link {...linkProps}>Pricing</Link>
        <Link {...linkProps}>Use Cases</Link>
      </Stack>
      <Button
        variant="outline"
        color="brand.gray"
        borderRadius={0}
        borderColor="brand.gray"
        marginTop="30px"
      >
        Subscribe Now
      </Button>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link {...linkProps}>Privacy</Link>
        <Link {...linkProps}>Terms</Link>
        <Link {...linkProps}>License</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link {...linkProps}>Privacy</Link>
        <Link {...linkProps}>Terms</Link>
        <Link {...linkProps}>License</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link {...linkProps}>Privacy</Link>
        <Link {...linkProps}>Terms</Link>
        <Link {...linkProps}>License</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
