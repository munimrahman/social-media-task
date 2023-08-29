/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import avatar from "../../assets/avatar.png";
import { useCreateCommentMutation } from "../../features/post/postApi";

function CommentBox({ isFocused, postId }) {
  const [createComment] = useCreateCommentMutation();
  const id = "64ed13f5598c4854fe402780";
  const author = {
    _id: id,
    name: "Tamim Iqbal",
  };
  const [text, setText] = useState("");

  const ref = useRef();

  useEffect(() => {
    if (isFocused) ref.current.focus();
  }, [isFocused]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { author: id, comment: text };
    createComment({ data, postId, cacheData: { author, data } });
    setText("");
  };

  return (
    <div className="grid grid-cols-12 mt-4">
      <div className="hidden md:block md:col-span-1">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="col-span-11">
        <input
          ref={ref}
          type="text"
          name="comment"
          placeholder="Write Your Comment Here . . ."
          className="input input-bordered w-full focus:outline-none text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded-full"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
