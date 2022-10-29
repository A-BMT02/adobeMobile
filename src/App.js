import "./App.css";
import { Benefits } from "./components/Benefits";
import { Carousel } from "./components/Carousel";
import { Top } from "./components/Top";
import { Why } from "./components/Why";
import { Latest } from "./components/Latest";
import { Categories } from "./components/Categories";
import { News } from "./components/News";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <div className="poppins">
      <Top />
      <Carousel />
      <Why />
      <Benefits />
      <Latest />
      <Categories />
      <News />
      <Reviews />
    </div>
  );
}

export default App;
