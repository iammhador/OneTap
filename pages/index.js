import Head from "next/head";
import Banner from "../components/home/banner";
import About from "../components/home/about";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - One Tap </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <About />
    </>
  );
}
