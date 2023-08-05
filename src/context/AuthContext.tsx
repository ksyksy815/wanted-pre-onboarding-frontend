import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({}) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };
};

export default { AuthContext, AuthProvider };
