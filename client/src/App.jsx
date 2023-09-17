import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import { lazy } from "react";
import NotFound from "./components/NotFound";

const LazySignup = lazy(() => import("./views/Signup"));
const LazyWatch = lazy(() => import("./views/Watch"));

function App() {
  return (
    <>
      <div className="h-screen bg-background p-4 custom-scrollbar overflow-y-scroll">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signup" element={<LazySignup />} />
          <Route path="/watch/:video_id" element={<LazyWatch />} />

          {/* Define the Not Found route at the end */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
