import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="profile" element={<Profile />} />
		  <Route path="support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
