import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Signup from "./views/Signup";
import Watch from "./views/Watch";
function App() {
  return (
    <>
      <div className="min-h-min bg-background p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
