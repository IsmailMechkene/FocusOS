import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/layout/header/header";
import Sidebar from "./components/layout/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import Tasks from "./pages/tasks/tasks";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function AppLayout() {
    return (
        <div className="shell">
            <Sidebar />
            <div className="main">
                <Header />
                <main className="content">
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/tasks" element={<Tasks />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/*" element={<AppLayout />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
