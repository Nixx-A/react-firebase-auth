import { Routes, Route } from "react-router-dom";
import { Register } from "./Components/Register";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { AuthProvider } from "./Context/authContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";

function App () {

  return (
    <main className="bg-slate-300 flex h-screen w-screen text-white">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </main>
  )
}

export default App
