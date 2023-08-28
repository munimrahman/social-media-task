const BirthdayCard = () => {
  return (
    <div className="bg-[#45D7C4] p-5 rounded-lg birthday-bg">
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </div>
      <div className="my-8">
        <div className="flex justify-center">
          <div className="indicator">
            <span className="indicator-item badge badge-primary">31</span>
            <div>
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-white text-lg text-center my-2">
          Dan turns 31 today!
        </h3>
        <p className="text-white text-sm text-center">
          Send him your best wishes by leaving something on his wall.
        </p>
        <div className="text-center mt-3">
          <button className="text-sm border px-4 py-3 rounded text-white hover:bg-white hover:text-gray-900">
            Write Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
