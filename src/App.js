import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;
