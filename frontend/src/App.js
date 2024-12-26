import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Admin from "./pages/Admin";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute"; // Optionnel pour des routes protégées

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav style={{ padding: "10px", background: "#f4f4f4" }}>
            <a href="/" style={{ marginRight: "10px" }}>Home</a>
            <a href="/menu" style={{ marginRight: "10px" }}>Menu</a>
            <a href="/admin" style={{ marginRight: "10px" }}>Admin</a>
            <a href="/login" style={{ marginRight: "10px" }}>Login</a>
            <a href="/register">Register</a>
          </nav>

          <Routes>
            {/* Route publique */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Route protégée pour l'administration */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

