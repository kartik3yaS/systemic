import React from "react";
import Main1 from "./Components/Main1";
import Slider from "./Components/Slider";
import EmbedLink from "./Components/EmbedLink";
import Main2 from "./Components/Main2";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Main1 />
        <Slider />
        <Main2 />
        <EmbedLink />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;