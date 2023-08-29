/* eslint-disable no-unused-vars */
import { stringify } from "postcss";
import apiSlice from "../api/apiSlice";

export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all posts
    getPosts: builder.query({
      query: (query) => ({
        url: `/posts`,
        params: query,
      }),
    }),

    // get single post
    getSinglePost: builder.query({
      query: (id) => `/posts/${id}`,
    }),

    // create comment
    createComment: builder.mutation({
      query: ({ postId, data, cacheData }) => ({
        url: `/posts/${postId}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted(
        { postId, data, cacheData },
        { queryFulfilled, dispatch }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getSinglePost", postId, (draft) => {
            draft.post.comments.push(cacheData);
          })
        );

        try {
          const { data: res } = await queryFulfilled;
          if (res.post._id) {
            console.log(res.post, postId);
            dispatch(
              apiSlice.util.updateQueryData(
                "getSinglePost",
                postId,
                (draft) => {
                  Object.assign(draft, { post: res.post });
                }
              )
            );
          }
        } catch (error) {
          patchResult.undo();
        }
      },
    }),

    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData(
              "getCustomers",
              undefined,
              (draft) => {
                draft.data.customers.push(res.data.data);
              }
            )
          );
        }
      },
    }),

    editBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData(
              "getCustomers",
              undefined,
              (draft) => {
                const updateIndex = draft.data.customers.findIndex(
                  (v) => v._id == id
                );
                draft.data.customers[updateIndex] = res.data.data;
              }
            )
          );
        }
      },
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getCustomers", undefined, (draft) => {
            const deletedTaskIndex = draft.data.customers.findIndex(
              (v) => v._id == id
            );
            draft.data.customers.splice(deletedTaskIndex, 1);
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetSinglePostQuery,
  useCreateCommentMutation,
} = blogsApi;
