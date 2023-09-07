import { Navbar, Sidebar } from "../components";
import Content from "../components/Content";

const Home = () => {
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
