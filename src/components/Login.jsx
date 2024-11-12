import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router  = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle login logic here
    try {
      const response = await fetch('https://barcodeqrapi.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      })
  
      const data = await response.json();
  
      if(response.ok) {
          // Save the token to local storage
          localStorage.setItem('token', data.token);
          router.push('/'); // Redirect to home page
          alert(data.message); // Show success alert
      } else {
        alert(data.message); // Show error alert
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred'); // Show alert for unexpected errors
    }
  };

  // shahid26
  // shahid26@gmail.com
  // 098765432

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600"> 
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg my-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In here...</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don&#39;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
