import api from "~/libs/api";
import type { Route } from "./+types/User";
import { useProvider } from "~/libs/hooks/useProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to the Login page!" },
  ];
}

export default function Login() {
  const {loginWithGoogle}=useProvider();
  return (
    <button onClick={loginWithGoogle}>
      Login with Google
    </button>
  );
}
