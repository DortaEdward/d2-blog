import React from "react";
import { useRouter } from "next/router";
import { trpc } from "@/utils/trpc";

const PostPageContent: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = trpc.useQuery(["get-post-by-id", { id }]);
  return <div className="max-w-screen-lg w-full">{JSON.stringify(data)}</div>;
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
