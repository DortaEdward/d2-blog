import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import parse from "html-react-parser";

const Home: NextPage = () => {
  const test =
    "<div><h1 className='font-bold'>This is testing rendering html from a string</h1><p>This is paragraph</p></div>";

  return (
    <div>
      <Head>
        <title>D2-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Blog Main</h2>
        <blockquote>This is block quote</blockquote>
        {parse(test)}
      </main>
    </div>
  );
};

export default Home;
