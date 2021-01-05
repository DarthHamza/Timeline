import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <Header />
        <List />
      </div>
    </section>
  );
}

export default App;
