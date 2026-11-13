
import React from "react";

function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Update Full Name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Update Email"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 border rounded-lg"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Settings;
