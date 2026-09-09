import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
    return (
        <BrowserRouter>
            <div className="shell">
                <Sidebar />
                <div className="main">
                    <Header />
                    <main className="content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
