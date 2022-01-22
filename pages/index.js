import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Slider />
    </Layout>
  );
}
