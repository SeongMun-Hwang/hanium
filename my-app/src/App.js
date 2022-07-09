import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from "./Menubar";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Menubar/>
          <Main/>
      </header>
    </div>
  );
}

export default App;
