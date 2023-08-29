/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {
  useEditUserMutation,
  useGetUserQuery,
} from "../../features/user/userApi";

const initialState = {
  name: "",
  email: "",
  address: "",
  university: "",
  profilePhoto: "",
  about: "",
};

function EditModal({ id, isChecked, setModalCheck }) {
  const [userData, setUserData] = useState(initialState);
  const { data: { user } = {} } = useGetUserQuery(id);
  const [editUser] = useEditUserMutation();

  useEffect(() => {
    if (user?.name) setUserData((pre) => ({ ...pre, name: user.name }));
    if (user?.email) setUserData((pre) => ({ ...pre, email: user.email }));
    if (user?.address)
      setUserData((pre) => ({ ...pre, address: user.address }));
    if (user?.about) setUserData((pre) => ({ ...pre, about: user.about }));
    if (user?.profilePhoto)
      setUserData((pre) => ({ ...pre, profilePhoto: user.profilePhoto }));
    if (user?.university)
      setUserData((pre) => ({ ...pre, university: user.university }));
  }, [user]);

  const handleChange = (e) => {
    const data = { ...userData };
    data[e.target.name] = e.target.value;
    setUserData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser({ data: userData, id });
    setModalCheck(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={isChecked}
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Edit Profile</h3>
          <form className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="input input-sm input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="input input-sm input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={userData.email}
                  onChange={handleChange}
                  disabled
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="address">Address</label> <br />
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Dhaka, Bangladesh"
                  className="input input-sm input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={userData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="university">University</label>
                <br />
                <input
                  type="text"
                  id="university"
                  name="university"
                  placeholder="Dhaka University"
                  className="input input-sm input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={userData.university}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="profilePhoto">Profile Photo Link</label>
              <br />
              <input
                type="text"
                id="profilePhoto"
                name="profilePhoto"
                placeholder="https://placehold.co/500"
                className="input input-sm input-bordered w-full mt-1 focus:outline-none"
                value={userData.profilePhoto}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="about">About Me</label>
              <br />
              <textarea
                id="about"
                name="about"
                className="textarea textarea-bordered focus:outline-none w-full h-20 mt-1"
                placeholder="About  . . ."
                value={userData.about}
                onChange={handleChange}
              />
            </div>
          </form>

          <div className="modal-action">
            <button onClick={handleSubmit} className="btn btn-neutral btn-sm">
              Save
            </button>
            <button
              onClick={() => setModalCheck(!isChecked)}
              className="btn btn-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
