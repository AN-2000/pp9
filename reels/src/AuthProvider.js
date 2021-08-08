import { createContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebase";

export const AuthContext = createContext();

let AuthProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        let { displayName, email, uid, photoURL } = user;

        let docRef = firestore.collection("users").doc(uid);
        let document = await docRef.get();
        if (!document.exists) {
          docRef.set({
            displayName,
            email,
            photoURL,
          });
        }

        setCurrentUser({ displayName, email, uid, photoURL });
      } else {
        setCurrentUser(user);
      }

      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  // jb user login ya logout pura krlega tab loading false hojaigi

  return (
    <AuthContext.Provider value={currentUser}>
      {!loading && children}
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;
