import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

function Register() {
  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/auth/register",
        {
          username,
          email,
          password,
        }
      );

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <form
        onSubmit={submitHandler}
        className="border p-6 rounded"
      >
        <h1 className="text-2xl font-bold mb-4">
          Register
        </h1>

        <input
          placeholder="Username"
          className="border p-2 w-full mb-3"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="bg-green-600 text-white p-2 w-full"
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-1"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;