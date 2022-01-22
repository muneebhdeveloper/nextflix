import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
}
