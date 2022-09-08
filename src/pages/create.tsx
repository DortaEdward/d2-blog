import React, { useState, useRef } from "react";
import Link from "next/link";

const Create = () => {
  const [titleState, setTitleState] = useState("");
  const [contentState, setContentState] = useState("");
  const [imageUrlState, setImageUrlState] = useState("");
  const handleSubmit = async (e) => {
    console.log(e.target);
  };
  return (
    <form
      className="flex flex-col max-w-screen-lg w-full gap-2 items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
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
