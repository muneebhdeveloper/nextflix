import { Box, Stack, StackDivider } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./Copyright";
import { LinkGrid } from "./LinkGrid";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { SubscribeForm } from "./SubscribeForm";

export default function Footer() {
  return (
    <Box bg="brand.black">
      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="8xl"
        py="12"
        px={{
          base: "4",
          md: "4",
        }}
      >
        <Stack spacing="10">
          <SocialMediaLinks />
          <Stack
            direction={{
              base: "column",
              lg: "row",
            }}
            spacing={{
              base: "10",
              lg: "28",
            }}
          >
            <LinkGrid
              spacing={{
                base: "10",
                md: "20",
                lg: "28",
              }}
              flex="1"
            />
          </Stack>
          <Stack
            direction={{
              base: "column-reverse",
              md: "row",
            }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Copyright />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
