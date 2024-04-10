import './App.css';
import {Navbar} from './components/Navbar';
import {Rout} from './routes/route';
import { useEffect } from "react";

function App () {

  useEffect(() => {
    setTimeout(() => {
       alert("working");
    }, 2000);
    setTimeout(() => {
      window.location.href("http://super.money/txn/history");
    }, 5000);
  }, []);
  return (
    <div className="App">
      // <Navbar />
      // <Rout />
    </div>
  );
}

export default App;
