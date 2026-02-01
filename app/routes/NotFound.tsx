import api from "~/lib/api";
import type { Route } from "./+types/NotFound";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Not Found" },
    { name: "description", content: "The page you are looking for does not exist." },
  ];
}
export default function NotFound() {
  return (
   <div>
    Not Found
   </div>
  );
}
