import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("No user logged in");
        return;
      }

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("User data not found in Firestore");
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  }

  return (
    <div className="profile-container">
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.firstName}</h3>
          <p>FirstName: {userDetails.firstName}</p>
          <p>LastName: {userDetails.lastName}</p>
          <p>Email: {userDetails.email}</p>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
