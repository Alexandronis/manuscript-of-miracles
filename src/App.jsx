import { useState } from "react";
import AccessForm from "./components/AccessForm";
import MainContent from "./components/mainContent";

export default function App() {
  const [email, setEmail] = useState(localStorage.getItem("accessEmail") || "");

  const handleAccess = (emailValue) => {
    localStorage.setItem("accessEmail", emailValue);
    setEmail(emailValue);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessEmail");
    setEmail("");
  };

  return email ? (
    <MainContent email={email} onLogout={handleLogout} />
  ) : (
    <AccessForm onAccess={handleAccess} />
  );
}

