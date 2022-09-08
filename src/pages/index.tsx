import { useState } from "react";
import Head from "next/head";
import PostCard from "../components/PostCard";
import { trpc } from "../utils/trpc";

const Home = () => {
  const { data, isLoading } = trpc.useQuery(["getPosts"]);
  const [searchInput, setSearchInput] = useState("");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <Head>
        <title>D2-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center gap-4">
        <form className="w-full flex flex-col items-center justify-center m-2">
          <input
            className="w-9/12 h-10 rounded-md outline-none text-gray-600 p-4"
            type="text"
            placeholder="Search For Post..."
          />
        </form>
        {JSON.stringify(data)}
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </div>
  );
};

export default Home;
