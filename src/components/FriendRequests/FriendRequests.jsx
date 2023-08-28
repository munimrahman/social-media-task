/* eslint-disable react/prop-types */
const SingleRequest = ({ name, common, photo }) => {
  return (
    <div className="my-3">
      <div className="flex items-center gap-2">
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
      <div className="flex mt-2 gap-3">
        <button className="bg-blue-500 text-white px-5 py-1 rounded-full text-sm">
          Confirm
        </button>
        <button className="bg-gray-200 px-5 py-1 rounded-full text-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

const FriendRequests = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <h2 className="text-lg mb-3 text-gray-700">Suggested Friends</h2>
      <hr />
      <SingleRequest
        name={"Sakib Al Hasan"}
        common={5}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
      <hr />
      <SingleRequest
        name={"Tamim Iqbal"}
        common={6}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
      <hr />
      <SingleRequest
        name={"Mehedi Miraz"}
        common={9}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
      <hr />
      <SingleRequest
        name={"Taskin Ahamed"}
        common={2}
        photo={
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        }
      />
    </div>
  );
};

export default FriendRequests;
