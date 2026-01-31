import api from "~/libs/api";
import type { Route } from "./+types/User";
import { useEffect } from "react";
import { useProvider } from "~/libs/hooks/useProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User" },
    { name: "description 1", content: "Welcome to React Router! 1" },
  ];
}

export default function User() {
  const {logout}  = useProvider();
  return <>Hello User <button onClick={logout}>Logout</button></>
}
