import dummyImage from "../images/camera.png";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const PostCard = () => {
  const dummyData = {
    id: "1",
    title: "Test Title for post",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies lacus sed turpis tincidunt id aliquet risus. Purus semper eget duis at tellus at urna. Quam quisque id diam vel quam elementum pulvinar. Ornare arcu odio ut sem. In vitae turpis massa sed. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
  };
  return (
    <a
      href={`/post/${dummyData.id}`}
      className="relative cursor-pointer flex flex-col h-72 w-4/6 rounded-md"
    >
      <p className="absolute top-0 left-0 text-2xl bg-black bg-opacity-60 p-3">
        {dummyData.title}
      </p>
      <p className="absolute bottom-0 left-0 text-lg bg-black bg-opacity-60 p-3">
        {dummyData.description.length < 60
          ? dummyData.description
          : dummyData.description.slice(0, 60) + "..."}
      </p>
      <Image
        className="absolute top-0 left-0 -z-10"
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
        alt="image"
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
      />
    </a>
  );
};

export default PostCard;
