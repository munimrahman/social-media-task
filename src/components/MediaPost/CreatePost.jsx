const CreatePost = () => {
  return (
    // <div className="bg-white my-6 p-5 rounded-lg">
    //   {/* post header */}

    //   <div className="flex justify-between items-center">
    //     {/* avatar */}
    //     <div className="flex items-center gap-2">
    //       <div className="avatar">
    //         <div className="w-10 rounded-full">
    //           <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //         </div>
    //       </div>
    //       <div>
    //         <p className="text-base font-bold">Arya Stark</p>
    //         <p className="text-xs text-gray-500">July 26 2018, 01:03pm</p>
    //       </div>
    //     </div>
    //     <div className="rounded-full hover:bg-gray-100 hover:cursor-pointer p-2">
    //       {/* options */}
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         className="w-6 h-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
    //         />
    //       </svg>
    //     </div>
    //   </div>
    //   <p className="mt-3">
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad at pariatur
    //     laboriosam sint alias nihil aperiam earum voluptatibus vero error? Lorem
    //     ipsum dolor sit amet, consectetur adipisicing elit. Eaque, accusantium
    //     soluta! Dolorum odit earum fugit consectetur suscipit delectus provident
    //     veniam doloribus soluta adipisci quaerat ad explicabo id natus tempora
    //     tempore et fuga nobis velit obcaecati, eligendi repudiandae? Facilis,
    //     laudantium magnam dolor atque sapiente eius dolorum possimus cupiditate
    //     rem vitae sed?
    //   </p>
    //   {/* post bottom */}
    //   <div className="flex justify-between mt-3">
    //     {/* like button */}
    //     <div className="flex items-center justify-center gap-1">
    //       <div>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="gray"
    //           className="w-5 h-5 hover:cursor-pointer"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    //           />
    //         </svg>
    //       </div>
    //       <p className="text-sm text-gray-500">12 people like this</p>
    //     </div>
    //     {/* comment */}
    //     <div className="flex items-center justify-center gap-1">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="gray"
    //         className="w-5 h-5"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
    //         />
    //       </svg>
    //       <p className="text-sm text-gray-500">5 Comments</p>
    //     </div>
    //   </div>
    // </div>
    <div className="sm:rounded-lg bg-white dark:bg-black sm:dark:border dark:border-zinc-600 overflow-hidden">
      <div className="px-2 sm:px-4 pb-2 pt-5 sm:pb-6">
        <div className="flex gap-1 items-start">
          <div className="flex-shrink-0">
            <img
              className="mx-auto sm:h-14 sm:w-14 h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <div className="pl-3">
              <h1 className="font-medium sm:text-lg leading-6">
                Mostofa Nobi Tanveer{" "}
                <span className="font-normal text-gray-600 dark:text-zinc-400">
                  is feeling <span className="text-amber-400">excited</span>
                </span>
              </h1>
            </div>
            <textarea
              name="post__content"
              id="post__content"
              placeholder="What's on your mind?"
              rows="5"
              className="w-full placeholder:text-sm dark:text-zinc-200 resize-none max-h-40 focus:outline-none focus:border-none focus:ring-0 bg-transparent border-none"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="border m-2 rounded-lg overflow-hidden border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-black grid divide-gray-200 dark:divide-zinc-700 grid-cols-3 divide-y-0 divide-x">
        <button className="py-2.5 text-sm font-medium flex gap-2 items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-green-400 w-7 h-7"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zm0 15.92c-.02.03-.06.06-.08.08H3V5.08L3.08 5h17.83c.03.02.06.06.08.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z"></path>
          </svg>
          <span className="hidden sm:block text-gray-600 dark:text-zinc-200">
            Photo
          </span>
          <input
            accept="image/*"
            multiple=""
            type="file"
            name="post_images"
            id="post_images"
            className="hidden"
          />
        </button>
        <button className="py-2.5 text-sm font-medium flex gap-2 items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800">
          <span className="relative w-7 h-7">
            <span>
              <img
                alt="excited"
                src=""
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
              />
            </span>
          </span>
          <span className="hidden sm:block text-gray-600 dark:text-zinc-200">
            excited
          </span>
        </button>
        <button className="py-2.5 text-sm font-medium flex gap-2 items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-red-500 w-7 h-7"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
            <path d="M7 14.987v1.999h1.999l5.529-5.522-1.998-1.998zm8.47-4.465-1.998-2L14.995 7l2 1.999z"></path>
          </svg>
          <span className="hidden sm:block text-gray-600 dark:text-zinc-200">
            Post
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
