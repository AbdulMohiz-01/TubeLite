import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
function App() {
  return (
    <>
      <div className="min-h-screen bg-background p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
