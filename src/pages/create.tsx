import React, { useState, useRef } from "react";
import Link from "next/link";
import { trpc } from "@/utils/trpc";

const Create: React.FC = () => {
  const [titleState, setTitleState] = useState("");
  const [imageUrlState, setImageUrlState] = useState("");
  const [contentState, setContentState] = useState("");

  const [error, setError] = useState("");

  const { mutate, isLoading } = trpc.useMutation("createPost", {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: titleState,
      imageUrl: imageUrlState,
      content: contentState,
    };
    mutate(payload);
    setTitleState("");
    setImageUrlState("");
    setContentState("");
  };

  return (
    <form
      className="flex flex-col max-w-screen-lg w-full gap-2 items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
        required
        className="p-3 w-4/5 rounded text-black"
        onChange={(e) => {
          setTitleState(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="ImageUrl"
        className="p-3 w-4/5 rounded text-black"
        onChange={(e) => {
          setImageUrlState(e.target.value);
        }}
      />
      <textarea
        required
        placeholder="Start typing here...."
        className="outline text-black p-3 w-4/5 h-72 rounded resize-none"
        onChange={(e) => {
          setContentState(e.target.value);
        }}
      />
      <div className="flex gap-4 m-2">
        <Link href="/">
          <a className="py-1 px-6 bg-gray-700 rounded cursor-pointer">Return</a>
        </Link>
        <button
          type="submit"
          className="py-1 px-6 bg-blue-500 rounded cursor-pointer"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Create;
