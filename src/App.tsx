import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { Dashboard } from "@/pages/dashboard";
import { Clients } from "@/pages/clients";
import { Documents } from "@/pages/documents";
import { Login } from "@/pages/auth/login/login";
import { Signup } from "@/pages/auth/signup/signup";
import { Error } from "@/pages/error";
import { ProtectedRoute } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="documents" element={<Documents />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
