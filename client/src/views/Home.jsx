import { Navbar, Sidebar } from "../components";
import Content from "../components/Content";

const Home = () => {
  // home will have only 3 components navbar, sidebar and content
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <section className="flex flex-row gap-3">
        <Sidebar />
        <Content />
      </section>
    </div>
  );
};

export default Home;
