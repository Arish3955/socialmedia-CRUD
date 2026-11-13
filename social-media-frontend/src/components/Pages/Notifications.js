
import React from "react";

function Notifications() {
  const notifications = [
    "Neha Sharma liked your post",
    "Ravi Kumar sent you a friend request",
    "Arjun Singh commented on your photo",
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul className="space-y-3">
        {notifications.map((note, index) => (
          <li
            key={index}
            className="border p-3 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
