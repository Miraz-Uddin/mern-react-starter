import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="Creating a Simple React Application" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;