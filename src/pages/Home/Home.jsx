import CreatePost from "../../components/MediaPost/CreatePost";
import Post from "../../components/MediaPost/Post";
import { useGetThreePostsQuery } from "../../features/post/postApi";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  const { data: { posts = [] } = {} } = useGetThreePostsQuery();
  return (
    <div className="mt-5">
      <div className="md:grid md:grid-cols-12 md:gap-5">
        <div className="hidden md:block md:col-span-3">
          <LeftSide />
        </div>
        <div className="md:col-span-6">
          <CreatePost />
          <h1 className="bg-white rounded-lg p-4 text-lg font-bold mb-5">
            Top Three Popular Posts
          </h1>
          {posts.map((post) => (
            <Post post={post} key={post._id} from={"home"} />
          ))}
        </div>
        <div className="md:col-span-3">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
