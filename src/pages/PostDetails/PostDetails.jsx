import LeftSide from "../Home/LeftSide";
import RightSide from "../Home/RightSide";
import Post from "./Post";

const PostDetails = () => {
  return (
    <div className="mt-5">
      <div className="md:grid md:grid-cols-12 md:gap-5">
        <div className="hidden md:block md:col-span-3">
          <LeftSide />
        </div>
        <div className="md:col-span-6">
          <Post />
        </div>
        <div className="md:col-span-3">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
