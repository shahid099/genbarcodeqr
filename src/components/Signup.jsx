import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle signup logic here
    try {
      const response = await fetch('https://barcodeqrapi.onrender.com/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password }),
      })

      const data = await response.json();
      if (response.ok) {
        // Save the token to local storage
        localStorage.setItem('token', data.token);
        setMessage(data.message); // Success message
        router.push('/'); // Redirect to home page
        alert(data.message); // Show success alert
      } else {
        setMessage(data.message); // Error message
        alert(data.message); // Show error alert
      }
      
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred');
      alert('An unexpected error occurred'); // Show alert for unexpected errors
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg my-16">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Sign Up
          </button>
        </form>
        <strong className="text-center">{message && <p>{message}</p>}</strong>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
