import CreatePost from "../../components/MediaPost/CreatePost";
import Post from "../../components/MediaPost/Post";
import TextPost from "../../components/MediaPost/TextPost";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="md:grid md:grid-cols-12 md:gap-5">
        <div className="hidden md:block md:col-span-3">
          <LeftSide />
        </div>
        <div className="md:col-span-6">
          <CreatePost />
          <TextPost />
          <Post />
          <Post />
        </div>
        <div className="md:col-span-3">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
