import React from "react";
import { useRouter } from "next/router";
import { trpc } from "@/utils/trpc";
import Image from "next/image";
import { marked } from "marked";

const PostPageContent: React.FC<{ id: string }> = ({ id }) => {
  const createMarkup = (content: string) => {
    return { __html: content };
  };

  const { data, isLoading, error } = trpc.useQuery(["get-post-by-id", { id }]);
  if (!data?.content || typeof data?.content !== "string")
    return <h1>No Content</h1>;
  const parsedContent = marked.parse(data?.content);
  return (
    <div className="max-w-screen-lg w-full flex flex-col items-center">
      <Image src={data?.imageUrl} alt="Post Image" width={700} height={400} />
      <div dangerouslySetInnerHTML={createMarkup(data.content)} />
    </div>
  );
};

const PostPage: React.FC = () => {
  const { query } = useRouter();
  const { id } = query;

  if (!id || typeof id !== "string") {
    return <div>Post Not Found</div>;
  }
  return <PostPageContent id={id} />;
};

export default PostPage;
