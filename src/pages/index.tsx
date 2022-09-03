import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import parse from "html-react-parser";

const Home: NextPage = () => {
  const [inputState, setInputState] = useState("");

  return (
    <div>
      <Head>
        <title>D2-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className="">Blog Main</h2>
        <input
          className="outline"
          type="text"
          onChange={(e) => {
            setInputState(e.target.value);
          }}
        />
        <blockquote>This is block quote</blockquote>
        {parse(inputState)}
      </main>
    </div>
  );
};

export default Home;
