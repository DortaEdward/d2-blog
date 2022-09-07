import React, { useState, useRef } from "react";
import Image from "next/image";

const Create = () => {
  const [inputState, setInputState] = useState("");
  return (
    <div className="flex flex-col max-w-screen-lg w-full items-center">
      <textarea
        placeholder="Start typing here...."
        className="outline text-black p-3 w-4/5 h-72 rounded resize-none"
        onChange={(e) => {
          setInputState(e.target.value);
        }}
      />
      <div className="my-6 w-full flex flex-col mx-auto">
        <h1 className="text-2xl text-center">Live View</h1>
      </div>
    </div>
  );
};

export default Create;
