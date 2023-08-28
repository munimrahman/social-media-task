import { useState } from "react";
import PhotoPost from "../../components/MediaPost/PhotoPost";
import TextPost from "../../components/MediaPost/TextPost";
import EditModal from "./EditModal";

const About = () => {
  const [modalCheck, setModalCheck] = useState(false);
  const id = 5;
  return (
    <div className="mt-5 max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 px-5 md:pt5 gap-6">
        {/* info section */}
        <div className="md:col-span-4 bg-white rounded-lg px-5 pt-8 pb-5 h-min">
          <figure className="flex justify-center">
            <img
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
              alt=""
              className="w-36"
            />
          </figure>
          <h2 className="text-center my-3 text-xl font-bold">Munim Rahman</h2>
          <h3 className="">About</h3>
          <p className="text-[#999999] text-sm text-justify">
            Update Your Cover Letter
          </p>
          <div className="flex justify-between my-3">
            <div>
              <p>Email: </p>
              <p className="text-[#999999] text-sm">Update Your Birth Date</p>
            </div>
            <div>
              <p>Gender</p>
              <p className="text-[#999999] text-sm"> Not Updated</p>
            </div>
          </div>
          <div className="mb-3">
            <p>Address: </p>
            <p className="text-[#999999] text-sm">Update Your Birth Date</p>
          </div>
          <div className="mb-3">
            <p>University: </p>
            <p className="text-[#999999] text-sm">Update Your Birth Date</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => setModalCheck(!modalCheck)}
              className="btn btn-neutral"
            >
              Edit Profile
            </button>
          </div>
        </div>
        {/* update section */}
        {/* <div className="md:col-span-8 bg-white rounded-lg p-5">
          <h2 className="text-2xl font-medium">Personal Information</h2>
          <form className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label> <br />
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="dob">Date Of Birth</label>
                <br />
                <input
                  type="date"
                  id="dob"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <br />
                <select
                  id="gender"
                  className="select select-bordered w-full max-w-xs mt-1 focus:outline-none"
                >
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="bio">About Me</label>
              <br />
              <textarea
                id="bio"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Write Your Comment . . ."
              />
            </div>

            <button
              type="submit"
              className="bg-[#4C6FFF] text-white w-24 px-3 py-2 rounded-md cursor-pointer mt-2"
            >
              Update
            </button>
          </form>
        </div> */}
        {/* my posts */}
        <div className="md:col-span-8">
          <h1 className="bg-white rounded-lg p-4 text-lg font-bold mb-6">
            My Posts
          </h1>
          <TextPost />
          <PhotoPost />
          <PhotoPost />
        </div>
      </div>
      <EditModal id={id} isChecked={modalCheck} setModalCheck={setModalCheck} />
    </div>
  );
};

export default About;
