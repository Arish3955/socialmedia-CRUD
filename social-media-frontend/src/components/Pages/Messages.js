// src/pages/Messages.js
import React, { useState } from "react";

const users = [
  { id: 1, name: "Arish", lastMessage: "Hey, how are you?" },
  { id: 2, name: "Hamid", lastMessage: "Let’s catch up tomorrow!" },
  { id: 3, name: "John", lastMessage: "Did you see my post?" },
];

const initialMessages = {
  1: [
    { from: "me", text: "Hello Arish!" },
    { from: "Arish", text: "Hey, how are you?" },
  ],
  2: [
    { from: "me", text: "Hi Hamid!" },
    { from: "Hamid", text: "Let’s catch up tomorrow!" },
  ],
  3: [
    { from: "John", text: "Did you see my post?" },
  ],
};

function Messages() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { from: "me", text: input };
    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...prev[selectedUser.id], newMessage],
    }));
    setInput("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/3 border-r bg-gray-100">
        <h2 className="p-4 text-lg font-bold">Messages</h2>
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`p-4 cursor-pointer hover:bg-gray-200 ${
              selectedUser.id === user.id ? "bg-gray-300" : ""
            }`}
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.lastMessage}</p>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg">{selectedUser.name}</h2>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages[selectedUser.id].map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.from === "me" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-3 py-2 rounded-lg ${
                  msg.from === "me"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <form onSubmit={handleSend} className="p-4 border-t flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
