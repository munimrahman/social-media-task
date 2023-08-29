/* eslint-disable no-unused-vars */
import apiSlice from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (query) => ({
        url: `/users`,
        params: query,
      }),
    }),

    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),

    getUserByEmail: builder.query({
      query: (email) => ({
        url: `/current-user?email=${email}`,
      }),
    }),

    editUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        try {
          const { data: res } = await queryFulfilled;
          if (res) {
            dispatch(
              apiSlice.util.updateQueryData("getUser", id, (draft) => {
                Object.assign(draft, { user: res.user });
              })
            );
          }
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
  useGetUserByEmailQuery,
} = usersApi;
