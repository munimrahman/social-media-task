import { useEffect } from "react";

const useTitle = (title, prevailOnUnmount = false) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = "Loop Link | Connect With You Friend";
      }
    },
    [prevailOnUnmount]
  );
};

export default useTitle;
