import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path = '/' component = {Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
