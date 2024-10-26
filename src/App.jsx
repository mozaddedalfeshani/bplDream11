import "./App.css";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <>
      {/* container {
      navbar, 
      hero section,
      product catagory 
  }
    about page */}
      <div className="container">
        {/* Navbar + */}
        <NavBar></NavBar>
      </div>
    </>
  );
}

export default App;
