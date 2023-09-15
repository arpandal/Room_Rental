import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/lists/list";
function App() {
return(
  <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home/>} />
      <Route path ="/" element = {<List/>} />
    </Routes>
  </BrowserRouter>
);
}
export default App;