import { type RouteConfig } from "@react-router/dev/routes";

export default [
  // Unauthenticated routes
  {
    path: "/login",
    file: "routes/Login.tsx",
  },
  // OAuth2 success callback route
  {
    path: "/oauth2/success",
    file: "routes/OAuth2Success.tsx",
  },

  // Authenticated layout
  {
    file: "routes/layouts/AuthLayout.tsx",
    path: "/",
    children: [
      // Dashboard route
      {
        index: true,
        file: "routes/Dashboard.tsx",
      },
      // User route
      {
        path: "/user",
        file: "routes/User.tsx",
      },
      // Catch-all route for 404 Not Found
      {
        path: "*",
        file: "routes/NotFound.tsx",
      },
    ],
  },
] satisfies RouteConfig;
