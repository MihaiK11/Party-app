import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MainPage from "./MainPage";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Create the data object to send to the backend
        const signUpData = {
            username,
            password,
            email
        };
        try {
            // Send the data to the backend (replace with your API endpoint)
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.json();
            console.log("Success:", responseData);
            // Optionally, reset form fields here or navigate to another page

        } catch (error) {
            console.error("Error:", error);
        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <p>Sign up for a new account.</p>
            <form>
                <label htmlFor="username">Username:
                    <input 
                        type="text" 
                        id="username" 
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="password">Password:
                    <input 
                    type="password" 
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <br />
                </label>
                <label htmlFor="email">Email:
                    <input 
                        type="email" 
                        id="email" 
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
            <Link to="/">Go to Main Page</Link>
        </div>
    );
}

export default SignUp;