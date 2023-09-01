import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Signup from "./views/Signup";
function App() {
  return (
    <>
      <div className="min-h-screen bg-background p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
