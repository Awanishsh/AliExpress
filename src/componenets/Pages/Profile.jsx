import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>
        
        <div className="flex items-center justify-center mb-6">
          <img
            src={user?.profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Name:</h3>
            <p className="text-gray-700">{user?.name || "N/A"}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Email:</h3>
            <p className="text-gray-700">{user?.email || "N/A"}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Phone:</h3>
            <p className="text-gray-700">{user?.phone || "N/A"}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Address:</h3>
            <p className="text-gray-700">{user?.address || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
