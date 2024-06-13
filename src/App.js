import './App.css'
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <div className='others'>
          other pages
        </div>
      </div>
    </div>
  );
}

export default App;
