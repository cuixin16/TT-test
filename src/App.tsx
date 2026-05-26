import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { VideoGenerator } from "./pages/VideoGenerator";
import { ToolsCenter } from "./pages/ToolsCenter";
import { Publishing } from "./pages/Publishing";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<VideoGenerator />} />
            <Route path="/tools" element={<ToolsCenter />} />
            <Route path="/publish" element={<Publishing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
