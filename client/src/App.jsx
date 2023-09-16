import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const LazySignup = lazy(() => import("./views/Signup"));
const LazyWatch = lazy(() => import("./views/Watch"));

function App() {
  return (
    <>
      <div className="h-screen bg-background p-4 custom-scrollbar overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center">
              <Loading />{" "}
              <p className="text-white text-sm font-semibold">Loading...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/signup" element={<LazySignup />} />
            <Route path="/watch/:video_id" element={<LazyWatch />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
