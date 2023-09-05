import { Navbar, Sidebar } from "../components";
import Content from "../components/Content";
import { useState } from "react";

const Home = () => {
  const [contentType, setContentType] = useState("trending"); // ["home", "trending", "subscribed" ]
  const disguisedContentTypeFunction = (type) => setContentType(type);

  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <section className="flex flex-row gap-3">
        <Sidebar disguisedFunc={disguisedContentTypeFunction} />
        <Content type={contentType} />
      </section>
    </div>
  );
};

export default Home;
