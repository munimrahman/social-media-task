import { useEffect, useRef, useState } from "react";

const useAutoSizeTextArea = (textAreaRef, value) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "51px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

const CreatePost = () => {
  const [textValue, setTextValue] = useState("");
  const [imagePath, setImagePath] = useState(null);

  // const onBlur = () => setFocused(false);
  const textAreaRef = useRef(null);
  useAutoSizeTextArea(textAreaRef.current, textValue);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePath(URL.createObjectURL(event.target.files[0]));
    }
  };

  const removeImage = () => {
    setImagePath(null);
  };

  return (
    <div className="rounded-lg bg-white dark:bg-black sm:dark:border dark:border-zinc-600 overflow-hidden">
      <div className="px-2 sm:px-4 pt-5 pb-">
        <div className="flex gap-1 items-start">
          <div className="flex-shrink-0">
            <img
              className="mx-auto sm:h-14 sm:w-14 h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full space-y-2 pl-3">
            <div className="">
              <h1 className="font-medium sm:text-lg leading-6">Jon Snow</h1>
            </div>
            <textarea
              ref={textAreaRef}
              name="post__content"
              id="post__content"
              placeholder="What's on your mind?"
              rows="2"
              className="w-full placeholder:text-sm dark:text-zinc-200 resize-none max-h-40 focus:outline-none focus:border-none focus:ring-0 bg-transparent border-none"
              // onFocus={onFocus}
              // onBlur={onBlur}
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></textarea>
          </div>
        </div>
        {imagePath && (
          <div className="relative w-full">
            <div className="sm:p-2">
              <div className="relative h-72 w-full sm:rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-600">
                <span>
                  <img
                    alt="uploaded-image"
                    src={imagePath}
                    // decoding="async"
                    // data-nimg="fill"
                  />
                </span>
              </div>
            </div>
            <button
              onClick={removeImage}
              className="absolute top-3 right-1 mr-2.5"
              type="button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-5 w-5 box-content p-2 rounded-full bg-white border dark:border-zinc-600 dark:bg-zinc-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="border m-2 rounded-lg overflow-hidden border-gray-200 bg-gray-50 grid divide-gray-200 grid-cols-2 divide-y-0 divide-x">
        {/* upload photo */}
        <label className="py-2.5 text-sm font-medium flex gap-2 items-center justify-center hover:bg-gray-100 hover:cursor-pointer">
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
            type="file"
            accept="image/*"
            multiple=""
            name="post_images"
            id="post_images"
            className="hidden"
            onChange={onImageChange}
          />
        </label>
        {/* post button */}
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
