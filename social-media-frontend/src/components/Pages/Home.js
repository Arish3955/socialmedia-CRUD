// src/pages/Home.js
import { useState } from "react";

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Arish Hamid",
      content: "Hello world! This is my first post 🎉",
      likes: 3,
      comments: 1,
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Just joined LYNK 🚀",
      likes: 5,
      comments: 2,
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    if (newPost.trim() === "") return;

    const newPostObj = {
      id: posts.length + 1,
      author: "You",
      content: newPost,
      likes: 0,
      comments: 0,
    };

    setPosts([newPostObj, ...posts]); // Add new post to top
    setNewPost(""); // Clear input
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-6">
      {/* Post Creation Box */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <form onSubmit={handlePost}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </form>
      </div>

      {/* Posts Feed */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 rounded-2xl shadow space-y-2"
        >
          <h3 className="font-semibold text-gray-800">{post.author}</h3>
          <p className="text-gray-700">{post.content}</p>
          <div className="flex space-x-4 text-sm text-gray-600 mt-2">
            <button className="hover:text-blue-600">👍 {post.likes} Likes</button>
            <button className="hover:text-blue-600">
              💬 {post.comments} Comments
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
