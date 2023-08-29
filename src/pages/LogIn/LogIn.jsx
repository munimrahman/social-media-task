import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useLogInMutation } from "../../features/auth/authApi";

function LogIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const from = location.state?.from?.pathname || "/";
  const [logIn, { data, error, isLoading }] = useLogInMutation();
  console.log(data);
  const handleLogIn = (e) => {
    e.preventDefault();
    logIn({ email, password });
  };

  useEffect(() => {
    if (error) {
      setErrorText("Invalid Email or Password");
    } else {
      setErrorText("");
    }
  }, [error]);

  const toSignUp = () => {
    navigate("/sign-up", { state: { from } });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center h-[80vh] px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 md:mt-0">
        <img className="mx-auto h-10 hidden md:block" src={logo} alt="Logo" />
        <h2 className="mt-2 text-center text-xl leading-9 tracking-tight text-gray-900">
          Log In to Your Account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="text-sm">
                <span href="#" className="text-gray-500">
                  Demo Email: jon@gmail.com
                </span>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                placeholder="John Snow"
                className="input input-bordered focus:outline-none w-full"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <span href="#" className="text-gray-500">
                  Demo Password: 123456
                </span>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                placeholder="**********"
                className="input input-bordered focus:outline-none w-full"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-red-500 text-sm">{errorText && errorText}</p>
          </div>
          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                isLoading && "cursor-wait"
              }`}
              disabled={isLoading}
            >
              {!isLoading ? "Log In" : "Loading..."}
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          Not a member?{" "}
          <span
            onClick={toSignUp}
            className="font-semibold leading-6 text-primary hover:text-blue-500 hover:cursor-pointer"
          >
            Sign Up Here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
