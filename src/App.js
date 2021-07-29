import "./sass/sardor.scss"
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import Programs from "./Components/Programs";
import Certificates from "./Components/Certificates";
import News from "./Components/News";


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      <Programs/>
      <Certificates/>
      <News/>
    </div>
  );
}

export default App;
