import { Box, Heading, Text, Stack, Button, Icon } from "@chakra-ui/react";
import { BsPlayFill, BsStopwatchFill } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function HeroSection() {
  return (
    <Box
      minHeight="80vh"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImg="assets/img/MoviePoster.png"
    >
      <Stack maxW="8xl" margin="0px auto" height="80vh" justifyContent="center">
        <MotionBox
          variants={{
            initial: { opacity: 0, x: -1000 },
            show: { opacity: 1, x: 0 },
          }}
          initial="initial"
          animate="show"
          transition={{ delay: 0, default: { duration: 1 } }}
        >
          <Stack>
            <Heading
              fontWeight={600}
              color="brand.white"
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Watch your favourite shows <br />
              <Text as={"span"} color={"brand.red"}>
                at your space, your time
              </Text>
            </Heading>
            <Text
              paddingTop="15px"
              maxW="4xl"
              as={"span"}
              fontSize="xl"
              color={"brand.white"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
              porta est. Nulla facilisi. Mauris in diam sed turpis euismod
              iaculis. Mauris odio sem, convallis et massa id, mollis ornare
              nisl. Etiam in placerat diam, consectetur porttitor nisi. Donec
            </Text>
            <Stack paddingTop="30px" direction="row">
              <Button
                py={8}
                iconSpacing={5}
                size="lg"
                leftIcon={<Icon as={BsPlayFill} w={8} h={8} />}
              >
                Play Now
              </Button>
              <Button
                py={8}
                iconSpacing={5}
                colorScheme="whiteAlpha"
                size="lg"
                leftIcon={<Icon as={BsStopwatchFill} w={8} h={8} />}
              >
                Watch Later
              </Button>
            </Stack>
          </Stack>
        </MotionBox>
      </Stack>
    </Box>
  );
}
