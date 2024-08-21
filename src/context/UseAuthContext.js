import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useMyContext must be used within a MyContextProvider");
    }
    return context;
  };