import { createContext, useState } from "react";

export const AuthContext = createContext();

let AuthProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState(null);
  let [loading, setLoading] = useState(true);



  // jb user login ya logout pura krlega tab loading false hojaigi

  return (
    <AuthContext.Provider value={currentUser}>

      {!loading && children}


    </AuthContext.Provider>
  );
};

export default AuthProvider;
