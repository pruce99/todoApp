import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./Components/TodoInput/TodoApp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
