/* eslint-disable react/prop-types */
import postPhoto from "../../assets/post.jpg";
import avatar from "../../assets/avatar.png";
import moment from "moment";
import { Link } from "react-router-dom";
import { useLoveReactMutation } from "../../features/post/postApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiSlice from "../../features/api/apiSlice";

const Post = ({ post, from }) => {
  const {
    _id,
    content,
    photoUrl,
    createdAt,
    loves,
    comments = [],
    author: { name, profilePhoto } = {},
  } = post || {};
  const [loveReact, { data }] = useLoveReactMutation();
  const [isLoved, setIsLoved] = useState(false);
  const dispatch = useDispatch();

  const handleLoveReact = () => {
    const data = {};
    setIsLoved(!isLoved);
    if (!isLoved) {
      data.loves = 1;
    } else {
      data.loves = -1;
    }
    loveReact({ data, postId: _id });
  };

  useEffect(() => {
    if (from === "home") {
      if (data) {
        dispatch(
          apiSlice.util.updateQueryData(
            "getThreePosts",
            undefined,
            (draftPosts) => {
              const updatedIndex = draftPosts.posts.findIndex(
                (post) => post?._id == data?.post?._id
              );
              draftPosts.posts[updatedIndex] = data.post;
            }
          )
        );
      }
    } else {
      if (data) {
        dispatch(
          apiSlice.util.updateQueryData("getPosts", undefined, (draftPosts) => {
            const updatedIndex = draftPosts.posts.findIndex(
              (post) => post?._id == data?.post?._id
            );
            draftPosts.posts[updatedIndex] = data.post;
          })
        );
      }
    }
  }, [data, dispatch, from]);

  return (
    <div className="bg-white mb-6 p-5 rounded-lg">
      {/* post header */}

      <div className="flex justify-between items-center">
        {/* avatar */}
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={profilePhoto || avatar} />
            </div>
          </div>
          <div>
            <p className="text-base font-bold">{name}</p>
            <p className="text-xs text-gray-500 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {moment(createdAt).format("lll")}
            </p>
          </div>
        </div>
        <div className="rounded-full hover:bg-gray-100 hover:cursor-pointer p-2">
          {/* options */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
      <p className="mt-3 text-gray-700">{content}</p>
      {photoUrl && (
        <figure className="my-4 flex justify-center">
          <img
            src={photoUrl || postPhoto}
            className="rounded-lg w-full max-h-80"
            alt=""
          />
        </figure>
      )}
      {/* post bottom */}
      <div className="flex justify-between mt-3">
        {/* like button */}
        <div className="flex items-center justify-center gap-1">
          <button onClick={handleLoveReact}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLoved ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={isLoved ? "red" : "gray"}
              className="w-5 h-5 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          <p className="text-sm text-gray-500">
            {loves}
            <span className="hidden md:inline"> people like this</span>
          </p>
        </div>
        {/* comment */}
        <div className="flex items-center justify-center gap-2">
          <Link
            to={`/posts/${_id}`}
            className="flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
            <p className="text-sm text-gray-500 hover:underline">
              {comments.length}{" "}
              <span className="hidden md:inline">Comments</span>
            </p>
          </Link>
          {/* details button */}
          <Link
            to={`/posts/${_id}`}
            className="flex items-center justify-center gap-1 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <p className="text-sm text-gray-500">Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
