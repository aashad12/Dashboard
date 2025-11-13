import React, { useState } from 'react';
import profile from "../assets/profile.svg"

interface ProfileData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  userRole: string;
  country: string;
  city: string;
  location : string;
  
  profileImage: string;
}

const ProfilePage: React.FC = () => {
  const [profileData] = useState<ProfileData>({
    firstName: 'Aasra',
    lastName: 'Dangol',
    dateOfBirth: '12-11-2005',
    email: 'aasradangol@gmail.com',
    phone: '976543210',
    userRole: 'Admin',
    country: 'Nepal',
    city: 'Kathmandu',
    location:"Thamel",
    profileImage:profile,  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">My Profile</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex items-center gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-yellow-200 to-yellow-400">
                <img 
                  src={profileData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
              </button>
            </div>

            {/* Profile Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                {profileData.firstName} {profileData.lastName}
              </h2>
              <p className="text-gray-600 mb-1">{profileData.userRole}</p>
              <p className="text-gray-500">{profileData.city}</p>
            </div>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-900 transition flex items-center gap-2">
              <span>Edit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Name */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">First Name</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.firstName}</p>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">Last Name</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.lastName}</p>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">Date of Birth</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.dateOfBirth}</p>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">Email Address</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.email}</p>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">Phone Number</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.phone}</p>
            </div>

            {/* User Role */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">User Role</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.userRole}</p>
            </div>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Address</h3>
            <button className="bg-white text-gray-600 px-6 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center gap-2">
              <span>Edit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Country */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">Country</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.country}</p>
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">City</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.city}</p>
            </div>

            {/* Postal Code */}
            <div>
              <label className="block text-gray-500 text-sm mb-2">Location</label>
              <p className="text-gray-800 font-medium text-lg">{profileData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;