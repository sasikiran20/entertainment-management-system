import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./Screens/Login";
import Payment from "./views/Payment";
import Private from "./Screens/Private";
import Menu1 from "./pages/Menu1";
import Gpay from "./views/Gpay"
import signout from "./pages/signout"




import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Payment" exact component={Payment} />
          <Route path="/Private" exact component={Private} />
          <Route path="/menu1" exact component={Menu1} />
          <Route path="/Gpay" exact component={Gpay} />
          <Route path="/signout" exact component={signout} />
          
         
       

        
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
