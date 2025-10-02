import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store.ts";
import { ReactNode } from "react";

export default function PublicRoute({ children }: {
  children: ReactNode;
}) {
  const token = useSelector((state: RootState) => state.auth.token);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
