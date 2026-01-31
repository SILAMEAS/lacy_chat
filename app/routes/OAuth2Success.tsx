import { useEffect } from "react";
import type { Route } from "./+types/OAuth2Success";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OAuth2 Success" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function OAuth2Success() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Read token from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // 2. Store token (DEV: localStorage)
      localStorage.setItem("accessToken", token);

      // 3. Remove token from URL
      window.history.replaceState({}, document.title, "/");

      // 4. Redirect to dashboard
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <p>Logging you in...</p>;
}