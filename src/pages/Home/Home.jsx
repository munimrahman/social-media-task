import CreatePost from "../../components/MediaPost/CreatePost";
import PhotoPost from "../../components/MediaPost/PhotoPost";
import TextPost from "../../components/MediaPost/TextPost";

const Home = () => {
  return (
    <div className="border mt-3">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 border">
          <h1>Left Sidebar</h1>
        </div>
        <div className="col-span-6">
          <div></div>
          <CreatePost />
          <TextPost />
          <PhotoPost />
          <PhotoPost />
        </div>
        <div className="col-span-3 border">
          <h1>Right Sidebar</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
