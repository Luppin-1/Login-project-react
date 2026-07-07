import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (loggedInUser) {
    return <DashboardPage username={loggedInUser} onLogout={() => setLoggedInUser(null)} />;
  }

  return <LoginPage onLogin={setLoggedInUser} />;
}
// username : emilys
// password : emilyspass