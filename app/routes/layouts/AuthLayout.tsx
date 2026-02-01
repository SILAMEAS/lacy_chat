import { Navigate, Outlet } from "react-router"
import { checkTokenInfo } from "~/lib/utils/checkTokenInfo"

export default function AuthLayoutRoute() {
  if (!checkTokenInfo()) {
    return <Navigate to="/login" replace />
  }
  return (
    <div className="auth-layout min-h-screen">
      <Outlet />
    </div>
  )
}
