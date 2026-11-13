import { useState } from "react";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Auth({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const url = isLogin ? `${API_BASE}/login` : `${API_BASE}/signup`;
      const payload = isLogin
        ? { email: form.email, password: form.password }
        : (() => {
            if (form.password !== form.confirmPassword) {
              throw new Error("Passwords do not match");
            }
            return { name: form.name, email: form.email, password: form.password };
          })();

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      // success → send user back to App.jsx
      onAuthSuccess(data.user);
    } catch (err) {
      setMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">L Y N K</h1>

        {isLogin ? (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={onChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            {msg && <p className="mt-3 text-center text-red-600">{msg}</p>}
            <p className="mt-4 text-center">
              Don’t have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={onChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={onChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={onChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 rounded-lg disabled:opacity-60"
              >
                {loading ? "Creating..." : "Sign Up"}
              </button>
            </form>
            {msg && <p className="mt-3 text-center text-red-600">{msg}</p>}
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
