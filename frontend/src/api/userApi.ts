const BASE_URL = "http://localhost:5040/api";

export async function registerUser(user:{
    Name:string;
    Email:string;
    Password:string;
}) {
    const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to register user");
    }

    return response.json();
}