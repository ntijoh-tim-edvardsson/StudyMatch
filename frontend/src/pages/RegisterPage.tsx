import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/userApi";

export default function RegisterPage() {
  //define state variables for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try{
      //call api

      const newUser = await registerUser({Name: "Test User", Email: email, Password: password});
      
      console.log("User registered:", newUser);
      navigate("/myprofile");
    } catch (err:any) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        { password && confirmPassword && password === confirmPassword ? (
          <>
            <p className="text-green-600">Passwords match!</p>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
          </>
        ) : ( password.length != 0 &&
          <p className="text-red-500">Passwords do not match.</p>
        )}

      </form>
    </div>
  );
}
