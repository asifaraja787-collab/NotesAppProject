import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);

    navigate("/login");
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">
        Notes App
      </h1>

      <div className="flex gap-4 items-center">
        <p>{user?.username}</p>

        <button
          onClick={logoutHandler}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;