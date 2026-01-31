import { useEffect } from "react";
import type { Route } from "./+types/Dashboard";
import api from "~/libs/api";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to the Dashboard page!" },
  ];
}

export default function Dashboard() {
  useEffect(() => {
   api.get("/user/profile").then((res) => {
     console.log("User Profile:", res.data);
   });
  }, []);
  return (
   <div>
    Dashboard
   </div>
  );
}
