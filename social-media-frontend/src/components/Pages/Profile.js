function Profile() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-2xl p-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold">Arish Hamid</h2>
          <p className="text-gray-600">@arish123</p>
          <p className="mt-2 text-gray-700">✨ Building LYNK, a social media platform!</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-around mt-6 text-center">
        <div>
          <p className="text-xl font-semibold">120</p>
          <p className="text-gray-500">Posts</p>
        </div>
        <div>
          <p className="text-xl font-semibold">540</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <p className="text-xl font-semibold">180</p>
          <p className="text-gray-500">Following</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <img src="https://source.unsplash.com/random/300x300?sig=1" alt="Post" className="w-full h-32 object-cover rounded-lg" />
        <img src="https://source.unsplash.com/random/300x300?sig=2" alt="Post" className="w-full h-32 object-cover rounded-lg" />
        <img src="https://source.unsplash.com/random/300x300?sig=3" alt="Post" className="w-full h-32 object-cover rounded-lg" />
        <img src="https://source.unsplash.com/random/300x300?sig=4" alt="Post" className="w-full h-32 object-cover rounded-lg" />
        <img src="https://source.unsplash.com/random/300x300?sig=5" alt="Post" className="w-full h-32 object-cover rounded-lg" />
        <img src="https://source.unsplash.com/random/300x300?sig=6" alt="Post" className="w-full h-32 object-cover rounded-lg" />
      </div>
    </div>
  );
}

export default Profile;
