import { useState } from "react";
import Head from "next/head";
import PostCard from "../components/PostCard";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="w-full">
      <Head>
        <title>D2-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center gap-8">
        <form className="w-full flex flex-col items-center justify-center">
          <input
            className="w-9/12 h-10 rounded-md outline-none text-gray-600 p-4"
            type="text"
            placeholder="Search For Post..."
          />
        </form>
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </div>
  );
};

export default Home;
