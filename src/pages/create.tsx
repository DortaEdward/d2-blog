import { useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";

const Create = () => {
  const [inputState, setInputState] = useState("");
  return (
    <div>
      <input
        className="outline"
        type="text"
        onChange={(e) => {
          setInputState(e.target.value);
        }}
      />
      {parse(inputState)}
    </div>
  );
};

export default Create;
