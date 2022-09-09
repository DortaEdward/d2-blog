import { useState } from "react";
import Head from "next/head";
import PostCardContainer from "@/components/PostCardContainer";
import PostCard from "../components/PostCard";
import { trpc } from "../utils/trpc";

import Image from "next/image";

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
        {data?.map((post) => {
          return (
            <a
              key={post.id}
              href={`/post/${post.id}`}
              className="relative cursor-pointer flex flex-col h-72 w-4/6 rounded-md"
            >
              <p className="absolute top-0 left-0 text-2xl bg-black bg-opacity-60 p-3">
                {post.title}
              </p>
              <p className="absolute bottom-0 left-0 text-lg bg-black bg-opacity-60 p-3">
                {post.content.length < 60
                  ? post.content
                  : post.content.slice(0, 60) + "..."}
              </p>
              <Image
                className="absolute top-0 left-0 -z-10"
                src={post.imageUrl}
                alt="image"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </a>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
