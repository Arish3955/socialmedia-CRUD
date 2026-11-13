
import React from "react";

function People() {
  const people = [
    { id: 1, name: "Arjun Singh", mutual: "5 mutual friends" },
    { id: 2, name: "Neha Sharma", mutual: "2 mutual friends" },
    { id: 3, name: "Ravi Kumar", mutual: "8 mutual friends" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">People You May Know</h1>
      <div className="space-y-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold">{person.name}</h2>
              <p className="text-gray-600 text-sm">{person.mutual}</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add Friend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
