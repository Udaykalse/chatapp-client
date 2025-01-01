import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen pt-16 bg-gray-50" >
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            <p className="text-sm text-gray-500">Your profile information</p>
          </div>

          {/* Avatar Upload Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <img
                src={selectedImg || authUser?.profilePic || "./../../public/avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-sm"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-2 right-2 
                  bg-gray-800 hover:bg-gray-700 
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200 group-hover:scale-105
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-gray-500">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* Profile Information Section */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-200 text-gray-800">
                {authUser?.fullName || "N/A"}
              </p>
            </div>

            <div>
              <div className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-200 text-gray-800">
                {authUser?.email || "N/A"}
              </p>
            </div>
          </div>

          {/* Account Information Section */}
          <div className="bg-gray-100 rounded-lg p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Member Since</span>
                <span className="text-gray-800">
                  {authUser?.createdAt?.split("T")[0] || "N/A"}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Account Status</span>
                <span className="text-green-500 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
