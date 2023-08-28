/* eslint-disable react/prop-types */
const SingleFriend = ({ name, common, photo }) => {
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex items-center gap-1">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={photo} />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{common} Common Friends</p>
        </div>
      </div>
      <div>
        <button>
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
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SuggestFriend = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <h2 className="text-lg mb-3 text-gray-700">Suggested Friends</h2>
      <hr />
      <SingleFriend
        name={"Sakib Al Hasan"}
        common={5}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
      <hr />
      <SingleFriend
        name={"Tamim Iqbal"}
        common={6}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
      <hr />
      <SingleFriend
        name={"Mehedi Miraz"}
        common={9}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
      <hr />
      <SingleFriend
        name={"Taskin Ahamed"}
        common={2}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
    </div>
  );
};

export default SuggestFriend;
