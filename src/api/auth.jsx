const API_URL = "https://dummyjson.com/auth/login";

export async function loginRequest(username, password) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password}),
  });

  if (!response.ok) {
    throw new Error("نام کاربری یا رمز عبور اشتباه است");
  }
  
  return response.json();
}