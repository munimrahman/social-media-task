import Post from "../../components/MediaPost/Post";
import { useGetPostsQuery } from "../../features/post/postApi";
import LeftSide from "../Home/LeftSide";
import RightSide from "../Home/RightSide";

const Media = () => {
  const { data: { posts = [] } = {} } = useGetPostsQuery();

  return (
    <div className="mt-5">
      <div className="md:grid md:grid-cols-12 md:gap-5">
        <div className="hidden md:block md:col-span-3">
          <LeftSide />
        </div>
        <div className="md:col-span-6">
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
        <div className="md:col-span-3">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Media;
