/* eslint-disable react/prop-types */
import moment from "moment";
import avatar from "../../assets/avatar.png";

const Comment = ({ comment }) => {
  const {
    comment: content,
    createdAt,
    author: { name = "", profilePhoto = "" } = {},
  } = comment || {};

  return (
    <div className="flex items-start gap-2 bg-gray-100 p-2 mb-2 rounded-lg">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src={profilePhoto || avatar} />
        </div>
      </div>
      <div className="">
        <h3 className="text-sm font-medium">{name || "Jon Snow"}</h3>
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
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
