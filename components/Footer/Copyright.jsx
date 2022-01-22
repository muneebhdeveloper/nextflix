import { Text } from "@chakra-ui/react";
import * as React from "react";

export const Copyright = (props) => (
  <Text color="brand.gray" fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
  </Text>
);
