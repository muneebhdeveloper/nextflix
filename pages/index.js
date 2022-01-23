import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Box px={20}>
        <Slider />
      </Box>
    </Layout>
  );
}
