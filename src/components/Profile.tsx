import React, { useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  location: string;
  profileImage: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    name: "Aasra Sharma",
    email: "aasra@example.com",
    bio: "Full Stack Developer | Tech Enthusiast | Lifelong Learner",
    location: "Kathmandu, Nepal",
    profileImage: "https://i.pravatar.cc/150?img=3",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-400">{user.location}</p>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Bio</h3>
          {isEditing ? (
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          ) : (
            <p className="text-gray-600">{user.bio}</p>
          )}
        </div>

        {/* Edit Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleEditToggle}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              isEditing
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-indigo-500 hover:bg-indigo-600 text-white"
            }`}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
