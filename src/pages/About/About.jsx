import { useState } from "react";
import Post from "../../components/MediaPost/Post";
import EditModal from "./EditModal";
import { useGetPostsQuery } from "../../features/post/postApi";
import { useGetUserByEmailQuery } from "../../features/user/userApi";
import avatar from "../../assets/avatar.png";

const About = () => {
  const [modalCheck, setModalCheck] = useState(false);
  const emailC = "tamim@gmail.com";
  const { data: { posts = [] } = {} } = useGetPostsQuery();
  const {
    data: {
      user: { _id, name, profilePhoto, email, address, university, about } = {},
    } = {},
  } = useGetUserByEmailQuery(emailC);
  const myPosts = posts.filter((post) => post.authorEmail === emailC);

  return (
    <div className="mt-5 max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 px-5 md:pt5 gap-6">
        {/* info section */}
        <div className="md:col-span-4 bg-white rounded-lg px-5 pt-8 pb-5 h-min">
          <figure className="flex justify-center">
            <img src={profilePhoto || avatar} alt="" className="w-36" />
          </figure>
          <h2 className="text-center my-3 text-xl font-bold">{name}</h2>
          <h3 className="">About</h3>
          <p className="text-[#999999] text-sm text-justify">{about}</p>
          <div className="my-3">
            <p>Email: </p>
            <p className="text-[#999999] text-sm">{email}</p>
          </div>
          <div className="mb-3">
            <p>Address: </p>
            <p className="text-[#999999] text-sm">{address}</p>
          </div>
          <div className="mb-3">
            <p>University: </p>
            <p className="text-[#999999] text-sm">{university}</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => setModalCheck(!modalCheck)}
              className="btn btn-neutral"
            >
              Edit Profile
            </button>
          </div>
        </div>
        {/* my posts */}
        <div className="md:col-span-8">
          <h1 className="bg-white rounded-lg p-4 text-lg font-bold mb-6">
            My Posts
          </h1>
          {myPosts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
      <EditModal
        id={_id}
        isChecked={modalCheck}
        setModalCheck={setModalCheck}
      />
    </div>
  );
};

export default About;
