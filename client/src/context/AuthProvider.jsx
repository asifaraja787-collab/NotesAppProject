import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");

      return storedUser
        ? JSON.parse(storedUser)
        : null;
    } catch (error) {
      localStorage.removeItem("user");
      return null;
    }
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;