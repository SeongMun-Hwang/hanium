import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from "./Menubar";
import Main from "./Main";
import Login from "./Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Menubar/>
          <Main/>
          <Login/>
      </header>
    </div>
  );
}

export default App;
