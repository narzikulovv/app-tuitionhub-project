import "./sass/sardor.scss"
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import Programs from "./Components/Programs";


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      <Programs/>
    </div>
  );
}

export default App;
